export interface ISupportResponse {
	message: string
	messageType: "basic" | "success" | "warning" | "danger"
	errors: string[]
}