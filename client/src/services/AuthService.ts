import { AxiosResponse } from "axios"
import $api from "../http"
import {IAuthResponse} from '../models/response/AuthResponse'


export default class AuthService {
	static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
		return $api.post<IAuthResponse>('auth/login', {email, password})
	}

	static async registration(email: string, password: string, passwordConfirm: string, name?: string): Promise<AxiosResponse<IAuthResponse>> {
		return $api.post<IAuthResponse>('auth/register', {email, password, passwordConfirm, name})
	}

	static async logout(): Promise<void> {
		return $api.post('auth/logout')
	}
}