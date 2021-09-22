import { IHiddenOnDevices } from "../../../commonStyledComponents/commonTypes"

export interface IMenu1Configs extends IHiddenOnDevices {
	menuColor: string
	textColor: string
	activeItemColor: string
	activeItemTextColor: string

}

export interface IMenuItem {
	title: string
	link: string
}

export interface IMenu1Content {
	menuItems: IMenuItem[]
}


export interface IMenuBar {
	menuColor: string
	textColor: string
}

export interface IShowHideMenuBtn {
	textColor: string
}

export interface IMenuBarItem {
	textColor: string
	activeItemColor: string
	activeItemTextColor: string

}