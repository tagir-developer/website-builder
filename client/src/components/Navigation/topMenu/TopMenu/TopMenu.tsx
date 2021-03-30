import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import HorizontalNav from '../HorizontalNav/HorizontalNav'
import './TopMenu.scss'

const TopMenu: React.FC = () => {
	return (
		<div className="top-menu">
			<div className="top-menu__container">
				<div className="top-menu__row">
					<div className="logo top-menu__logo">
					</div>

					<BreadCrumbs parentClass="top-menu" />

					<HorizontalNav parentClass="top-menu" />

				</div>
			</div>		
		</div>
	)
}

export default TopMenu