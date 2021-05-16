import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PopUp from '../../components/HOC/PopUp/PopUp'
import LeftMenu from '../../components/Navigation/leftMenu/LeftMenu'
import Logo from '../../components/Navigation/topMenu/Logo/Logo'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import MenuToggle from '../../components/UI/MenuToggle/MenuToggle'
import './HelpPage.scss'
import PageSecond from './pages/PageSecond'
import PageStart from './pages/PageStart'

//! Здесь в зависимости от авторизованности выводить разный тип меню

const HelpPage: React.FC = ({children}) => {

	const [openPopUp, setOpenPopUp] = useState<boolean>(false)

	const closePopup = (): void => {
		setTimeout(() => setOpenPopUp(prev => !prev), 300)
	}

	return (
		<>
		<PopUp 
			type={"blur"} 
			isOpen={openPopUp} 
			closeHandler={closePopup}
			component={ () => <LeftMenu parentClass="popup" title="Справка" /> }
		>
			<TopMenu menuType="back-to-main" />
			<div className="content-area">
					<div className="help-page">
						<div className="help-page__container">
							<div className="help-page__row">

								<MenuToggle 
									parentClass="help-page" 
									modClass={['help-page']} 
									handler={() => setOpenPopUp(prev => !prev)} 
								/>

								<div className="help-page__col-menu">
									<LeftMenu 
										parentClass="help-page" 
										title="Справка"
									/>
								</div>
								<div className="help-page__col-content">
									{children}
								</div>
							</div>
						</div>
					</div>
			</div>
			<Footer />
			</PopUp>
		</>
	)
}

export default HelpPage