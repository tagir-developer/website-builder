import React from 'react'
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

	const { loading, errors } = useTypedSelector(state => state.auth)
	const { register, authRemoveError } = useActions()

	const email = useInput('', authRemoveError, 'email', errors)
	const password = useInput('', authRemoveError, 'password', errors)
	const passwordConfirm = useInput('', authRemoveError, 'passwordConfirm', errors)
	const name = useInput('')

	const registerHandler = () => register(email.value, password.value, passwordConfirm.value, name.value)

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
								{...name.bind}
							/>
							<Input
								type="text"
								parentClass="register-form"
								placeholder="Электронная почта*"
								{...email.bind}
							/>
							<Input
								type="password"
								parentClass="register-form"
								placeholder="Придумайте пароль*"
								{...password.bind}
							/>
							<Input
								type="password"
								parentClass="register-form"
								placeholder="Повторите пароль*"
								{...passwordConfirm.bind}
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