import React from 'react'
import './TopMenu.scss'

const TopMenu: React.FC = () => {
	return (
		<div className="top-menu">
			<div className="top-menu__container">
				<div className="top-menu__row">
					<div className="logo top-menu__logo">
					</div>
					<div className="bread-crumbs top-menu__bread-crumbs">
						<ul className="bread-crumbs__list">
							<li className="bread-crumbs__item">
								<a href="#" className="bread-crumbs__link">Мои сайты</a>
							</li>
							<li className="bread-crumbs__item">
								<a href="#" className="bread-crumbs__link">Список страниц</a>
							</li>
						</ul>
					</div>
					<div className="horizontal-nav top-menu__horizontal-nav">
						{/* <ul className="horizontal-nav__list">
							<li className="horizontal-nav__item">
								<a href="#" className="horizontal-nav__link">Регистрация</a>
							</li>
							<li className="horizontal-nav__item">
								<a href="#" className="horizontal-nav__link horizontal-nav__link_bold">Войти</a>
							</li>
						</ul> */}
					</div>
				</div>
			</div>		
		</div>
	)
}

export default TopMenu