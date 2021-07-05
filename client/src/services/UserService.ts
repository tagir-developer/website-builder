import { AxiosResponse } from "axios"
import $api from "../http"
import { IUser } from "../models/IUser"

export default class UserService {
	static async fetch(): Promise<AxiosResponse<IUser[]>> {
		return $api.get<IUser[]>('auth/users')
	}
}