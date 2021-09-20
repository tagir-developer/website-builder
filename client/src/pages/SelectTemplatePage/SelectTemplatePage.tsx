import React, { useEffect } from 'react'
import './SelectTemplatePage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import PageTitle from '../../components/UI/PageTitle/PageTitle'
import ChooseTemplateMenu from '../../components/Navigation/ChooseTemplateMenu/ChooseTemplateMenu'
import TemplateCard from '../../components/UI/TemplateCard/TemplateCard'
import empty from './img/empty.jpg'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import Loader from '../../components/UI/Loader/Loader'
import PopUp from '../../components/HOC/PopUp/PopUp'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { useMultiPopup } from '../../hooks/useMultiPopup.hook'

const SelectTemplatePage: React.FC = () => {

	const { templates, loading } = useTypedSelector(state => state.template)
	const { getAllTemplates } = useActions()

	const previewPopup = useMultiPopup(templates.map((i, index) => {
		return {
			id: i.id,
			elem: () => (
				<img
					key={index}
					className="select-template__popup-preview"
					src={i.preview}
					alt={i.title}
				/>
			)
		}
	}), 'blur')

	useEffect(() => {
		getAllTemplates()
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<PopUp {...previewPopup.popupProps} withTitle="Предпросмотр шаблона" modClass={['template-preview']}>
				{previewPopup.content}
			</PopUp>

			<Backdrop {...previewPopup.backdropProps}>
				<TopMenu menuType='go-back' />
				<div className="content-area">
					<div className="select-template">
						<PageTitle parentClass="select-template" title="Новая страница">
							Выберите подходящий шаблон из списка или создайте страницу с нуля.
						</PageTitle>

						<ChooseTemplateMenu parentClass="select-template" />

						<div className="select-template__template-card-list">
							<div className="select-template__list-container">
								<div className="select-template__list-row">

									{loading
										? <Loader parentClass="select-template" />
										: <>
											<TemplateCard
												parentClass="select-template"
												title="Пустой шаблон"
												description="Создайте страницу из готовых блоков самостоятельно"
												img={empty}
												emptyTemplate={true}
											/>
											{templates.map((i, index) => {
												return (
													<TemplateCard
														key={index}
														parentClass="select-template"
														templateId={i.id}
														title={i.title}
														description={i.description}
														img={i.image}
														openPreview={() => previewPopup.openPopup(i.id)}
													/>
												)
											})}
										</>
									}

								</div>
							</div>

						</div>
					</div>
				</div>
				<Footer />
			</Backdrop>
		</>
	)
}

export default SelectTemplatePage