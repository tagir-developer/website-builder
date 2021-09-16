import { devices, IHiddenOnDevices } from "../../../commonStyledComponents/commonTypes"

export interface IForm1Configs extends IHiddenOnDevices {
	backgroundColor: string
	formColor: string
	titleColor: string
	titleSize: "200%" | "250%" | "300%"
	buttonBackground: string
	buttonAnimation: "scale" | "rotate" | "shake"
	buttonTextColor: string
}

export interface IForm1Content {
	titleText: string
	firstInputText: string
	secondInputText: string
	buttonText: string
	formName: string
}


export interface IForm1Props {
	backgroundColor: string
}

export interface IForm1ContainerProps {
	formColor: string
}

export interface IForm1TitleProps {
	titleColor: string
	titleSize: "200%" | "250%" | "300%"
}

export interface IForm1ButtonProps {
	buttonBackground: string
	buttonTextColor: string
	buttonAnimation: "scale" | "rotate" | "shake"
}