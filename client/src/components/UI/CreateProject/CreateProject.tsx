import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import './CreateProject.scss'

interface ICreateProject {
	parentClass?: string
	handler: any
}

const CreateProject: React.FC<ICreateProject> = ({ parentClass, handler }) => {

	const CreateProjectClasses = useCreateClassName('create-project', parentClass)

	const projectName = useInput('')
	const urlName = useInput('')

	return (
		<div className={CreateProjectClasses}>
			<div className="create-project__container">
				<div className="create-project__row">
					<div className="create-project__form-container">
						<div className="create-project__form">
							<label 
								htmlFor="create-project-site-name" 
								className="create-project__input-label input-label"
							>Введите название сайта
							</label>
							<input
								id="create-project-site-name"
								type="text"
								className="create-project__input input"
								{...projectName.bind}
							/>
							<label 
								htmlFor="create-page-project-name"
								className="create-project__input-label input-label"
							>
								Придумайте имя проекта*
							</label>
							<input
								id="create-page-project-name"
								type="text"
								className="create-project__input input"
								{...urlName.bind}
							/>

							<div className="create-project__annotation">
							* Это имя будет использоваться в адресной строке браузера. В примере ниже подчеркнуто красным цветом. Если имя проекта не указано, то сервис сгенерирует его автоматически. В дальнейшем вы сможете изменить его в настройках или подключить свой домен. Например: 
							<br/>
							<span className="create-project__annotation-bold-text"> http://instasite.com/</span>
							<span className="create-project__annotation-bold-red-text">project-name</span>
							</div>

							<Button
								parentClass="create-project"
								handler={handler}
								modClass={['big']}
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