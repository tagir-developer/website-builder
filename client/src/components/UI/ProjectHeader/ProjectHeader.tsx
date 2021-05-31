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
}

const ProjectHeader: React.FC<IProjectHeader> = ({ parentClass, modClass, name }) => {

	const projectHeaderClasses = useCreateClassName('project-header', parentClass, modClass)

	return (
		<div className={projectHeaderClasses}>
			<div className="project-header__header-container">

				<ShowMenuBtn parentClass="project-header" />

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
							handler={() => { }}
						>
							Опубликовать сайт
					</Button>
					</div>
					<div className="project-header__col-2">
						<CopyLink 
							parentClass="project-header"
							value="Здесь появится ссылка на ваш сайт" 
							useLabel="Ссылка на опубликованный сайт"
							inputDisabled={true}
						/>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default ProjectHeader