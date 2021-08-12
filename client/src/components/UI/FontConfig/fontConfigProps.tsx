import { IOptions } from "../../../hooks/useSelect.hook";

interface IFontPropItem extends IOptions {
}

interface IFontConfigProps {
	fontFamily: IFontPropItem[]
	textSize: IFontPropItem[]
	titleSize: IFontPropItem[]
	titleWeight: IFontPropItem[]
	default: {
		fontFamily: string
		textSize: string
		titleSize: string
		titleWeight: string
	}
}

export const fontConfigProps: IFontConfigProps = {
	fontFamily: [
		{
			value: 'verdana',
			label: 'Verdana'
		},
		{
			value: 'sans-serif',
			label: 'Sans Serif'
		},
		{
			value: 'helvetica',
			label: 'Helvetica'
		},
	],
	textSize: [
		{
			value: '14px',
			label: '14 px'
		},
		{
			value: '16px',
			label: '16 px'
		},
		{
			value: '18px',
			label: '18 px'
		},
	],
	titleSize: [
		{
			value: '24px',
			label: '24 px'
		},
		{
			value: '28px',
			label: '28 px'
		},
		{
			value: '32px',
			label: '32 px'
		},
		{
			value: '36px',
			label: '36 px'
		},
	],
	titleWeight: [
		{
			value: 'normal',
			label: 'normal'
		},
		{
			value: 'bold',
			label: 'bold'
		},
	],
	default: {
		fontFamily: 'helvetica',
		textSize: '16px',
		titleSize: '36px',
		titleWeight: 'bold'
	}
}