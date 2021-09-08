import { IHiddenOnDevices } from "../../../commonStyledComponents/commonTypes"

export interface IHeader2Styles extends IHiddenOnDevices {
	buttonBackground: string
	blockAlign: "flex-start" | "center" | "flex-end"
	titleFontSize: "350%" | "400%" | "450%"
	buttonAnimation: "scale" | "rotate" | "shake"
	backgroundImage: string
	titleColor: string
}

export interface IHeader2Content {
	titleText: string
	descriptionText: string
	buttonText: string
}


export interface IHeader2Props {
	textAlign: "flex-start" | "center" | "flex-end"
	backgroundImage: string
}

export interface ITitleProps {
	fontSize: "350%" | "400%" | "450%"
	titleColor: string
}

export interface IButtonProps {
	background: string
	buttonAnimation: string
}