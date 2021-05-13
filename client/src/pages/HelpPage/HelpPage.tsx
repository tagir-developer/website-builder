import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import './HelpPage.scss'

//! Здесь в зависимости от авторизованности выводить разный тип меню

const HelpPage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="back-to-main" />
			<div className="content-area">
				<div className="help-page">
					<div className="help-page__container">
						<div className="help-page__row">
							<div className="help-page__col-menu">

								<div className="help-page_left-menu left-menu">
								</div>

							</div>
							<div className="help-page__col-content">
								<div className="help-page__table-of-contents">
									<span className="help-page__contents-heading">Содержание</span>
									<ol className="help-page__contents-list">
										<li className="help-page__contents-list-item">Раздел 1
											<ul className="help-page__contents-nested-list">
												<li className="help-page__contents-nested-list-item">Подраздел 1</li>
												<li className="help-page__contents-nested-list-item">Подраздел 2</li>
											</ul>
										</li>
										<li className="help-page__contents-list-item">Раздел 2</li>
										<li className="help-page__contents-list-item">Раздел 3</li>
									</ol>
								</div>
								<h1 className="help-page__h1">Начало работы</h1>
								<p className="help-page__p">Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
								<p className="help-page__p">Какой-то текст, описывающий работу с сайтом. <span className="help-page__bold">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</span></p>
								<p className="help-page__p">Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
								<div className="help-page__image-container">
									<div className="help-page__image"></div>
								</div>
								<p className="help-page__p">Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
								<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
								<ol className="help-page__list">
									<li className="help-page__list-item">Пункт списка 1. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</li>
									<li className="help-page__list-item">Пункт списка 2.</li>
									<li className="help-page__list-item">Пункт списка 3. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</li>
								</ol>
								<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
								<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
								
								<h2 className="help-page__h2">Заголовок второго уровня</h2>
								<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
								<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
								<div className="help-page__quote">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. В этом блоке можно выделить важную мысль или идею. В этом блоке можно выделить важную мысль или идею. </div>
								<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
								<p className="help-page__p">Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default HelpPage