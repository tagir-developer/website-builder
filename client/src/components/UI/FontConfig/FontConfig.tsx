import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useSelect } from '../../../hooks/useSelect.hook'
import AlertMessage from '../../HOC/AlertMessage/AlertMessage'
import Button from '../Button/Button'
import Select from '../Select/Select'
import SmallButton from '../SmallButton/SmallButton'
import './FontConfig.scss'
import { fontConfigProps } from './fontConfigProps'

interface IFontConfig {
	parentClass?: string
	closePopup?: Function
}

const FontConfig: React.FC<IFontConfig> = ({ parentClass, closePopup }) => {

	const fontConfigClasses = useCreateClassName('font-config', parentClass)

	const { activeProject } = useTypedSelector(state => state.projects)
	const { setFontConfigs } = useActions()

	const fontTypeSelect = useSelect(fontConfigProps.fontFamily, activeProject.fontConfigs.fontFamily)
	const textSizeSelect = useSelect(fontConfigProps.textSize, activeProject.fontConfigs.text.fontSize)
	const titleSizeSelect = useSelect(fontConfigProps.titleSize, activeProject.fontConfigs.title.fontSize)
	const titleWeightSelect = useSelect(fontConfigProps.titleWeight, activeProject.fontConfigs.title.fontWeight)

	const getCSSProperties = (type: 'title' | 'text', fontWeight: string | null, fontSize: string | null, fontFamily: string | null): React.CSSProperties => {

		let stylesObj: any = {}

		if (type === 'title') {
			fontConfigProps.titleWeight.forEach(i => {
				if (fontWeight === i.value) stylesObj.fontWeight = i.value
			})
			fontConfigProps.titleSize.forEach(i => {
				if (fontSize === i.value) stylesObj.fontSize = i.value
			})
		}

		if (type === 'text') {
			fontConfigProps.textSize.forEach(i => {
				if (fontSize === i.value) stylesObj.fontSize = i.value
			})
		}

		fontConfigProps.fontFamily.forEach(i => {
			if (fontFamily === i.value) stylesObj.fontFamily = i.label
		})

		return stylesObj
	}

	const saveFontChanges = () => {
		setFontConfigs(activeProject.id, fontTypeSelect.value, titleSizeSelect.value, titleWeightSelect.value, textSizeSelect.value)
	}

	const setDefaultConfigs = () => {
		fontTypeSelect.setNewValue(fontConfigProps.default.fontFamily)
		textSizeSelect.setNewValue(fontConfigProps.default.textSize)
		titleSizeSelect.setNewValue(fontConfigProps.default.titleSize)
		titleWeightSelect.setNewValue(fontConfigProps.default.titleWeight)
	}

	return (
		<AlertMessage successFunc={closePopup} runWithoutDelay>
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

								<div className="font-config__use-default-btn-container">
									<SmallButton
										parentClass="font-config"
										handler={setDefaultConfigs}
									>
										По умолчанию
									</SmallButton>
								</div>


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
									handler={saveFontChanges}
									modClass={['big']}
								>
									Сохранить
								</Button>

							</div>
						</div>
					</div>
				</div>
			</div>
		</AlertMessage>
	)
}

export default FontConfig