import React from 'react'
import './Header2Configs.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { useSelect } from '../../../../hooks/useSelect.hook'
import WideSelect from '../../../UI/WideSelect/WideSelect'
import ColorPicker from '../../../UI/ColorPicker/ColorPicker'
import DevicesSlider from '../../../UI/DevicesSlider/DevicesSlider'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import { header2ConfigProps } from './Configs'
import { useSlider } from '../../../../hooks/useSlider'
import { useColorPicker } from '../../../../hooks/useColorPicker.hook'

interface IHeader2Configs {
	parentClass?: string
	modClass?: string[]
}

const Header2Configs: React.FC<IHeader2Configs> = ({ parentClass }) => {

	const classes = useCreateClassName('lib-header-2-configs', parentClass)

	const blockAlign = useSelect(header2ConfigProps.blockAlign, 'center') //! Берем дефолтные значения из базы данных (массив блоков и настроек в модели страницы)
	const titleSize = useSelect(header2ConfigProps.titleFontSize, '350%')
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
				colorPicker={buttonColor}
			>
				Цвет кнопки
			</ColorPicker>

			<DevicesSlider 
				title="Видимость на устройствах"
				slider={deviceSlider}
			/>

			<SecondaryButton 
				parentClass="lib-header-2-configs" 
				handler={() => {}} 
			>
				Применить настройки
			</SecondaryButton>
			
		</div>
	)
}

export default Header2Configs