import { IAlertMessage } from "../IAlertMessage"

export interface IBlockResponse {
	id: string
	title: string
	path: string
	preview: string
	type: string
}

export interface IPageBlocksResponse {
	blockId: string
	blockPath: string
	isNewBlock: boolean
	blockIsHidden: boolean
	blockConfigs: Object
	blockContent: Object
}

export interface IAddBlockToPageResponse extends IAlertMessage {
	blocks: IPageBlocksResponse[]
}
