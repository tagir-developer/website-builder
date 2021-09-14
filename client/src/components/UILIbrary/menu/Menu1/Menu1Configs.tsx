import React from 'react'
import './styles/Menu1Configs.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import ColorPicker from '../../../UI/ColorPicker/ColorPicker'
import DevicesSlider from '../../../UI/DevicesSlider/DevicesSlider'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import { useSlider } from '../../../../hooks/useSlider'
import { useColorPicker } from '../../../../hooks/useColorPicker.hook'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import { IMenu1Configs } from './types/menu1types'

interface IMenu1ConfigsPanel {
	parentClass?: string
	modClass?: string[]
	blockConfigs: IMenu1Configs
	closePopup: Function
}

const Menu1Configs: React.FC<IMenu1ConfigsPanel> = ({ parentClass, blockConfigs, closePopup }) => {

	const classes = useCreateClassName('lib-menu-1-configs', parentClass)
	const { activePage } = useTypedSelector(state => state.page)
	const { changeBlockConfigs, saveBlocksInDB } = useActions()


	const menuColor = useColorPicker(blockConfigs.menuColor)
	const textColor = useColorPicker(blockConfigs.textColor)
	const activeItemColor = useColorPicker(blockConfigs.activeItemColor)
	const activeItemTextColor = useColorPicker(blockConfigs.activeItemTextColor)
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

	const newBlockConfigs: IMenu1Configs = {
		hiddenOnDevice: deviceSlider.customValues[0],
		menuColor: menuColor.color,
		textColor: textColor.color,
		activeItemColor: activeItemColor.color,
		activeItemTextColor: activeItemTextColor.color
	}

	const saveNewConfigs = () => {
		changeBlockConfigs(newBlockConfigs)
		if (activePage.autosavePage) saveBlocksInDB()
		closePopup()
	}

	return (
		<div className={classes}>

			<ColorPicker
				parentClass="lib-menu-1-configs"
				colorPicker={menuColor}
			>
				Цвет меню
			</ColorPicker>

			<ColorPicker
				parentClass="lib-menu-1-configs"
				colorPicker={textColor}
			>
				Цвет текста
			</ColorPicker>

			<ColorPicker
				parentClass="lib-menu-1-configs"
				colorPicker={activeItemColor}
			>
				Цвет пункта меню при наведении
			</ColorPicker>

			<ColorPicker
				parentClass="lib-menu-1-configs"
				colorPicker={activeItemTextColor}
			>
				Цвет текста пункта меню при наведении
			</ColorPicker>

			<DevicesSlider 
				title="Видимость на устройствах"
				slider={deviceSlider}
			/>

			<SecondaryButton 
				parentClass="lib-menu-1-configs" 
				handler={saveNewConfigs} 
			>
				Применить настройки
			</SecondaryButton>

		</div>
	)
}

export default Menu1Configs