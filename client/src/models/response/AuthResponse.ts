import { IUser } from "../IUser";

export interface IAuthResponse {
	accessToken: string
	refreshToken: string
	user: IUser
	message: string
	messageType: "basic" | "success" | "warning" | "danger"
}