import React from 'react'
import './styles.scss'


const Footer: React.FC = () => {
	return (
		<div className="container">
			{/* container внутри блока или снаружи? Пока не разобрался */}
			<div className="footer">
				<div className="footer__row">
					<div className="footer__support">
						<span className="footer__title">Поддержка</span>
						<button className="footer__button">Задать вопрос</button>
						<button className="footer__footer-button footer-button">Отправить жалобу</button>
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
						<span className="footer__website">© site-generator.com</span>
						<span className="footer__cppyright-info">Все права защищены.</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer