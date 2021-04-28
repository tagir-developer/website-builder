import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

const Footer: React.FC = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__row">
					<div className="footer__support">
						<span className="footer__title">Поддержка</span>
						<button className="footer__footer-button footer-button">Задать вопрос</button>
						<button className="footer__footer-button footer-button">Написать жалобу</button>
					</div>
					<div className="footer__learning">
						<span className="footer__title">Обучение</span>
						<ul className="footer__list-unstyled list-unstyled">
							<li className="list-unstyled__item">
								<NavLink to="/help" className="list-unstyled__link">Справочный центр</NavLink>
							</li>
							<li className="list-unstyled__item">
								<NavLink to="/learning" className="list-unstyled__link">Обучающие видеоуроки</NavLink>
							</li>
						</ul>
					</div>
					<div className="footer__copyright">
						<p className="footer__website">© site-generator.com</p>
						<p className="footer__cppyright-info">Все права защищены.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer