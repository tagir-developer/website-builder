import React from 'react'
import './Header2Contents.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import Input from '../../../UI/Input/Input'
import Textarea from '../../../UI/Textarea/Textarea'
import { useInput } from '../../../../hooks/useInput.hook'


interface IHeader2Contents {
	parentClass?: string
	modClass?: string[]
}

const Header2Contents: React.FC<IHeader2Contents> = ({ parentClass }) => {

	const classes = useCreateClassName('lib-header-2-contents', parentClass)

	const title = useInput('Заголовок блока 2')
	const description = useInput('Какой-то текст описывающий свойства продукта или услуги')
	const button = useInput('Кнопка')

	return (
		<div className={classes}>
			<Input
				parentClass="lib-header-2-contents"
				modClass={['align-left']}
				type="text"
				{...title.bind}
			>
				Текст заголовка
			</Input>
			<Textarea
				parentClass="lib-header-2-contents"
				{...description.bind}
			>
				Текст описания
			</Textarea>
			<Input
				parentClass="lib-header-2-contents"
				modClass={['align-left']}
				type="text"
				{...button.bind}
			>
				Текст кнопки
			</Input>

			<SecondaryButton
				parentClass="lib-header-2-contents"
				handler={() => { }}
			>
				Применить настройки
			</SecondaryButton>
		</div>
	)
}

export default Header2Contents