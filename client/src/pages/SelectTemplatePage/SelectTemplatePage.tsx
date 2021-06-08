import React from 'react'
import './SelectTemplatePage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import PageTitle from '../../components/UI/PageTitle/PageTitle'
import ChooseTemplateMenu from '../../components/Navigation/ChooseTemplateMenu/ChooseTemplateMenu'
import TemplateCard from '../../components/UI/TemplateCard/TemplateCard'
import temp1 from './img/temp-1.jpg'
import temp2 from './img/temp-2.jpg'
import temp3 from './img/temp-3.jpg'
import empty from './img/empty.jpg'

const SelectTemplatePage: React.FC = () => {

	const templateCards = [
		{
			image: temp1,
			title: 'Сайт-визитка компании',
			describe: 'Простой шаблон для презентации вашего бизнеса'
		},
		{
			image: temp2,
			title: 'Простая бизнес страница',
			describe: 'Этот шаблон подойдет юрист-консультантам'
		},
		{
			image: temp3,
			title: 'Лендинг магазина часов',
			describe: 'Одностраничный сайт для продажи товаров онлайн'
		},
	]

	return (
		<>
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
								<TemplateCard
									parentClass="select-template"
									title="Пустой шаблон"
									describe="Создайте страницу из готовых блоков самостоятельно"
									img={empty}
									emptyTemplate={true}
								/>

								{templateCards.map((i, index) => {
									return (
										<TemplateCard
											key={index}
											parentClass="select-template"
											title={i.title}
											describe={i.describe}
											img={i.image}
										/>
									)
								})}


							</div>
						</div>

					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default SelectTemplatePage