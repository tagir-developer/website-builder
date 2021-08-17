import React from 'react'
import './Header1Configs.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { useSelect } from '../../../../hooks/useSelect.hook'
import WideSelect from '../../../UI/WideSelect/WideSelect'
import ColorPicker from '../../../UI/ColorPicker/ColorPicker'
import DevicesSlider from '../../../UI/DevicesSlider/DevicesSlider'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import { header1ConfigProps } from './Configs'
import { useSlider } from '../../../../hooks/useSlider'
import { useColorPicker } from '../../../../hooks/useColorPicker.hook'

interface IHeader1Configs {
	parentClass?: string
	modClass?: string[]
}

const Header1Configs: React.FC<IHeader1Configs> = ({ parentClass }) => {

	const classes = useCreateClassName('lib-header-1-configs', parentClass)

	const blockAlign = useSelect(header1ConfigProps.blockAlign, 'center') //! Берем дефолтные значения из базы данных (массив блоков и настроек в модели страницы)
	const titleSize = useSelect(header1ConfigProps.titleFontSize, '350%')
	const deviceSlider = useSlider({
		defaultValues: [2],
		domain: [0, 2],
		step: 1
	})
	const buttonColor = useColorPicker('#fc0')

	console.log('Данные конфигов', blockAlign.value, titleSize.value, deviceSlider.values[0], buttonColor.color)

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
				handler={() => {}} 
			>
				Применить настройки
			</SecondaryButton>
			
		</div>
	)
}

export default Header1Configs