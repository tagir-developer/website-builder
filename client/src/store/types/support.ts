import { IAlertAction } from "./alert";

export interface ISupportState {
	loading: boolean
}

export enum supportActionTypes {
	SUPPORT_START = 'SUPPORT_START',
	SUPPORT_END = 'SUPPORT_END',
}

interface supportStartAction {
	type: supportActionTypes.SUPPORT_START
}

interface supportEndAction {
	type: supportActionTypes.SUPPORT_END
}


export type ISupportAction = supportStartAction | supportEndAction | IAlertAction