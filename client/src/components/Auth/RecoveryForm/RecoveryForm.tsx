import React from 'react'
import { useCallback } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import './RecoveryForm.scss'

interface IRecoveryForm {
	parentClass: string
}

const RecoveryForm: React.FC<IRecoveryForm> = ({ parentClass }) => {

	const RecoveryFormClasses = useCreateClassName('recovery-form', parentClass)

	const { loading, errors, resetData } = useTypedSelector(state => state.auth)
	const { authRemoveError, changePassword } = useActions()

	const password = useInput('', authRemoveError, 'email', errors)
	const passwordConfirm = useInput('', authRemoveError, 'email', errors)

	const sendForm = useCallback(() => {
		changePassword(password.value, passwordConfirm.value, resetData.userId, resetData.token)
	}, [resetData, changePassword])

	return (
		<div className={RecoveryFormClasses}>
			<div className="recovery-form__container">
				<div className="recovery-form__row">
					<div className="recovery-form__form-container">
						<div className="recovery-form__form">
							<Input
								parentClass="recovery-form"
								type="password"
								placeholder="Введите новый пароль*"
								isInvalid={errors.includes('password')}
								{...password.bind}
							/>
							<Input
								parentClass="recovery-form"
								type="password"
								placeholder="Повторите пароль*"
								isInvalid={errors.includes('passwordConfirm')}
								{...passwordConfirm.bind}
							/>
							<Button
								parentClass="recovery-form"
								handler={sendForm}
								disabled={loading}
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

export default RecoveryForm