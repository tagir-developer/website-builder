import React from 'react'
import LeftMenu from '../../components/Navigation/leftMenu/LeftMenu'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import './HelpPage.scss'
import PageSecond from './pages/PageSecond'
import PageStart from './pages/PageStart'

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

								<LeftMenu parentClass="help-page" />

							</div>
							<div className="help-page__col-content">

								{/* <PageStart /> */}
								<PageSecond />

								
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