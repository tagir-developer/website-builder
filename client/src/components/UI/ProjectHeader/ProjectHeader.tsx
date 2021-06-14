import React from 'react'
import './ProjectHeader.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import SmallIconButton from '../SmallIconButton/SmallIconButton'
import Button from '../Button/Button'
import CopyLink from '../CopyLink/CopyLink'
import ShowMenuBtn from '../ShowMenuBtn/ShowMenuBtn'

interface IProjectHeader {
	parentClass?: string
	modClass?: string[]
	name: string
	handlers: {
		[key: string]: (param?: any) => any
	}
	type: 'no-pages' | 'has-pages-unpublished' | 'published-updated' | 'published-not-updated'
	// published: boolean
	// hasPages: boolean
	// updated: boolean
}

const ProjectHeader: React.FC<IProjectHeader> = ({ parentClass, modClass, name, handlers, type }) => {

	const projectHeaderClasses = useCreateClassName('project-header', parentClass, modClass)

	let published: boolean = false
	let hasPages: boolean = false
	let updated: boolean = false

	if (type === 'no-pages') {
		published = false
		hasPages = false
		updated = false
	}

	if (type === 'has-pages-unpublished') {
		published = false
		hasPages = true
		updated = false
	}

	if (type === 'published-updated') {
		published = true
		hasPages = true
		updated = true
	}

	if (type === 'published-not-updated') {
		published = true
		hasPages = true
		updated = false
	}

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
						{!published && !hasPages // ? На сайте еще нет ни одной страницы (новый сайт)
							? <Button
								parentClass="project-header"
								handler={() => { }}
							>
								Добавить страницу
							</Button>
							: null
						}
						{!published && hasPages  // ? На сайте есть страницы, но он еще не опубликован
							? <Button
								parentClass="project-header"
								handler={() => { }}
							>
								Опубликовать сайт
							</Button>
							: null
						}
						{published && updated  // ? Сайт опубликован и обновлен (кнопка заблокирована)
							? <Button
								parentClass="project-header"
								handler={() => { }}
								disabled={true}
							>
								Обновить сайт
							</Button>
							: null
						}
						{published && !updated  // ? Сайт опубликован, но не обновлен
							? <Button
								parentClass="project-header"
								handler={() => { }}
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
								value="http://insta-site.com/sveta"
								useLabel="Ссылка на опубликованный сайт"
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