import React from 'react'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import PopUp from '../../components/HOC/PopUp/PopUp'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import ChangeConfigInput from '../../components/UI/ChangeConfigInput/ChangeConfigInput'
import Confirm from '../../components/UI/Confirm/Confirm'
import Footer from '../../components/UI/Footer/Footer'
import SmallIconButton from '../../components/UI/SmallIconButton/SmallIconButton'
import { usePopup } from '../../hooks/usePopup.hook'
import './UserProfilePage.scss'

//! Здесь в зависимости от авторизованности выводить разный тип меню

const UserProfilePage: React.FC = () => {

	const popup = usePopup(false, 'blur')

	return (
		<>
			<PopUp {...popup.popupProps} transparent={true}>
				<Confirm handler={popup.confirm}>Сохранить изменения?</Confirm>
			</PopUp>

			<Backdrop {...popup.backdropProps}>

			<TopMenu menuType="back-to-main" />
			<div className="content-area">
				<div className="user-profile">
					<div className="user-profile__container">
						<div className="user-profile__title">Настройки аккаунта</div>
						<div className="user-profile__subtitle">Личные данные</div>
						<div className="user-profile__row">

							<div className="user-profile__photo-and-name">
								<div className="user-profile__profile-photo-container">

									<div className="user-profile__avatar-container">
										<div className="user-profile__avatar"></div>
									</div>

									<div className="user-profile__download-and-delete">
										<SmallIconButton
											parentClass="user-profile"
											modClass={["add-icon"]}
											handler={() => { }}
										>
											Загрузить фото
										</SmallIconButton>
										<SmallIconButton
											parentClass="user-profile"
											modClass={["delete-icon"]}
											handler={() => { }}
										>
											Удалить фото
										</SmallIconButton>
									</div>
								</div>

								<div className="user-profile__change-name-wrapper">
								<ChangeConfigInput
									parentClass="user-profile"
									title="Изменить имя"
									value="Владислав Иванов"
									confirm={popup.confirm}
								/>
								</div>

							</div>

							<div className="user-profile__email-and-password">
								<ChangeConfigInput
									parentClass="user-profile"
									title="Изменить логин (email)"
									value="vladislav@mail.ru"
									confirm={popup.confirm}
								/>
								<ChangeConfigInput
									parentClass="user-profile"
									title="Изменить пароль"
									value="Password123"
									inputType="password"
									confirm={popup.confirm}
								/>
							</div>

						</div>
						<div className="user-profile__subtitle">Тариф</div>
						<div className="user-profile__text-block">В данный момент сервис работает в тестовом режиме, поэтому все функции доступны бесплатно.</div>
					</div>

				</div>
			</div>
			<Footer />

			</Backdrop>
		</>
	)
}

export default UserProfilePage