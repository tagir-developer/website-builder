
export type devices = 'mobile' | 'tablete' | 'pc'

export interface IHiddenOnDevices {
	hiddenOnDevice: devices[]
}

export interface ICommonBlockProps {
	blockIsHidden: boolean
	hideBlock: boolean
}