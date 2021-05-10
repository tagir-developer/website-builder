import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import VideoBlock from '../../components/UI/VideoBlock/VideoBlock'
import './LearningPage.scss'

//! Здесь в зависимости от авторизованности выводить разный тип меню

const LearningPage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="back-to-main" />
			<div className="content-area">
				<div className="learning-wrapper">
					<div className="learning-header">
						<h1 className="learning-header__title">Видеоинструкция<br /> по работе с сервисом</h1>
					</div>
					<div className="learning-content">
						<VideoBlock
							parentClass="learning-content"
							numb={1}
							title="Начало работы с сервисом."
							link={"https://www.youtube.com/embed/hGIW2fDb0jg"}
						/>

						<VideoBlock
							parentClass="learning-content"
							numb={2}
							title="Как создать свой первый сайт и страницу"
							link={"https://www.youtube.com/embed/W62lE_nzwzU"}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default LearningPage