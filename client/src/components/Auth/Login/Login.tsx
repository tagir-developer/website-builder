import React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import SmallIconButton from '../../UI/SmallIconButton/SmallIconButton'
import './Login.scss'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useCallback } from 'react'

interface ILogin extends RouteComponentProps {
	parentClass: string
}

const Login: React.FC<ILogin> = ({ parentClass, history }) => {

	const loginClasses = useCreateClassName('login', parentClass)

	const { errors } = useTypedSelector(state => state.auth)
	const {login, authRemoveError} = useActions()

	const email = useInput('', authRemoveError, 'email', errors)
	const password = useInput('', authRemoveError, 'password', errors)

	const loginHandler = useCallback(() => {
		login(email.value, password.value)
	}, [login])


	return (
		<div className={loginClasses}>
			<div className="login__container">
				<div className="login__row">
					<div className="login__form-container">
						<div className="login__form">
							<Input 
								parentClass="login"
								type="email"
								placeholder="Электронная почта*"
								isInvalid={errors.includes('email')}
								{...email.bind}
							/>
							<Input 
								parentClass="login"
								type="password"
								placeholder="Пароль*"
								isInvalid={errors.includes('email')}
								{...password.bind}
							/>

							<Button 
								parentClass="login" 
								handler={loginHandler}
								modClass={['big']}
							>
								Войти
							</Button>

							<div className="login__bottom-container">
							<SmallIconButton 
								parentClass="login"
								modClass={["register-icon"]}
								handler={() => history.push('./registration')}
							>
								Регистрация
							</SmallIconButton>
							<Link to="/reset" className="login__recovery-link" >Забыли пароль?</Link>
							</div>				
						</div>			
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Login)