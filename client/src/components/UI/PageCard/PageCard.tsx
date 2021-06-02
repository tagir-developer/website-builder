import React from 'react'
import './PageCard.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import Button from '../Button/Button'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import StatusLabel from '../StatusLabel/StatusLabel'
import CopyLink from '../CopyLink/CopyLink'
import { RouteComponentProps, withRouter } from 'react-router'
import ShowMenuBtn from '../ShowMenuBtn/ShowMenuBtn'

interface IPageCard extends RouteComponentProps<any> {
	parentClass?: string
	modClass?: string[]
	title: string
	published: boolean
	link: string
	isMainPage: boolean
}

const PageCard: React.FC<IPageCard> = ({ parentClass, modClass, title, published, history, link, isMainPage }) => {

	const pageCardClasses = useCreateClassName('page-card', parentClass, modClass)

	return (
		<div className={pageCardClasses}>
			

			<div className="page-card__card-container">

			<ShowMenuBtn parentClass="page-card" />

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
						<Button parentClass="page-card" handler={() => { history.push(link) }} >
							Редактировать страницу
					</Button>
					</div>


				</div>

				{/* <div className="page-card__buttons-container">
					

					{!hasPages
						? <SecondaryButton parentClass="page-card" handler={() => { }} >
							Создать страницу
								</SecondaryButton>
						: null
					}
					{hasPages && published
						? <CopyLink parentClass="page-card" value="http://insta-site.com/sveta" />
						: null
					}
					{hasPages && !published
						? <SecondaryButton parentClass="page-card" handler={() => { }} >
							Опубликовать сайт
							</SecondaryButton>
						: null
					}

				</div> */}
			</div>
		</div>
	)
}

export default withRouter(PageCard)