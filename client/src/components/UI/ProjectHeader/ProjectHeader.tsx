import React from 'react'
import './ProjectHeader.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { NavLink } from 'react-router-dom'
import SmallIconButton from '../SmallIconButton/SmallIconButton'
import Button from '../Button/Button'
import CopyLink from '../CopyLink/CopyLink'
import ShowMenuBtn from '../ShowMenuBtn/ShowMenuBtn'

interface IProjectHeader {
	parentClass?: string
	modClass?: string[]
	name: string
	handlers: any
}

const ProjectHeader: React.FC<IProjectHeader> = ({ parentClass, modClass, name, handlers }) => {

	const projectHeaderClasses = useCreateClassName('project-header', parentClass, modClass)

	const projectItems = [
		{
			title: 'Основные настройки',
			handler: handlers.mainConfigPopup
		},
		{
			title: 'Выбрать шрифт',
			handler: handlers.fontConfigPopup
		},
		{
			title: 'Обработка форм',
			handler: handlers.formProcessingPopup
		},
	]

	return (
		<div className={projectHeaderClasses}>
			<div className="project-header__header-container">

				<ShowMenuBtn 
					parentClass="project-header" 
					items={projectItems} 
				/>

				<div className="project-header__title">{name}</div>
				<div className="project-header__action-buttons">
					<SmallIconButton
						parentClass="project-header"
						handler={() => { }}
						modClass={["change-icon"]}
					>
						Изменить
					</SmallIconButton>
					<SmallIconButton
						parentClass="project-header"
						handler={() => { }}
						modClass={["delete-icon"]}
					>
						Удалить
					</SmallIconButton>
				</div>
				<div className="project-header__main-btn-and-link-container">
					<div className="project-header__col-1">
						<Button
							parentClass="project-header"
							handler={() => { console.log('Disabled clicked') }}
							// disabled={true}
						>
							Опубликовать сайт
					</Button>
					</div>
					<div className="project-header__col-2">
						{/* <CopyLink 
							parentClass="project-header"
							value="Здесь появится ссылка на ваш сайт" 
							useLabel="Ссылка на опубликованный сайт"
							inputDisabled={true}
						/> */}
						{/* Если проект неопубликован, выводим див с текстом */}
						<div className="project-header__not-pages">На вашем сайте еще нет страниц. Добавьте свою первую страницу.</div>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default ProjectHeader