import React from 'react'
import './styles/Header1Configs.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { useSelect } from '../../../../hooks/useSelect.hook'
import WideSelect from '../../../UI/WideSelect/WideSelect'
import ColorPicker from '../../../UI/ColorPicker/ColorPicker'
import DevicesSlider from '../../../UI/DevicesSlider/DevicesSlider'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import { useSlider } from '../../../../hooks/useSlider'
import { useColorPicker } from '../../../../hooks/useColorPicker.hook'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import { IHeader1Content, IHeader1Styles } from './types/header1types'

interface IHeader1Configs {
	parentClass?: string
	modClass?: string[]
	blockConfigs: IHeader1Styles
	blockContent: IHeader1Content
	closePopup: Function
}

const Header1Configs: React.FC<IHeader1Configs> = ({ parentClass, blockConfigs, blockContent, closePopup }) => {

	const classes = useCreateClassName('lib-header-1-configs', parentClass)
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
	], blockConfigs.titleFontSize)
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

	const newBlockConfigs: any = {
		hiddenOnDevice: deviceSlider.customValues[0],
		buttonBackground: buttonColor.color,
		blockAlign: blockAlign.value,
		titleFontSize: titleSize.value
	}

	const saveNewConfigs = () => {
		changeBlockConfigs(newBlockConfigs)
		if (activePage.autosavePage) saveBlocksInDB()
		closePopup()
	}

	return (
		<div className={classes}>

			<WideSelect
				parentClass="lib-header-1-configs"
				{...blockAlign.bind}
			>
				Горизонтальное выравнивание
			</WideSelect>
			<WideSelect
				parentClass="lib-header-1-configs"
				{...titleSize.bind}
			>
				Размер заголовка
			</WideSelect>

			<ColorPicker 
				parentClass="lib-header-1-configs"
				colorPicker={buttonColor}
			>
				Цвет кнопки
			</ColorPicker>

			<DevicesSlider 
				title="Видимость на устройствах"
				slider={deviceSlider}
			/>

			<SecondaryButton 
				parentClass="lib-header-1-configs" 
				handler={saveNewConfigs} 
			>
				Применить настройки
			</SecondaryButton>
			
		</div>
	)
}

export default Header1Configs