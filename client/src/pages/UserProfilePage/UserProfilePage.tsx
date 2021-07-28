import React, { useEffect } from 'react'
import AlertMessage from '../../components/HOC/AlertMessage/AlertMessage'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import PopUp from '../../components/HOC/PopUp/PopUp'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import ChangeConfigInput from '../../components/UI/ChangeConfigInput/ChangeConfigInput'
import Confirm from '../../components/UI/Confirm/Confirm'
import FileUpload from '../../components/UI/FileUpload/FileUpload'
import Footer from '../../components/UI/Footer/Footer'
import Loader from '../../components/UI/Loader/Loader'
import LoaderHorizontal from '../../components/UI/LoaderHorizontal/LoaderHorizontal'
import SmallIconButton from '../../components/UI/SmallIconButton/SmallIconButton'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import { useChooseBackdropProps } from '../../hooks/useChooseBackdropProps.hook'
import { usePopup } from '../../hooks/usePopup.hook'
import { useUploadFiles } from '../../hooks/useUploadFiles.hook'
import './UserProfilePage.scss'

//! Здесь в зависимости от авторизованности выводить разный тип меню

const UserProfilePage: React.FC = () => {

	const popupName = usePopup(false, 'blur')
	const popupEmail = usePopup(false, 'blur')
	const popupPassword = usePopup(false, 'blur')
	const backdropProps = useChooseBackdropProps(popupName, popupEmail, popupPassword)

	const { user: { id: userId } } = useTypedSelector(state => state.auth)
	const { user, loading, isUpdated } = useTypedSelector(state => state.user)
	const { changeUserName, changeUserEmail, changeUserPassword, getUser, uploadUserAvatar, deleteUserAvatar } = useActions()

	const uploadAvatar = useUploadFiles('avatar', true, userId, uploadUserAvatar)

	useEffect(() => {
		getUser(userId)
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		if (isUpdated) getUser(userId)
		// eslint-disable-next-line
	}, [isUpdated])

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

				<AlertMessage>
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
												{loading
													? <Loader parentClass="user-profile" />
													: !!user.avatar
														? <img
															src={user.avatar}
															alt={'avatar-' + user.name}
															className="user-profile__avatar"
														></img>
														: <div className="user-profile__avatar"></div>
												}

											</div>

											<div className="user-profile__download-and-delete">

												<FileUpload
													parentClass="user-profile"
													modClass={["add-icon"]}
													{...uploadAvatar.bind}
												>
													Загрузить фото
												</FileUpload>
												<SmallIconButton
													parentClass="user-profile"
													modClass={["delete-icon"]}
													handler={!!user.avatar ? () => deleteUserAvatar(userId) : () => {}}
												>
													Удалить фото
												</SmallIconButton>
											</div>
										</div>

										<div className="user-profile__change-name-wrapper">
											{loading
												? <LoaderHorizontal />
												: <ChangeConfigInput
													parentClass="user-profile"
													title="Изменить имя"
													value={user.name}
													userId={userId}
													confirm={popupName.confirm}
													handler={changeUserName}
												/>
											}
										</div>

									</div>

									<div className="user-profile__email-and-password">
										{loading
											? <LoaderHorizontal />
											: <ChangeConfigInput
												parentClass="user-profile"
												title="Изменить логин (email)"
												value={user.email}
												userId={userId}
												confirm={popupEmail.confirm}
												handler={changeUserEmail}
											/>
										}
										{loading
											? <LoaderHorizontal />
											: <ChangeConfigInput
												parentClass="user-profile"
												title="Изменить пароль"
												value="password"
												isPassword
												userId={userId}
												inputType="password"
												confirm={popupPassword.confirm}
												handler={changeUserPassword}
											/>
										}
									</div>

								</div>
								<div className="user-profile__subtitle">Тариф</div>
								<div className="user-profile__text-block">В данный момент сервис работает в тестовом режиме, поэтому все функции доступны бесплатно.</div>
							</div>

						</div>
					</div>
					<Footer />
				</AlertMessage>

			</Backdrop>
		</>
	)
}

export default UserProfilePage