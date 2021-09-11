import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { IBlockResponse, IPageBlocksResponse } from "../../models/response/BlockResponse"
import BlockService from "../../services/BlockService"
import { blockActionTypes, IBlockAction, IBlockState } from "../types/block"
import { alertErrorOrMessageCreator } from "./alert"
import produce from 'immer'
import { WritableDraft } from "immer/dist/internal"
import { IPageState } from "../types/page"
import { IProjectsState } from "../types/projects"


export const getBlocksWithType = (blockType: string) => {
	return async (dispatch: Dispatch<IBlockAction>) => {

		dispatch(blockStartCreator())

		try {
			const response = await BlockService.getWithType(blockType)

			dispatch(blockGetBlocksList(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(blockEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const getPageBlocks = (pageId: string) => {
	return async (dispatch: Dispatch<IBlockAction>) => {

		dispatch(blockStartCreator())

		try {
			const response = await BlockService.getPageBlocks(pageId)

			dispatch(blockGetPageBlocks(response.data))
			dispatch(addBlocksToChangeHistory([], response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(blockEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const addBlockToPage = (blockId: string) => {
	return async (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState, page: IPageState }) => {

		// dispatch(blockStartCreator())
		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks
		const pageId: string = getState().page.activePage.id

		try {
			const response = await BlockService.addBlockToPage(pageId, blockId)

			const newBlockList: IPageBlocksResponse[] = produce(blocks, (draft: IPageBlocksResponse[]) => {
				draft.push(response.data.block)
			})

			dispatch(addBlocksToChangeHistory(changeHistory, newBlockList))
			dispatch(blockGetPageBlocks(newBlockList))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				// dispatch(blockEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}
		}
	}
}

export const addBlocksToChangeHistory = (changeHistory: Array<IPageBlocksResponse[]>, blocks: IPageBlocksResponse[]): IBlockAction => {

	const newChangeHistory = [...changeHistory, blocks].slice(-4)

	return {
		type: blockActionTypes.BLOCK_ADD_TO_CHANGE_HISTORY,
		payload: newChangeHistory
	}
}

export const changeBlockConfigs = (configObject: any) => {
	return (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState }) => {

		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks
		const blockId: string = getState().block.activeBlock.blockId

		const newBlockList: IPageBlocksResponse[] = produce(blocks, (draft: IPageBlocksResponse[]) => {
			draft.filter(i => i.blockId === blockId)[0].blockConfigs = configObject
		})

		dispatch(addBlocksToChangeHistory(changeHistory, newBlockList))
		// dispatch(saveBlockConfigs(newBlockList))
		dispatch(blockGetPageBlocks(newBlockList))
	}
}

export const changeBlockContent = (contentObject: any) => {
	return (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState }) => {

		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks
		const blockId: string = getState().block.activeBlock.blockId

		const newBlockList: IPageBlocksResponse[] = produce(blocks, (draft: IPageBlocksResponse[]) => {
			draft.filter(i => i.blockId === blockId)[0].blockContent = contentObject
		})

		dispatch(addBlocksToChangeHistory(changeHistory, newBlockList))
		// dispatch(saveBlockConfigs(newBlockList))
		dispatch(blockGetPageBlocks(newBlockList))
	}
}

export const deleteBlock = (blockId: string) => {
	return (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState }) => {

		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks

		const newBlockList: IPageBlocksResponse[] = produce(blocks, (draft: IPageBlocksResponse[]) => {
			const index = draft.findIndex(i => i.blockId === blockId)
			if (index !== -1) draft.splice(index, 1)
		})

		dispatch(addBlocksToChangeHistory(changeHistory, newBlockList))
		dispatch(blockGetPageBlocks(newBlockList))
	}
}

export const showHideBlock = () => {
	return (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState }) => {

		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks
		const activeBlock: IPageBlocksResponse = getState().block.activeBlock

		const newBlockList: IPageBlocksResponse[] = produce(blocks, (draft: IPageBlocksResponse[]) => {
			const index = draft.findIndex(i => i.blockId === activeBlock.blockId)
			if (index !== -1) draft[index].blockIsHidden = !activeBlock.blockIsHidden
		})

		dispatch(addBlocksToChangeHistory(changeHistory, newBlockList))
		dispatch(blockGetPageBlocks(newBlockList))
	}
}

export const moveBlock = (direction: 'up' | 'down') => {
	return (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState }) => {

		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks
		const activeBlock: IPageBlocksResponse = getState().block.activeBlock

		const newBlockList: IPageBlocksResponse[] = produce(blocks, (draft: IPageBlocksResponse[]) => {
			const index = draft.findIndex(i => i.blockId === activeBlock.blockId)
			if (index !== -1) {
				if (index !== 0 && direction === 'up') {
					const prevBlock = draft[index - 1]
					const targetBlock = draft[index]
					draft[index - 1] = targetBlock
					draft[index] = prevBlock
				}
				if (index !== (blocks.length - 1) && direction === 'down') {
					const nextBlock = draft[index + 1]
					const targetBlock = draft[index]
					draft[index + 1] = targetBlock
					draft[index] = nextBlock
				}
			}
		})

		dispatch(addBlocksToChangeHistory(changeHistory, newBlockList))
		dispatch(blockGetPageBlocks(newBlockList))
	}
}

export const copyBlock = () => {
	return async (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState, page: IPageState }) => {
		// dispatch(blockStartCreator())
		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks
		const activeBlock: IPageBlocksResponse = getState().block.activeBlock
		const pageId: string = getState().page.activePage.id

		const originalBlock: string = JSON.stringify(activeBlock)

		try {
			const response = await BlockService.copyBlock(pageId, originalBlock)

			const newBlockList: IPageBlocksResponse[] = produce(blocks, (draft: IPageBlocksResponse[]) => {
				const index = draft.findIndex(i => i.blockId === activeBlock.blockId)
				draft.splice(index, 0, response.data.block)
			})

			dispatch(addBlocksToChangeHistory(changeHistory, newBlockList))
			dispatch(blockGetPageBlocks(newBlockList))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				// dispatch(blockEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}
		}
	}
}

export const saveBlocksInDB = (showMessage: boolean = false) => {
	return async (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState, page: IPageState, projects: IProjectsState }) => {

		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks
		const pageId: string = getState().page.activePage.id
		const projectName: string = getState().projects.activeProject.link
		// const dtoBlocks: string = JSON.stringify(blocks)

		const formData = new FormData()

		formData.append('pageId', pageId)
		formData.append('projectName', projectName)

		const newBlockList: IPageBlocksResponse[] = produce(blocks, (draft: IPageBlocksResponse[]) => {

			draft.map(block => {
				let key: string
				const obj: Record<string, any> = block.blockContent
				const blockId = block.blockId

				for (key in obj) {
					if (obj[key] instanceof Array) {
						let fileArr = obj[key]
						const fieldName: string = blockId + '_' + key

						if (fileArr[0] instanceof File) {
							fileArr.forEach((file: File) => {
								formData.append(fieldName, file)
							})
							obj[key] = fieldName
						}

					}
				}

				return block
			})

		})


		formData.set('blocks', JSON.stringify(newBlockList, null, 2))

		try {
			// const response = await BlockService.saveBlocksInDB(pageId, dtoBlocks)
			const response = await BlockService.saveBlocksInDB(formData)

			if (showMessage) dispatch(alertErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

// export const saveBlocksInDB = (showMessage: boolean = false) => {
// 	return async (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState, page: IPageState }) => {

// 		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks
// 		const pageId: string = getState().page.activePage.id
// 		const dtoBlocks: string = JSON.stringify(blocks)

// 		try {
// 			const response = await BlockService.saveBlocksInDB(pageId, dtoBlocks)

// 			if (showMessage) dispatch(alertErrorOrMessageCreator(response.data))

// 		} catch (error) {
// 			const e = error as AxiosError
// 			if (e.response) {
// 				dispatch(alertErrorOrMessageCreator(e.response.data))
// 			}

// 		}
// 	}
// }

export const blockUndoChange = () => {
	return (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState }) => {

		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks

		if (changeHistory.length <= 1) return

		let newChangeHistory: Array<IPageBlocksResponse[]> = [...changeHistory]
		newChangeHistory.pop()

		const prevState: IPageBlocksResponse[] | undefined = newChangeHistory[newChangeHistory.length - 1]
		const previousBlockList: IPageBlocksResponse[] = prevState ? prevState : blocks

		dispatch(blockGetPageBlocks(previousBlockList))
		dispatch(updateChangeHistory(newChangeHistory))

	}
}

export const updateChangeHistory = (payload: Array<IPageBlocksResponse[]>): IBlockAction => {
	return {
		type: blockActionTypes.BLOCK_UPDATE_CHANGE_HISTORY,
		payload
	}
}


export const setActiveBlock = (blocks: IPageBlocksResponse[], blockId: string): IBlockAction => {

	const activeBlock: IPageBlocksResponse = blocks.filter(i => i.blockId === blockId)[0]

	return {
		type: blockActionTypes.BLOCK_SET_ACTIVE_BLOCK,
		payload: activeBlock
	}
}

export const blockStartCreator = (): IBlockAction => {
	return { type: blockActionTypes.BLOCK_START }
}

export const blockEndCreator = (): IBlockAction => {
	return { type: blockActionTypes.BLOCK_END }
}

export const blockGetBlocksList = (payload: IBlockResponse[]): IBlockAction => {
	return {
		type: blockActionTypes.BLOCK_GET_BLOCKS_LIST,
		payload
	}
}

// export const saveBlockConfigs = (payload: IPageBlocksResponse[]): IBlockAction => {
// 	return {
// 		type: blockActionTypes.BLOCK_SAVE_BLOCK_CONFIGS,
// 		payload
// 	}
// }

export const blockGetPageBlocks = (payload: IPageBlocksResponse[]): IBlockAction => {
	return {
		type: blockActionTypes.BLOCK_GET_PAGE_BLOCKS,
		payload
	}
}
