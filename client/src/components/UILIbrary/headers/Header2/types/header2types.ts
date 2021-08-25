import { IHiddenOnDevices } from "../../../commonStyledComponents/commonTypes"

export interface IHeader2Styles extends IHiddenOnDevices {
	buttonBackground: string
	blockAlign: "flex-start" | "center" | "flex-end"
	titleFontSize: "300%" | "350%" | "400%"
}

export interface IHeader2Content {
	titleText: string
	descriptionText: string
	buttonText: string
}


export interface IHeader2Props {
	textAlign: "flex-start" | "center" | "flex-end"
}

export interface ITitleProps {
	fontSize: "300%" | "350%" | "400%"
}

export interface IButtonProps {
	background: string
}