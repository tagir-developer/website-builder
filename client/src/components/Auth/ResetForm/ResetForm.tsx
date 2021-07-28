import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import SmallIconButton from '../../UI/SmallIconButton/SmallIconButton'
import './ResetForm.scss'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useCallback } from 'react'

interface IResetForm extends RouteComponentProps {
	parentClass: string
}

const ResetForm: React.FC<IResetForm> = ({ parentClass, history }) => {

	const resetFormClasses = useCreateClassName('reset-form', parentClass)

	const {loading, errors} = useTypedSelector(state => state.auth)
	const { passReset, authRemoveError } = useActions()

	const email = useInput('', authRemoveError, 'email', errors)

	const resetFormHandler = useCallback(() => {
		passReset(email.value)
		// eslint-disable-next-line
	}, [passReset])


	return (
		<div className={resetFormClasses}>
			<div className="reset-form__container">
				<div className="reset-form__row">
					<div className="reset-form__form-container">
						<div className="reset-form__form">
							<Input 
								parentClass="reset-form"
								type="email"
								placeholder="Электронная почта"
								isInvalid={errors.includes('email')}
								{...email.bind}
							>
								Укажите email для восстановления доступа:
							</Input>

							<Button 
								parentClass="reset-form" 
								handler={resetFormHandler}
								modClass={['big']}
								disabled={loading}
							>
								Отправить
							</Button>

							<div className="reset-form__bottom-container">
							<SmallIconButton 
								parentClass="reset-form"
								modClass={["enter-icon"]}
								handler={() => history.push('./login')}
							>
								Вход
							</SmallIconButton>
							<SmallIconButton 
								parentClass="reset-form"
								modClass={["register-icon"]}
								handler={() => history.push('./registration')}
							>
								Регистрация
							</SmallIconButton>
							</div>				
						</div>			
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(ResetForm)