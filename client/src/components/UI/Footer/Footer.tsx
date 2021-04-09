import React from 'react'
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
								<a href="#" className="list-unstyled__link">Справочный центр</a>
							</li>
							<li className="list-unstyled__item">
								<a href="#" className="list-unstyled__link">Обучающие видеоуроки</a>
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