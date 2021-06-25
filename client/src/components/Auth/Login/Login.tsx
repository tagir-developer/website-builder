import React from 'react'
import { useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import SmallIconButton from '../../UI/SmallIconButton/SmallIconButton'
import './Login.scss'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useTypedSelector, useTypedDispatch } from '../../../hooks/reduxHooks'
import { useCallback } from 'react'
// import { login } from '../../../store/actionCreators/login'

interface ILogin extends RouteComponentProps {
	parentClass: string
}

const Login: React.FC<ILogin> = ({ parentClass, history }) => {

	const loginClasses = useCreateClassName('login', parentClass)

	// const [form, setForm] = useState({
	// 	email: '', password: ''
	// })

	// const changeHandler = (event: React.FormEvent & { target: HTMLInputElement }): void => {
	// 	setForm({...form, [event.target.name]: event.target.value})
	// }

	const emailInput = useInput('')
	const passwordInput = useInput('')

	// const email = useAppSelector(state => state.auth.email)
	// const password = useAppSelector(state => state.auth.password)

	const dispatch = useTypedDispatch()

	// const loginHandler = useCallback(() => {
	// 	dispatch(login(emailInput.value, passwordInput.value))
	// }, [])


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
								{...emailInput.bind}
							/>
							<Input 
								parentClass="login"
								type="text"
								name="password"
								placeholder="Пароль"
								{...passwordInput.bind}
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
								// handler={loginHandler}
								handler={() => {}}
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

// function mapDispatchToProps() {
// 	return {
// 		login: (email, password) => dispatch(login(email, password))
// 	}
// }

// export default compose(
// 	withRouter,
// 	connect(null, mapDispatchToProps)
//   )(Login)