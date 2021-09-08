import React from 'react'
import './styles/Header2Configs.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { useSelect } from '../../../../hooks/useSelect.hook'
import WideSelect from '../../../UI/WideSelect/WideSelect'
import ColorPicker from '../../../UI/ColorPicker/ColorPicker'
import DevicesSlider from '../../../UI/DevicesSlider/DevicesSlider'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import { useSlider } from '../../../../hooks/useSlider'
import { useColorPicker } from '../../../../hooks/useColorPicker.hook'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import { IHeader2Content, IHeader2Styles } from './types/header2types'

interface IHeader2Configs {
	parentClass?: string
	modClass?: string[]
	blockConfigs: IHeader2Styles
	blockContent: IHeader2Content
	closePopup: Function
}

const Header2Configs: React.FC<IHeader2Configs> = ({ parentClass, blockConfigs, blockContent, closePopup }) => {

	const classes = useCreateClassName('lib-header-2-configs', parentClass)
	const {activePage} = useTypedSelector(state => state.page)
	const {changeBlockConfigs, saveBlocksInDB} = useActions()

	const blockAlign = useSelect([
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
	], blockConfigs.blockAlign)
	const titleSize = useSelect([
		{
			value: '350%',
			label: 'Малый'
		},
		{
			value: '400%',
			label: 'Средний'
		},
		{
			value: '450%',
			label: 'Большой'
		},
	], blockConfigs.titleFontSize)
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
	const buttonColor = useColorPicker(blockConfigs.buttonBackground)
	const titleColor = useColorPicker(blockConfigs.titleColor)

	const newBlockConfigs: any = {
		hiddenOnDevice: deviceSlider.customValues[0],
		blockAlign: blockAlign.value,
		buttonBackground: buttonColor.color,
		buttonAnimation: buttonAnimation.value,
		titleFontSize: titleSize.value,
		titleColor: titleColor.color
	}

	const saveNewConfigs = () => {
		changeBlockConfigs(newBlockConfigs)
		if (activePage.autosavePage) saveBlocksInDB()
		closePopup()
	}

	return (
		<div className={classes}>

			<WideSelect
				parentClass="lib-header-2-configs"
				{...blockAlign.bind}
			>
				Горизонтальное выравнивание
			</WideSelect>
			<WideSelect
				parentClass="lib-header-2-configs"
				{...titleSize.bind}
			>
				Размер заголовка
			</WideSelect>

			<ColorPicker 
				parentClass="lib-header-2-configs"
				colorPicker={titleColor}
			>
				Цвет заголовка
			</ColorPicker>

			<ColorPicker 
				parentClass="lib-header-2-configs"
				colorPicker={buttonColor}
			>
				Цвет кнопки
			</ColorPicker>

			<WideSelect
				parentClass="lib-header-2-configs"
				{...buttonAnimation.bind}
			>
				Анимация кнопки
			</WideSelect>

			<DevicesSlider 
				title="Видимость на устройствах"
				slider={deviceSlider}
			/>

			<SecondaryButton 
				parentClass="lib-header-2-configs" 
				handler={saveNewConfigs} 
			>
				Применить настройки
			</SecondaryButton>
			
		</div>
	)
}

export default Header2Configs