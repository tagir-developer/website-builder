import React from 'react'
import { useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import SmallIconButton from '../../UI/SmallIconButton/SmallIconButton'
import './Login.scss'

interface ILogin extends RouteComponentProps {
	parentClass: string
}

const Login: React.FC<ILogin> = ({ parentClass, history }) => {

	const loginClasses = useCreateClassName('login', parentClass)

	const [form, setForm] = useState({
		email: '', password: ''
	})

	const changeHandler = (event: React.FormEvent & { target: HTMLInputElement }): void => {
		setForm({...form, [event.target.name]: event.target.value})
	}

	// const emailInput = useInput('')
	// const passwordInput = useInput('')

	console.log('form', form)

	return (
		<div className={loginClasses}>
			<div className="login__container">
				<div className="login__row">
					<div className="login__form-container">
						<div className="login__form">
							<Input 
								parentClass="login"
								type="email"
								name="email"
								placeholder="Электронная почта"
								onChange={changeHandler}
							/>
							<Input 
								parentClass="login"
								type="text"
								name="password"
								placeholder="Пароль"
								onChange={changeHandler}
							/>
							{/* <input 
								type="text" 
								className="login__input input" 
								placeholder="Электронная почта" 
								{...emailInput.bind} 
							/>
							<input 
								type="password" 
								className="login__input input" 
								placeholder="Пароль" 
								{...passwordInput.bind} /> */}

							<Button 
								parentClass="login" 
								handler={() => console.log('Btn click')}
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
							<Link to="/recovery" className="login__recovery-link" >Забыли пароль?</Link>
							</div>				
						</div>			
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Login)