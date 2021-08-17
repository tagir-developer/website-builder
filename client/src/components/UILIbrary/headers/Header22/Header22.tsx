import React from 'react'
import './Header22.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'

interface IHeader1 {
	parentClass?: string
	modClass?: string[]
	styles: any
}

const Header22: React.FC<IHeader1> = ({ parentClass, modClass, styles }) => {

	const classes = useCreateClassName('lib-header-2', parentClass, modClass)

	return (
			<div className={classes}>
				<div className="lib-header-2__title">Заголовок блока</div>
				<div className="lib-header-2__description">Какой-то текст описывающий свойства продукта или услуги</div>
				<div className="lib-header-2__button">Кнопка действия</div>
			</div>
	)
}

export default Header22