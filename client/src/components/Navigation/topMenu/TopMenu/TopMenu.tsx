import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import HorizontalNav from '../HorizontalNav/HorizontalNav'
import Logo from '../Logo/Logo'
import './TopMenu.scss'

const TopMenu: React.FC = () => {
	return (
		<div className="top-menu">
			<div className="top-menu__container">
				<div className="top-menu__row">

					<Logo parentClass="top-menu" />

					<BreadCrumbs parentClass="top-menu" />

					<HorizontalNav parentClass="top-menu" />

				</div>
			</div>		
		</div>
	)
}

export default TopMenu