import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useCheck } from '../../../hooks/useCheck.hook'
import { useInput } from '../../../hooks/useInput.hook'
import AlertMessage from '../../HOC/AlertMessage/AlertMessage'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'
import './ChangePage.scss'


interface IChangePage {
	parentClass?: string
	closePopup: Function
	pageId: string
}

const ChangePage: React.FC<IChangePage> = ({ parentClass, closePopup }) => {

	const changePageClasses = useCreateClassName('change-page', parentClass)

	const { errors } = useTypedSelector(state => state.alert)
	const { changePage, alertRemoveError } = useActions()

	const name = useInput('', alertRemoveError, 'name', errors)
	const link = useInput('', alertRemoveError, 'link', errors)
	const openInNewWindow = useCheck(false)

	const сhangePageHandler = () => {
		changePage(name.value, link.value, openInNewWindow.value)
	}


	return (
		<AlertMessage successFunc={closePopup} runWithoutDelay>
			<div className={changePageClasses}>
				<div className="change-page__container">
					<div className="change-page__row">
						<div className="change-page__form-container">
							<div className="change-page__form">
								<Input
									parentClass="change-page"
									type="email"
									{...name.bind}
								>
									Название страницы
								</Input>
								<Input
									parentClass="change-page"
									type="email"
									{...link.bind}
								>
									Адрес страницы
								</Input>
								<div className="change-page__checkbox-container">
									<Checkbox
										parentClass="change-page"
										{...openInNewWindow.bind}
									>
										Открывать в новом окне
									</Checkbox>
								</div>
								<div className="change-page__annotation">
									Адрес страницы будет использоваться в адресной строке браузера. В примере ниже подчеркнуто красным цветом. Если имя проекта не указано, то сервис сгенерирует его автоматически. В дальнейшем вы сможете изменить его в настройках или подключить свой домен. Например:
									<br />
									<span className="change-page__annotation-bold-text"> http://instasite.com/project-name/</span>
									<span className="change-page__annotation-bold-red-text">page-name</span>
								</div>
								<Button
									parentClass="change-page"
									handler={сhangePageHandler}
									modClass={['big']}
								>
									Изменить страницу
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AlertMessage>
	)
}

export default ChangePage