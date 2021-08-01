import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './ChangeProject.scss'

interface IChangeProject {
	parentClass?: string
}

const ChangeProject: React.FC<IChangeProject> = ({ parentClass }) => {

	const ChangeProjectClasses = useCreateClassName('change-project', parentClass)

	const { loading } = useTypedSelector(state => state.projects)
	const { errors } = useTypedSelector(state => state.alert)
	const { createNewProject, alertRemoveError } = useActions()

	const name = useInput('', alertRemoveError, 'name', errors)
	const link = useInput('', alertRemoveError, 'link', errors)

	const ChangeProjectHandler = () => { createNewProject(name.value, link.value) }

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
								handler={ChangeProjectHandler}
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