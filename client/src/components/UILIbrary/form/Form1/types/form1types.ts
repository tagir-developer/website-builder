import { devices, IHiddenOnDevices } from "../../../commonStyledComponents/commonTypes"

export interface IForm1Styles extends IHiddenOnDevices {
	buttonBackground: string
	blockAlign: "flex-start" | "center" | "flex-end"
	titleFontSize: "300%" | "350%" | "400%"
}

export interface IForm1Content {
	titleText: string
	descriptionText: string
	buttonText: string
}


export interface IForm1Props {
	textAlign: "flex-start" | "center" | "flex-end"
}

export interface IForm1TitleProps {
	fontSize: "300%" | "350%" | "400%"
}

export interface IForm1ButtonProps {
	background: string
}