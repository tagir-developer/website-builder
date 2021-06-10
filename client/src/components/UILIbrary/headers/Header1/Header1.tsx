import React from 'react'
import './Header1.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'

interface IHeader1 {
	parentClass?: string
	modClass?: string[]
}

const Header1: React.FC<IHeader1> = ({ parentClass, modClass }) => {

	const classes = useCreateClassName('lib-header-1', parentClass, modClass)

	return (
			<div className={classes}>
				<div className="lib-header-1__title">Заголовок блока</div>
				<div className="lib-header-1__description">Какой-то текст описывающий свойства продукта или услуги</div>
				<div className="lib-header-1__button">Кнопка</div>
			</div>
	)
}

export default Header1