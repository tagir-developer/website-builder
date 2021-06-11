import React from 'react'
import './Header2.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'

interface IHeader1 {
	parentClass?: string
	modClass?: string[]
	styles: any
}

const Header2: React.FC<IHeader1> = ({ parentClass, modClass, styles }) => {

	const classes = useCreateClassName('lib-header-2', parentClass, modClass)

	console.log('STYLES', styles)

	return (
			<div className={classes}>
				<div className="lib-header-2__title">Заголовок блока</div>
				<div className="lib-header-2__description">Какой-то текст описывающий свойства продукта или услуги</div>
				<div className="lib-header-2__button">Кнопка</div>
			</div>
	)
}

export default Header2