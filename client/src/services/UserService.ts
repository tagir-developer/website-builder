import { AxiosResponse } from "axios"
import { stringify } from "uuid"
import $api from "../http"
import { IUser } from "../models/IUser"
import { IGetUserResponse } from "../models/response/UserResponse"

export default class UserService {

	// static async fetch(): Promise<AxiosResponse<IUser[]>> {
	// 	return $api.get<IUser[]>('auth/users') // ? Тестовый метод (возможно надо будет удалить)
	// }

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
}