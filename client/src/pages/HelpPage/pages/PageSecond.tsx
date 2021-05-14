import React from 'react'
import '../HelpPage.scss'

const PageSecond: React.FC = () => {
	return (
		<>
			<div className="help-page__table-of-contents">
				<span className="help-page__contents-heading">Содержание</span>
				<ol className="help-page__contents-list">
					<li className="help-page__contents-list-item">Раздел 1
											<ul className="help-page__contents-nested-list">
							<li className="help-page__contents-nested-list-item">Подраздел 1</li>
							<li className="help-page__contents-nested-list-item">Подраздел 2</li>
							<li className="help-page__contents-nested-list-item">Подраздел 3</li>
						</ul>
					</li>
					<li className="help-page__contents-list-item">Раздел 2</li>
				</ol>
			</div>
			<h1 className="help-page__h1">Как создать сайт</h1>
			<p className="help-page__p">Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
			<p className="help-page__p">Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
			<div className="help-page__image-container">
				<div className="help-page__image"></div>
			</div>
			<p className="help-page__p">Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
			<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
			<div className="help-page__image-container">
				<div className="help-page__image"></div>
			</div>
			<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
			<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>

			<h2 className="help-page__h2">Подраздел статьи</h2>
			<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
			<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
			<p className="help-page__p">Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис. Какой-то текст, описывающий работу с сайтом. Инструкция по работе с сайтом и другая полезная информация. Как настроить сервис.</p>
		</>
	)
}

export default PageSecond