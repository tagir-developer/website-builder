import { IUser } from "../IUser";

export interface IGetUserResponse {
	user: IUser
	message: string
	// messageType: "basic" | "success" | "warning" | "danger"
}