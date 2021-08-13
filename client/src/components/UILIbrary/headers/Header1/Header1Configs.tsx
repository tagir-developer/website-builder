import React from 'react'
import './Header1Configs.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { useSelect } from '../../../../hooks/useSelect.hook'
import WideSelect from '../../../UI/WideSelect/WideSelect'
import ColorPicker from '../../../UI/ColorPicker/ColorPicker'
import DevicesSlider from '../../../UI/DevicesSlider/DevicesSlider'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'

interface IHeader1Configs {
	parentClass?: string
	modClass?: string[]
}

const Header1Configs: React.FC<IHeader1Configs> = ({ parentClass }) => {

	const classes = useCreateClassName('lib-header-1-configs', parentClass)

	const horizontalAlign = useSelect([
		{
			value: 'left',
			label: 'По левому краю'
		},
		{
			value: 'center',
			label: 'По центру'
		},
		{
			value: 'right',
			label: 'По правому краю'
		},
	], 'center')

	const verticalAlign = useSelect([
		{
			value: 'top',
			label: 'Прижать к верху'
		},
		{
			value: 'center',
			label: 'По центру'
		},
		{
			value: 'bottom',
			label: 'Прижать к низу'
		},
	], 'center')

	const blockWidth = useSelect([
		{
			value: '60%',
			label: '60%'
		},
		{
			value: '80%',
			label: '80%'
		},
		{
			value: '100%',
			label: '100%'
		},
	], '100%')

	const blockHeight = useSelect([
		{
			value: '400px',
			label: '400px'
		},
		{
			value: '500px',
			label: '500px'
		},
		{
			value: '600px',
			label: '600px'
		},
	], '500px')

	const btnAnimationType = useSelect([
		{
			value: 'none',
			label: 'Без анимации'
		},
		{
			value: 'increase',
			label: 'Увеличение'
		},
		{
			value: 'slide',
			label: 'Появление сбоку'
		},
		{
			value: 'opacity',
			label: 'Появление'
		},
	], '500px')

	return (
		<div className={classes}>

			<WideSelect
				parentClass="lib-header-1-configs"
				{...horizontalAlign.bind}
			>
				Горизонтальное выравнивание
			</WideSelect>
			<WideSelect
				parentClass="lib-header-1-configs"
				{...verticalAlign.bind}
			>
				Вертикальное выравнивание
			</WideSelect>
			<WideSelect
				parentClass="lib-header-1-configs"
				{...blockWidth.bind}
			>
				Ширина блока
			</WideSelect>
			<WideSelect
				parentClass="lib-header-1-configs"
				{...blockHeight.bind}
			>
				Высота блока
			</WideSelect>
			<WideSelect
				parentClass="lib-header-1-configs"
				{...btnAnimationType.bind}
			>
				Анимация кнопки
			</WideSelect>

			<ColorPicker initialColor="#fc0" parentClass="lib-header-1-configs">Цвет кнопки</ColorPicker>

			<DevicesSlider title="Видимость на устройствах" />

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