import React from 'react'
import './ProjectHeader.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import SmallIconButton from '../SmallIconButton/SmallIconButton'
import Button from '../Button/Button'
import CopyLink from '../CopyLink/CopyLink'
import ShowMenuBtn from '../ShowMenuBtn/ShowMenuBtn'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'

interface IProjectHeader {
	parentClass?: string
	modClass?: string[]
	name: string
	handlers: {
		[key: string]: (param?: any) => any
	}
	published: boolean
	hasPages: boolean
	updated: boolean
	addPageHandler: (param?: any) => any
	projectLink: string
}

const ProjectHeader: React.FC<IProjectHeader> = ({ parentClass, modClass, name, handlers, published, hasPages, updated, addPageHandler, projectLink }) => {

	const projectHeaderClasses = useCreateClassName('project-header', parentClass, modClass)

	const {activeProject} = useTypedSelector(state => state.projects)
	const {generateWebsite} = useActions()

	const projectMenuItems = [
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
					items={projectMenuItems}
				/>

				<div className="project-header__title">{name}</div>
				<div className="project-header__action-buttons">
					<SmallIconButton
						parentClass="project-header"
						handler={handlers.changeProjectPopup}
						modClass={["change-icon"]}
					>
						Изменить
					</SmallIconButton>
					<SmallIconButton
						parentClass="project-header"
						handler={handlers.deleteConfirmationPopup}
						modClass={["delete-icon"]}
					>
						Удалить
					</SmallIconButton>
				</div>
				<div className="project-header__main-btn-and-link-container">
					<div className="project-header__col-1">
						{!published && !hasPages // ? На сайте еще нет ни одной страницы (новый сайт)
							? <Button
								parentClass="project-header"
								handler={addPageHandler}
							>
								Добавить страницу
							</Button>
							: null
						}
						{!published && hasPages  // ? На сайте есть страницы, но он еще не опубликован
							? <Button
								parentClass="project-header"
								handler={generateWebsite}
							>
								Опубликовать сайт
							</Button>
							: null
						}
						{published && updated  // ? Сайт опубликован и обновлен (кнопка заблокирована)
							? <Button
								parentClass="project-header"
								handler={generateWebsite}
								disabled={true}
							>
								Обновить сайт
							</Button>
							: null
						}
						{published && !updated  // ? Сайт опубликован, но не обновлен
							? <Button
								parentClass="project-header"
								handler={generateWebsite}
							>
								Обновить сайт
							</Button>
							: null
						}
					</div>
					<div className="project-header__col-2">
						{!published && !hasPages // ? На сайте еще нет ни одной страницы (новый сайт)
							? <div className="project-header__not-pages">На вашем сайте еще нет страниц. Добавьте свою первую страницу.</div>
							: null
						}
						{!published && hasPages  // ? На сайте есть страницы, но он еще не опубликован
							? <CopyLink
								parentClass="project-header"
								value="Здесь появится ссылка на ваш сайт"
								useLabel="Ссылка на опубликованный сайт"
								inputDisabled={true}
							/>
							: null
						}
						{published  // ? Сайт опубликован и на него создана ссылка
							? <CopyLink
								parentClass="project-header"
								useLabel="Ссылка на опубликованный сайт"
								value={activeProject.generatedProject}
							/>
							: null
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectHeader