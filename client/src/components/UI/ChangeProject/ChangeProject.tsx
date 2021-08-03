import React from 'react'
import { useHistory } from 'react-router-dom'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './ChangeProject.scss'

interface IChangeProject {
	parentClass?: string
	projectId: string
	closePopup: (param?: any) => any
}

const ChangeProject: React.FC<IChangeProject> = ({ parentClass, projectId, closePopup }) => {

	const ChangeProjectClasses = useCreateClassName('change-project', parentClass)

	const { loading } = useTypedSelector(state => state.projects)
	const { errors } = useTypedSelector(state => state.alert)
	const { changeProject, alertRemoveError, getAllProjects } = useActions()

	const history = useHistory()

	const name = useInput('', alertRemoveError, 'name', errors)
	const link = useInput('', alertRemoveError, 'link', errors)

	const changeProjectHandler = () => {
		closePopup()
		changeProject(projectId, name.value, link.value)
		history.push('/')
		getAllProjects()
	}

	return (
		<div className={ChangeProjectClasses}>
			<div className="change-project__container">
				<div className="change-project__row">
					<div className="change-project__form-container">
						<div className="change-project__form">
							<Input
								parentClass="change-project"
								type="text"
								{...name.bind}
							>
								Введите название сайта
							</Input>
							<Input
								parentClass="change-project"
								type="text"
								{...link.bind}
							>
								Придумайте адресное имя сайта
							</Input>

							<div className="change-project__annotation">
								Адресное имя сайта будет использоваться в адресной строке браузера. В примере ниже подчеркнуто красным цветом. Если имя проекта не указано, то сервис сгенерирует его автоматически. В дальнейшем вы сможете изменить его в настройках или подключить свой домен. Например:
								<br />
								<span className="change-project__annotation-bold-text"> http://instasite.com/</span>
								<span className="change-project__annotation-bold-red-text">project-name</span>
							</div>
							<Button
								parentClass="change-project"
								handler={changeProjectHandler}
								modClass={['big']}
								disabled={loading}
							>
								Сохранить
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChangeProject