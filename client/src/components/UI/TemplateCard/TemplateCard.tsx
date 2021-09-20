import React from 'react'
import './TemplateCard.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useHistory, useParams } from 'react-router'
import Button from '../Button/Button'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import { useActions } from '../../../hooks/reduxHooks'
import { IUrlParams } from '../../../models/IUrlParams'

interface ITemplateCard {
	parentClass?: string
	modClass?: string[]
	title: string
	description: string
	img?: string
	emptyTemplate?: boolean
	openPreview?: Function
	templateId?: string
	// handler: (isEmptyTemplate: 'isEmpty' | 'template', templateId?: string) => void
}

const TemplateCard: React.FC<ITemplateCard> = ({ parentClass, modClass, title, description, img, emptyTemplate, openPreview = () => {}, templateId }) => {

	const templateCardClasses = useCreateClassName('template-card', parentClass, modClass)
	const { name: projectUrl, pageId: pageUrl } = useParams<IUrlParams>()
	const history = useHistory()
	const {choosePageTemplate} = useActions()

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
			<div className="template-card__description">{description}</div>
			<div className={emptyTemplate ? "template-card__buttons-container template-card__buttons-container_center" : "template-card__buttons-container"}>

				{emptyTemplate
					? <Button
						parentClass="template-card"
						handler={async () => {
							await choosePageTemplate('isEmpty')
							history.push('/projects/' + projectUrl + '/' + pageUrl)
						}}
					>
						Начать с нуля
					</Button>
					: <>
						<SecondaryButton
							parentClass="template-card"
							modClass={['']}
							handler={() => openPreview()}
						>
							Просмотреть
						</SecondaryButton>
						<Button
							parentClass="template-card"
							handler={async () => {
								await choosePageTemplate('template', templateId)
								history.push('/projects/' + projectUrl + '/' + pageUrl)
							}}
						>
							Выбрать
						</Button>
					</>
				}

			</div>

		</div>
	)
}

export default TemplateCard