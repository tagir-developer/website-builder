import React from 'react'
import './styles/Content1Configs.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { useSelect } from '../../../../hooks/useSelect.hook'
import WideSelect from '../../../UI/WideSelect/WideSelect'
import ColorPicker from '../../../UI/ColorPicker/ColorPicker'
import DevicesSlider from '../../../UI/DevicesSlider/DevicesSlider'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import { useSlider } from '../../../../hooks/useSlider'
import { useColorPicker } from '../../../../hooks/useColorPicker.hook'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import { IContent1Configs } from './types/content1types'

interface IContent1ConfigsProps {
	parentClass?: string
	modClass?: string[]
	blockConfigs: IContent1Configs
	closePopup: Function
}

const Content1Configs: React.FC<IContent1ConfigsProps> = ({ parentClass, blockConfigs, closePopup }) => {

	const classes = useCreateClassName('lib-content-1-configs', parentClass)
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
	const backgroundColor = useColorPicker(blockConfigs.backgroundColor)
	const titleColor = useColorPicker(blockConfigs.titleColor)
	const textColor = useColorPicker(blockConfigs.textColor)

	const newBlockConfigs: any = {
		hiddenOnDevice: deviceSlider.customValues[0],
		blockAlign: blockAlign.value,
		backgroundColor: backgroundColor.color,
		titleColor: titleColor.color,
		textColor: textColor.color

	}

	const saveNewConfigs = () => {
		changeBlockConfigs(newBlockConfigs)
		if (activePage.autosavePage) saveBlocksInDB()
		closePopup()
	}

	return (
		<div className={classes}>

			<WideSelect
				parentClass="lib-content-1-configs"
				{...blockAlign.bind}
			>
				Горизонтальное выравнивание
			</WideSelect>

			<ColorPicker 
				parentClass="lib-content-1-configs"
				colorPicker={backgroundColor}
			>
				Цвет фона
			</ColorPicker>

			<ColorPicker 
				parentClass="lib-content-1-configs"
				colorPicker={titleColor}
			>
				Цвет заголовка
			</ColorPicker>

			<ColorPicker 
				parentClass="lib-content-1-configs"
				colorPicker={textColor}
			>
				Цвет основного текста
			</ColorPicker>

			<DevicesSlider 
				title="Видимость на устройствах"
				slider={deviceSlider}
			/>

			<SecondaryButton 
				parentClass="lib-content-1-configs" 
				handler={saveNewConfigs} 
			>
				Применить настройки
			</SecondaryButton>
			
		</div>
	)
}

export default Content1Configs