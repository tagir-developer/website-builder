import React from 'react'
import './PageCard.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import Button from '../Button/Button'
import StatusLabel from '../StatusLabel/StatusLabel'
import { RouteComponentProps, withRouter } from 'react-router'
import ShowMenuBtn from '../ShowMenuBtn/ShowMenuBtn'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'

interface IPageCard extends RouteComponentProps<any> {
	parentClass?: string
	modClass?: string[]
	title: string
	published: boolean
	link: string
	isMainPage: boolean
	pageId: string
	handlers: {
		// [key: string]: (param?: any) => any
		changePageOpenPopup: Function
		copyPage: Function
		makePageHome: Function
		deletePageOpenPopup: Function
	}
}

const PageCard: React.FC<IPageCard> = ({ parentClass, modClass, title, published, history, link, isMainPage, handlers, pageId }) => {

	const pageCardClasses = useCreateClassName('page-card', parentClass, modClass)
	const { activeProject } = useTypedSelector(state => state.projects)
	const { pages } = useTypedSelector(state => state.page)
	const { setActivePage } = useActions()

	const needToPublish: string = published ? 'Снять с публикации' : 'Опубликовать' //! Пока функцию опубликовать и снять с публикации отложим

	const menuItems = [
		{
			title: needToPublish,
			handler: () => { }
		},
		{
			title: 'Изменить страницу',
			handler: () => {
				setActivePage(pages, pageId)
				handlers.changePageOpenPopup()
			}
		},
		{
			title: 'Создать дубликат',
			handler: () => handlers.copyPage(pageId)
		},
		{
			title: 'Удалить страницу',
			handler: () => {
				setActivePage(pages, pageId)
				handlers.deletePageOpenPopup()
			}
		},
		{
			title: 'Сделать главной',
			handler: () => handlers.makePageHome(pageId, activeProject.id)
		},
	]

	const editPageHandler = () => { 
		setActivePage(pages, pageId)

		const activePage = pages.filter(page => page.id === pageId)[0]

		if (activePage.isNewPage) {
			history.push(link + '/template')
		} else {
			history.push(link)
		}
	}

	return (
		<div className={pageCardClasses}>

			<div className="page-card__card-container">

				<ShowMenuBtn parentClass="page-card" items={menuItems} />

				<div className="page-card__title-container">
					{isMainPage ? <div className="page-card__main-page-icon"></div> : null}
					<div className="page-card__title">{title}</div>
				</div>

				<div className="page-card__label-and-button-container">
					<div className="page-card__col-1">
						{published
							? <StatusLabel parentClass="page-card" modClass={["success"]}>Опубликована</StatusLabel>
							: <StatusLabel parentClass="page-card" modClass={["danger"]}>Не опубликована</StatusLabel>
						}
					</div>
					<div className="page-card__col-2">
						{/* <Button parentClass="page-card" handler={() => { history.push(link + '/template') }} > */}
						<Button parentClass="page-card" handler={editPageHandler} >
							Редактировать страницу
						</Button>
					</div>

				</div>

			</div>
		</div>
	)
}

export default withRouter(PageCard)