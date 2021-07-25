import { AxiosResponse } from "axios"
import $api from "../http"
import { IGetUserResponse } from "../models/response/UserResponse"

export default class UserService {

	static async getUser(userId: string): Promise<AxiosResponse<IGetUserResponse>> {
		return $api.post<IGetUserResponse>('user/get-user', {userId})
	}

	static async changeEmail(userId: string, email: string): Promise<AxiosResponse> {
		return $api.put('user/change-email', {userId, email})
	}

	static async changeName(userId: string, name: string): Promise<AxiosResponse> {
		return $api.put('user/change-name', {userId, name})
	}

	static async changePassword(userId: string, password: string): Promise<AxiosResponse> {
		return $api.put('user/change-password', {userId, password})
	}

	static async uploadAvatar(data: FormData): Promise<AxiosResponse<IGetUserResponse>> {
		return $api.post<IGetUserResponse>('user/set-avatar', data, {headers: {
			'Content-Type': 'multipart/form-data'
		}})
	}
}