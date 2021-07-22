import React, { useEffect } from 'react'
import { useCallback } from 'react'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import PopUp from '../../components/HOC/PopUp/PopUp'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import ChangeConfigInput from '../../components/UI/ChangeConfigInput/ChangeConfigInput'
import Confirm from '../../components/UI/Confirm/Confirm'
import Footer from '../../components/UI/Footer/Footer'
import Loader from '../../components/UI/Loader/Loader'
import SmallIconButton from '../../components/UI/SmallIconButton/SmallIconButton'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import { useChooseBackdropProps } from '../../hooks/useChooseBackdropProps.hook'
import { usePopup } from '../../hooks/usePopup.hook'
import './UserProfilePage.scss'

//! Здесь в зависимости от авторизованности выводить разный тип меню

const UserProfilePage: React.FC = () => {

	const popupName = usePopup(false, 'blur')
	const popupEmail = usePopup(false, 'blur')
	const popupPassword = usePopup(false, 'blur')
	const backdropProps = useChooseBackdropProps(popupName, popupEmail, popupPassword)

	const {user: oldUserData} = useTypedSelector(state => state.auth)
	const {user, loading, isUpdated} = useTypedSelector(state => state.user)
	const {changeUserName, getUser} = useActions()

	// const changeConfigHandler = useCallback((id: string, func: Function) => {

	// }, [])
	console.log('Рендер базового компонента', user.name)

	useEffect(() => {
			getUser(oldUserData.id)
			console.log('ПЕРВОЕ ПОЛУЧЕНИЕ ДАННЫХ')
	}, [])

	useEffect(() => {
		if (isUpdated) {
			getUser(user.id)
			console.log('ПОЛУЧЕНЫ АКТУАЛЬНЫЕ ДАННЫЕ ПОЛЬЗОВАТЕЛЯ')
		}
	}, [isUpdated])

	// console.log('OLD USER DATA', oldUserData)
	// console.log('NEW USER DATA', user)

	return (
		<>
			<PopUp {...popupName.popupProps} transparent={true}>
				<Confirm handler={popupName.confirm}>Сохранить изменения?</Confirm>
			</PopUp>

			<PopUp {...popupEmail.popupProps} transparent={true}>
				<Confirm handler={popupEmail.confirm}>Сохранить изменения?</Confirm>
			</PopUp>

			<PopUp {...popupPassword.popupProps} transparent={true}>
				<Confirm handler={popupPassword.confirm}>Вы уверены, что хотите изменить пароль? Подтвердив действие, вам придется снова войти в систему с новым паролем.</Confirm>
			</PopUp>

			<Backdrop {...backdropProps}>

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
											handler={() => {}}
										>
											Удалить фото
										</SmallIconButton>
									</div>
								</div>

								<div className="user-profile__change-name-wrapper">
								{loading 
								? <Loader />
								:<ChangeConfigInput
									parentClass="user-profile"
									title="Изменить имя"
									value={user.name}
									userId={user.id}
									confirm={popupName.confirm}
									handler={changeUserName}
								/>
								}
							
								</div>

							</div>

							<div className="user-profile__email-and-password">
								{/* <ChangeConfigInput
									parentClass="user-profile"
									title="Изменить логин (email)"
									value={user.email}
									userId={user.id}
									confirm={popupEmail.confirm}
									handler={() => {}}
								/>
								<ChangeConfigInput
									parentClass="user-profile"
									title="Изменить пароль"
									value="Password123"
									userId={user.id}
									inputType="password"
									confirm={popupPassword.confirm}
									handler={() => {}}
								/> */}
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