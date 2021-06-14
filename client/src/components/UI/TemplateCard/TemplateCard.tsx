import React from 'react'
import './TemplateCard.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { RouteComponentProps, withRouter } from 'react-router'
import Button from '../Button/Button'
import SecondaryButton from '../SecondaryButton/SecondaryButton'

interface ITemplateCard extends RouteComponentProps<any> {
	parentClass?: string
	modClass?: string[]
	title: string
	describe: string
	img?: string
	emptyTemplate?: boolean
}

const TemplateCard: React.FC<ITemplateCard> = ({ history, match, parentClass, modClass, title, describe, img, emptyTemplate }) => {

	const templateCardClasses = useCreateClassName('template-card', parentClass, modClass)

	const devHandler = () => {
		history.push('/' + match.params.name + '/' + match.params.pageId)
	} // ! Временная общая функция, которая перенаправляет на страницу редактирования страницы проекта


	return (
		<div className={templateCardClasses}>

			{emptyTemplate
				? <div className="template-card__image-container">
					<div className="template-card__emty-template">Пустой шаблон</div>
					<img className="template-card__image" src={img} alt="" />
				</div>
				: <div className="template-card__image-container">
					{/* <img className="template-card__image" src={process.env.PUBLIC_URL + '/img/temp-2.jpg'} /> */}
					<img className="template-card__image" src={img} alt=""  />
				</div>
			}

			<div className="template-card__title">{title}</div>
			<div className="template-card__describe">{describe}</div>
			<div className={emptyTemplate ? "template-card__buttons-container template-card__buttons-container_center" : "template-card__buttons-container"}>

				{emptyTemplate
					? <Button
						parentClass="template-card"
						handler={devHandler}
					>
						Начать с нуля
					</Button>
					: <>
						<SecondaryButton
							parentClass="template-card"
							modClass={['']}
							handler={() => { }}
						>
							Просмотреть
						</SecondaryButton>
						<Button
							parentClass="template-card"
							handler={devHandler}
						>
							Выбрать
						</Button>
					</>
				}

			</div>



		</div>
	)
}

export default withRouter(TemplateCard)