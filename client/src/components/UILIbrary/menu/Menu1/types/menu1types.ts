import { IHiddenOnDevices } from "../../../commonStyledComponents/commonTypes"

export interface IMenu1Configs extends IHiddenOnDevices {
	buttonBackground: string
	blockAlign: "flex-start" | "center" | "flex-end"
	titleFontSize: "300%" | "350%" | "400%"
}

export interface IMenu1Content {
	titleText: string
	descriptionText: string
	buttonText: string
}

export interface IMenu1Props {
	textAlign: "flex-start" | "center" | "flex-end"
}
