export interface IAlertMessage {
	message: string
	messageType: "basic" | "success" | "warning" | "danger"
	errors: string[]
}