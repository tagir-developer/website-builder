import React from 'react'
import { Link } from 'react-router-dom'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../../UI/Button/Button'
import SmallIconButton from '../../UI/SmallIconButton/SmallIconButton'
import './Login.scss'

interface ILogin {
	parentClass: string
}

const Login: React.FC<ILogin> = ({ parentClass }) => {

	const emailInput = useInput('')
	const passwordInput = useInput('')

	return (
		<div className="login">
			<div className="login__container">
				<div className="login__row">
					<div className="login__form-container">
						<div className="login__form">
							<input 
								type="text" 
								className="login__input input" 
								placeholder="Электронная почта" 
								{...emailInput.bind} 
							/>
							<input 
								type="password" 
								className="login__input input" 
								placeholder="Пароль" 
								{...passwordInput.bind} />

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
								handler={() => console.log('Small-icon-btn click')}
							>
								Регистрация
							</SmallIconButton>
							<Link to="recovery" className="login__recovery-link" >Забыли пароль?</Link>
							</div>				
						</div>			
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login