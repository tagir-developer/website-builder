import { AxiosResponse } from "axios"
import $api from "../http"
import { IAddBlockToPageResponse, IBlockResponse, IPageBlocksResponse } from "../models/response/BlockResponse"

export default class BlockService {

	static async getWithType(blockType: string): Promise<AxiosResponse<IBlockResponse[]>> {
		return $api.get<IBlockResponse[]>(`blocks/get-with-type/${blockType}`)
	}

	static async getPageBlocks(pageId: string): Promise<AxiosResponse<IPageBlocksResponse[]>> {
		return $api.get<IPageBlocksResponse[]>(`blocks/get-page-blocks/${pageId}`)
	}

	static async addBlockToPage(pageId: string, blockId: string): Promise<AxiosResponse<IAddBlockToPageResponse>> {
		return $api.put<IAddBlockToPageResponse>('blocks/add-block', {pageId, blockId})
	}

}