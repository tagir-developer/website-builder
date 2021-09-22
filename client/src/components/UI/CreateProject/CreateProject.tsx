import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './CreateProject.scss'

interface ICreateProject {
	parentClass?: string
	closePopup: Function
}

const CreateProject: React.FC<ICreateProject> = ({ parentClass, closePopup }) => {

	const CreateProjectClasses = useCreateClassName('create-project', parentClass)

	const { loading } = useTypedSelector(state => state.projects)
	const { errors } = useTypedSelector(state => state.alert)
	const { createNewProject, alertRemoveError, getAllProjects } = useActions()

	const name = useInput('', alertRemoveError, 'name', errors)
	const link = useInput('', alertRemoveError, 'link', errors)

	const createProjectHandler = () => { 
		createNewProject(name.value, link.value)
		closePopup()
		getAllProjects()
	}

	return (
		<div className={CreateProjectClasses}>
			<div className="create-project__container">
				<div className="create-project__row">
					<div className="create-project__form-container">
						<div className="create-project__form">
							<Input
								parentClass="create-project"
								type="text"
								{...name.bind}
							>
								Введите название сайта
							</Input>
							<Input
								parentClass="create-project"
								type="text"
								{...link.bind}
							>
								Придумайте адресное имя сайта
							</Input>

							<div className="create-project__annotation">
								Адресное имя сайта будет использоваться в адресной строке браузера. В примере ниже подчеркнуто красным цветом. Если имя проекта не указано, то сервис сгенерирует его автоматически. В дальнейшем вы сможете изменить его в настройках или подключить свой домен. Например:
								<br />
								<span className="create-project__annotation-bold-text"> http://instasite.com/</span>
								<span className="create-project__annotation-bold-red-text">project-name</span>
							</div>
							<Button
								parentClass="create-project"
								handler={createProjectHandler}
								modClass={['big']}
								disabled={loading}
							>
								Создать сайт
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateProject