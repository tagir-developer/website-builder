import React, { useCallback } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import SmallIconButton from '../../UI/SmallIconButton/SmallIconButton'
import './RegisterForm.scss'

interface IRegisterForm extends RouteComponentProps {
	parentClass: string
}

const RegisterForm: React.FC<IRegisterForm> = ({ parentClass, history }) => {

	const registerFormClasses = useCreateClassName('register-form', parentClass)

	const emailInput = useInput('')
	const passwordInput = useInput('')
	const passwordConfirmInput = useInput('')
	const nameInput = useInput('')

	const {loading} = useTypedSelector(state => state.auth)
	const { register } = useActions()

	const registerHandler = useCallback(() => {
		register(emailInput.value, passwordInput.value, passwordConfirmInput.value, nameInput.value)
	}, [register])


	return (
				<div className={registerFormClasses}>
					<div className="register-form__container">
						<div className="register-form__row">
							<div className="register-form__form-container">
								<div className="register-form__form">

									<Input
										type="text"
										parentClass="register-form"
										placeholder="Ваше имя"
										{...nameInput.bind}
									/>
									<Input
										type="text"
										parentClass="register-form"
										placeholder="Электронная почта"
										{...emailInput.bind}
									/>
									<Input
										type="password"
										parentClass="register-form"
										placeholder="Придумайте пароль"
										{...passwordInput.bind}
									/>
									<Input
										type="password"
										parentClass="register-form"
										placeholder="Повторите пароль"
										{...passwordConfirmInput.bind}
									/>

									<Button
										parentClass="register-form"
										modClass={['big']}
										handler={registerHandler}
										disabled={loading}
									>
										Регистрация
									</Button>

									<div className="register-form__bottom-container">
										<div className="register-form__question" >Уже есть аккаунт?</div>
										<SmallIconButton
											parentClass="register-form"
											modClass={["enter-icon"]}
											handler={() => history.push('./login')}
										>
											Войти
										</SmallIconButton>
									</div>
								</div>
							</div>
						</div>
						<div className="register-form__row-terms">
							<div className="register-form__terms">
								Нажимая кнопку регистрации, вы принимаете условия
								<Link to="/" className="register-form__terms-link">Пользовательского соглашения</Link>
							</div>
						</div>
					</div>
				</div>
	)
}

export default withRouter(RegisterForm)