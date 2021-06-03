import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import './CreatePage.scss'

interface ICreatePage {
	parentClass?: string
	handler: any
}

const CreatePage: React.FC<ICreatePage> = ({ parentClass, handler }) => {

	const CreatePageClasses = useCreateClassName('create-page', parentClass)

	const projectName = useInput('')
	const urlName = useInput('')

	return (
		<div className={CreatePageClasses}>
			<div className="create-page__container">
				<div className="create-page__row">
					<div className="create-page__form-container">
						<div className="create-page__form">
							<label 
								htmlFor="create-page-site-name" 
								className="create-page__input-label input-label"
							>Название страницы
							</label>
							<input
								id="create-page-site-name"
								type="text"
								className="create-page__input input"
								{...projectName.bind}
							/>
							<label 
								htmlFor="create-page-project-name"
								className="create-page__input-label input-label"
							>
								Адрес страницы*
							</label>
							<input
								id="create-page-project-name"
								type="text"
								className="create-page__input input"
								{...urlName.bind}
							/>

							<div className="create-page__checkbox-container">
								<Checkbox parentClass="create-page">Сделать главной</Checkbox>
								<Checkbox parentClass="create-page">Открывать в новом окне и очень длинный текст чекбокса</Checkbox>
							</div>

							<div className="create-page__annotation">
							* Это имя будет использоваться в адресной строке браузера. В примере ниже подчеркнуто красным цветом. Если имя проекта не указано, то сервис сгенерирует его автоматически. В дальнейшем вы сможете изменить его в настройках или подключить свой домен. Например: 
							<br/>
							<span className="create-page__annotation-bold-text"> http://instasite.com/project-name/</span>
							<span className="create-page__annotation-bold-red-text">page-name</span>
							</div>

							<Button
								parentClass="create-page"
								handler={handler}
								modClass={['big']}
							>
								Создать страницу
							</Button>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreatePage