import { AxiosResponse } from "axios"
import $api from "../http"
import { IAddBlockToPageResponse, IBlockResponse, ICopyBlockResponse, IPageBlocksResponse, ISaveBlocksInDBResponse } from "../models/response/BlockResponse"

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

	static async copyBlock(pageId: string, originalBlock: string): Promise<AxiosResponse<ICopyBlockResponse>> {
		return $api.put<ICopyBlockResponse>('blocks/copy-block', {pageId, originalBlock})
	}

	// static async saveBlocksInDB(pageId: string, dtoBlocks: string): Promise<AxiosResponse<ISaveBlocksInDBResponse>> {
	// 	return $api.put<ISaveBlocksInDBResponse>('blocks/save-blocks', {pageId, dtoBlocks})
	// }


	static async saveBlocksInDB(data: FormData): Promise<AxiosResponse<ISaveBlocksInDBResponse>> {
		return $api.post<ISaveBlocksInDBResponse>('blocks/save-all-blocks', data, {headers: {
			'Content-Type': 'multipart/form-data'
		}})
	}

	// ! Тестовая часть ниже

	static async blockTestImagesDownload(data: FormData): Promise<AxiosResponse> {
		return $api.post('blocks/test-download', data, {headers: {
			'Content-Type': 'multipart/form-data'
		}})
	}

}