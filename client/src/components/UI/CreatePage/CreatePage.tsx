import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useCheck } from '../../../hooks/useCheck.hook'
import { useInput } from '../../../hooks/useInput.hook'
import AlertMessage from '../../HOC/AlertMessage/AlertMessage'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'
import './CreatePage.scss'

interface IRouteProps {
	name: string
}

interface ICreatePage extends RouteComponentProps<IRouteProps> {
	parentClass?: string
	handler?: Function
	closePopup: Function
	projectId: string
}

const CreatePage: React.FC<ICreatePage> = ({ parentClass, handler, history, match, closePopup, projectId }) => {

	const CreatePageClasses = useCreateClassName('create-page', parentClass)

	const { errors} = useTypedSelector(state => state.alert)
	const { pages } = useTypedSelector(state => state.page)
	const { createNewPage, alertRemoveError, changeProjectStatus } = useActions()

	const name = useInput('', alertRemoveError, 'name', errors)
	const link = useInput('', alertRemoveError, 'link', errors)
	const isHomePage = useCheck(false)
	const openInNewWindow = useCheck(false)

	const createPageHandler = () => {
		createNewPage(projectId, name.value, link.value, isHomePage.value, openInNewWindow.value)
		// changeProjectStatus('projectId', [
		// 	{prop: 'sdsaa', value: }
		// ])
	}

	return (
		<AlertMessage successFunc={closePopup} runWithoutDelay>
			<div className={CreatePageClasses}>
				<div className="create-page__container">
					<div className="create-page__row">
						<div className="create-page__form-container">
							<div className="create-page__form">
								<Input
									parentClass="create-page"
									type="email"
									{...name.bind}
								>
									Название страницы
								</Input>
								<Input
									parentClass="create-page"
									type="email"
									{...link.bind}
								>
									Адрес страницы
								</Input>

								<div className="create-page__checkbox-container">
									{!!pages.length
										? <Checkbox
											parentClass="create-page"
											{...isHomePage.bind}
										>
											Сделать главной
										</Checkbox>
										: null
									}
									<Checkbox
										parentClass="create-page"
										{...openInNewWindow.bind}
									>
										Открывать в новом окне
									</Checkbox>
								</div>

								<div className="create-page__annotation">
									Адрес страницы будет использоваться в адресной строке браузера. В примере ниже подчеркнуто красным цветом. Если имя проекта не указано, то сервис сгенерирует его автоматически. В дальнейшем вы сможете изменить его в настройках или подключить свой домен. Например:
									<br />
									<span className="create-page__annotation-bold-text"> http://instasite.com/project-name/</span>
									<span className="create-page__annotation-bold-red-text">page-name</span>
								</div>

								<Button
									parentClass="create-page"
									// handler={createPageHandler}
									handler={createPageHandler}
									modClass={['big']}
								>
									Создать страницу
								</Button>

							</div>
						</div>
					</div>
				</div>
			</div>
		</AlertMessage>
	)
}

export default withRouter(CreatePage)