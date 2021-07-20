export interface IAlert {
	message: string
	messageType: "basic" | "success" | "warning" | "danger"
	errors: string[]
}