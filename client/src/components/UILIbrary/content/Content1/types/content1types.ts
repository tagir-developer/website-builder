import { IHiddenOnDevices } from "../../../commonStyledComponents/commonTypes"

export interface IContent1Configs extends IHiddenOnDevices {
	blockAlign: "flex-start" | "center" | "flex-end"
	backgroundColor: string
	textColor: string
	titleColor: string
}

export interface IContent1Content {
	titleText: string
	contentText: string
}


export interface IStyledContent1Props {
	blockAlign: "flex-start" | "center" | "flex-end"
	backgroundColor: string
}

export interface ITitleProps {
	titleColor: string
}

export interface ITextProps {
	textColor: string
}