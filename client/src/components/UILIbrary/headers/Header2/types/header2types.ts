import { IHiddenOnDevices } from "../../../commonStyledComponents/commonTypes"

export interface IHeader2Configs extends IHiddenOnDevices {
	buttonBackground: string
	blockAlign: "flex-start" | "center" | "flex-end"
	titleFontSize: "350%" | "400%" | "450%"
	buttonAnimation: "scale" | "rotate" | "shake"
	// backgroundImage: string | File[]
	titleColor: string
}

export interface IHeader2Content {
	titleText: string
	descriptionText: string
	buttonText: string
	backgroundImage: string | File[]
}


export interface IHeader2Props {
	textAlign: "flex-start" | "center" | "flex-end"
	backgroundImage?: string | File[]
}

export interface ITitleProps {
	fontSize: "350%" | "400%" | "450%"
	titleColor: string
}

export interface IButtonProps {
	background: string
	buttonAnimation: string
}