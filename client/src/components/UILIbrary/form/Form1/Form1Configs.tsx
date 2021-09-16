import React from 'react'
import './styles/Form1Configs.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { useSelect } from '../../../../hooks/useSelect.hook'
import WideSelect from '../../../UI/WideSelect/WideSelect'
import ColorPicker from '../../../UI/ColorPicker/ColorPicker'
import DevicesSlider from '../../../UI/DevicesSlider/DevicesSlider'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import { useSlider } from '../../../../hooks/useSlider'
import { useColorPicker } from '../../../../hooks/useColorPicker.hook'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import { IForm1Configs } from './types/form1types'

interface IForm1ConfigProps {
	parentClass?: string
	modClass?: string[]
	blockConfigs: IForm1Configs
	closePopup: Function
}

const Form1Configs: React.FC<IForm1ConfigProps> = ({ parentClass, blockConfigs, closePopup }) => {

	const classes = useCreateClassName('lib-form-1-configs', parentClass)
	const {activePage} = useTypedSelector(state => state.page)
	const {changeBlockConfigs, saveBlocksInDB} = useActions()

	const backgroundColor = useColorPicker(blockConfigs.backgroundColor)
	const formColor = useColorPicker(blockConfigs.formColor)
	const titleColor = useColorPicker(blockConfigs.titleColor)
	const buttonBackground = useColorPicker(blockConfigs.buttonBackground)
	const buttonTextColor = useColorPicker(blockConfigs.buttonTextColor)
	const titleSize = useSelect([
		{
			value: '200%',
			label: 'Малый'
		},
		{
			value: '250%',
			label: 'Средний'
		},
		{
			value: '300%',
			label: 'Большой'
		},
	], blockConfigs.titleSize)
	const buttonAnimation = useSelect([
		{
			value: 'scale',
			label: 'Увеличение'
		},
		{
			value: 'rotate',
			label: 'Вращение'
		},
		{
			value: 'shake',
			label: 'Потряхивание'
		},
	], blockConfigs.buttonAnimation)
	const deviceSlider = useSlider({ 
		defaultValues: blockConfigs.hiddenOnDevice, 
		domain: [0, 2],
		step: 1,
		decriptor: {
			0: ['tablete', 'pc'],
			1: ['pc'],
			2: []
		}
	})

	const newBlockConfigs: any = {
		hiddenOnDevice: deviceSlider.customValues[0],
		backgroundColor: backgroundColor.color,
		formColor: formColor.color,
		titleColor: titleColor.color,
		titleSize: titleSize.value,
		buttonBackground: buttonBackground.color,
		buttonAnimation: buttonAnimation.value,
		buttonTextColor: buttonTextColor.color
	}

	const saveNewConfigs = () => {
		changeBlockConfigs(newBlockConfigs)
		if (activePage.autosavePage) saveBlocksInDB()
		closePopup()
	}

	return (
		<div className={classes}>

			<WideSelect
				parentClass="lib-form-1-configs"
				{...titleSize.bind}
			>
				Размер заголовка
			</WideSelect>

			<ColorPicker 
				parentClass="lib-form-1-configs"
				colorPicker={backgroundColor}
			>
				Цвет фона
			</ColorPicker>

			<ColorPicker 
				parentClass="lib-form-1-configs"
				colorPicker={formColor}
			>
				Цвет формы
			</ColorPicker>

			<ColorPicker 
				parentClass="lib-form-1-configs"
				colorPicker={titleColor}
			>
				Цвет заголовка
			</ColorPicker>

			<ColorPicker 
				parentClass="lib-form-1-configs"
				colorPicker={buttonBackground}
			>
				Цвет кнопки
			</ColorPicker>

			<ColorPicker 
				parentClass="lib-form-1-configs"
				colorPicker={buttonTextColor}
			>
				Цвет текста кнопки
			</ColorPicker>

			<WideSelect
				parentClass="lib-form-1-configs"
				{...buttonAnimation.bind}
			>
				Анимация кнопки
			</WideSelect>

			<DevicesSlider 
				title="Видимость на устройствах"
				slider={deviceSlider}
			/>

			<SecondaryButton 
				parentClass="lib-form-1-configs" 
				handler={saveNewConfigs} 
			>
				Применить настройки
			</SecondaryButton>
			
		</div>
	)
}

export default Form1Configs