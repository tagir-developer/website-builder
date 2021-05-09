import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../../UI/Button/Button'
import './ResetForm.scss'

interface IResetForm {
	parentClass: string
	alertHandler: (param: any) => any
}

const ResetForm: React.FC<IResetForm> = ({ parentClass, alertHandler }) => {

	const resetFormClasses = useCreateClassName('reset-form', parentClass)

	const passwordInput = useInput('')
	const confirmPasswordInput = useInput('')

	return (
		<div className={resetFormClasses}>
			<div className="reset-form__container">
				<div className="reset-form__row">
					<div className="reset-form__form-container">
						<div className="reset-form__form">
							<input 
								type="text" 
								className="reset-form__input input" 
								placeholder="Введите новый пароль" 
								{...passwordInput.bind} 
							/>
							<input 
								type="password" 
								className="reset-form__input input" 
								placeholder="Повторите пароль" 
								{...confirmPasswordInput.bind} />

							<Button 
								parentClass="reset-form" 
								handler={alertHandler}
							>
								Изменить пароль
							</Button>				
						</div>			
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResetForm