import { IOptions } from "../../../../hooks/useSelect.hook"

// interface IHeader2Styles {
// 	buttonBackground: string
// 	blockAlign: "flex-start" | "center" | "flex-end"
// 	titleFontSize: "300%" | "350%" | "400%"
// 	textAlign: "left" | "center" | "right"
// }

interface Iheader2ConfigProps {
	blockAlign: IOptions[]
	titleFontSize: IOptions[]
	// textAlign: IOptions[]
	default: {
		blockAlign: string
		titleFontSize: string
		// textAlign: string
	}
}

export const header2ConfigProps: Iheader2ConfigProps = {
	blockAlign: [
		{
			value: 'flex-start',
			label: 'По левому краю'
		},
		{
			value: 'center',
			label: 'По центру'
		},
		{
			value: 'flex-end',
			label: 'По правому краю'
		},
	],
	titleFontSize: [
		{
			value: '300%',
			label: 'Малый'
		},
		{
			value: '350%',
			label: 'Средний'
		},
		{
			value: '400%',
			label: 'Большой'
		},
	],
	default: {
		blockAlign: 'center',
		titleFontSize: '350%',
		// textAlign: 'center'
	}
}