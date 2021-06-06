import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useSelect } from '../../../hooks/useSelect.hook'
import Button from '../Button/Button'
import Select from '../Select/Select'
import './FontConfig.scss'

interface IFontConfig {
	parentClass?: string
	handler: any
}

const FontConfig: React.FC<IFontConfig> = ({ parentClass, handler }) => {

	const fontConfigClasses = useCreateClassName('font-config', parentClass)

	const fontTypeSelect = useSelect([
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
	], 'helvetica')

	const textSizeSelect = useSelect([
		{
			value: '14px',
			label: '14px'
		},
		{
			value: '16px',
			label: '16px'
		},
		{
			value: '18px',
			label: '18px'
		},
	], '16px')

	const titleSizeSelect = useSelect([
		{
			value: '24px',
			label: '24px'
		},
		{
			value: '28px',
			label: '28px'
		},
		{
			value: '32px',
			label: '32px'
		},
		{
			value: '36px',
			label: '36px'
		},
	], '36px')

	const titleWeightSelect = useSelect([
		{
			value: 'normal',
			label: 'normal'
		},
		{
			value: 'bold',
			label: 'bold'
		},
	], 'bold')

	const getCSSProperties = (type: 'title' | 'text', fontWeight: string | null, fontSize: string | null, fontFamily: string | null): React.CSSProperties => {

		let stylesObj: any = {}

		if (type === 'title') {
			if (fontWeight === 'bold') stylesObj.fontWeight = fontWeight
			if (fontWeight === 'normal') stylesObj.fontWeight = fontWeight
	
			if (fontSize === '24px') stylesObj.fontSize = fontSize
			if (fontSize === '28px') stylesObj.fontSize = fontSize
			if (fontSize === '32px') stylesObj.fontSize = fontSize
			if (fontSize === '36px') stylesObj.fontSize = fontSize
		}

		if (type === 'text') {
			if (fontSize === '14px') stylesObj.fontSize = fontSize
			if (fontSize === '16px') stylesObj.fontSize = fontSize
			if (fontSize === '18px') stylesObj.fontSize = fontSize
		}

		if (fontFamily === 'sans-serif') stylesObj.fontFamily = 'Sans Serif'
		if (fontFamily === 'verdana') stylesObj.fontFamily = 'Verdana'
		if (fontFamily === 'helvetica') stylesObj.fontFamily = 'Helvetica'

		return stylesObj
	}

	return (
		<div className={fontConfigClasses}>
			<div className="font-config__container">
				<div className="font-config__row">
					<div className="font-config__form-container">
						<div className="font-config__form">

							<div className="font-config__annotation">
								Выберите наименование и размер шрифта, который будет использоваться на сайте
							</div>

							<Select
								parentClass="font-config"
								{...fontTypeSelect.bind}
							>
								Шрифт
							</Select>

							<Select
								parentClass="font-config"
								{...textSizeSelect.bind}
							>
								Размер текста
							</Select>

							<Select
								parentClass="font-config"
								{...titleSizeSelect.bind}
							>
								Размер заголовка
							</Select>

							<Select
								parentClass="font-config"
								{...titleWeightSelect.bind}
							>
								Толщина заголовка
							</Select>


							<div className="font-config__font-preview">
								<div className="font-config__font-preview-label">Предпросмотр</div>
								<h1
									className="font-config__font-preview-h1"
									style={getCSSProperties('title', titleWeightSelect.value, titleSizeSelect.value, fontTypeSelect.value)}
								>
									Roboto
								</h1>
								<p
									className="font-config__font-preview-p"
									style={getCSSProperties('text', null, textSizeSelect.value, fontTypeSelect.value)}
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>

							<Button
								parentClass="font-config"
								handler={handler}
								modClass={['big']}
							>
								Сохранить
							</Button>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FontConfig