import React from 'react'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import PopUp from '../../components/HOC/PopUp/PopUp'
import LeftMenu from '../../components/Navigation/leftMenu/LeftMenu'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import MenuToggle from '../../components/UI/MenuToggle/MenuToggle'
import { usePopup } from '../../hooks/usePopup.hook'
import './HelpPage.scss'

const HelpPage: React.FC = ({ children }) => {

	const popup = usePopup(false, 'solid')

	return (
		<>
			<PopUp {...popup.popupProps}>
				<LeftMenu parentClass="popup" title="Справка" />
			</PopUp>

			<Backdrop {...popup.backdropProps} >

				<TopMenu menuType="back-to-main" />
				<div className="content-area">
					<div className="help-page">
						<div className="help-page__container">
							<div className="help-page__row">

								<MenuToggle
									parentClass="help-page"
									modClass={['help-page']}
									handler={popup.handler}
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

			</Backdrop>
		</>
	)
}

export default HelpPage