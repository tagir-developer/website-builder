import { IAlertMessage } from "../IAlertMessage"
import { IProjectsResponse } from "./ProjectsResponse";

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
	_blockModelId: string
}

export interface IAddBlockToPageResponse extends IAlertMessage {
	block: IPageBlocksResponse
}

export interface ICopyBlockResponse extends IAlertMessage {
	block: IPageBlocksResponse
}

export interface ISaveBlocksInDBResponse extends IAlertMessage {
	project: IProjectsResponse | null
}
