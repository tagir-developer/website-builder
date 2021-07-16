import React, { useCallback } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import './SendComplaint.scss'

interface ISendComplaint {
	parentClass: string
}

const SendComplaint: React.FC<ISendComplaint> = ({ parentClass }) => {

	const sendComplaintClasses = useCreateClassName('send-complaint', parentClass)

	const { loading, errors } = useTypedSelector(state => state.support)
	const { sendComplaint, supportRemoveError } = useActions()

	const email = useInput('', supportRemoveError, 'email', errors)
	const message = useInput('', supportRemoveError, 'message', errors)

	const sendForm = useCallback(() => {
		sendComplaint(email.value, message.value)
	}, [email.value, message.value, sendComplaint])

	return (
		<div className={sendComplaintClasses}>
			<div className="send-complaint__container">
				<div className="send-complaint__row">
					<div className="send-complaint__form-container">
						<div className="send-complaint__form">
							<Input
								parentClass="send-complaint"
								type="email"
								isInvalid={errors.includes('email')}
								{...email.bind}
							>
								Укажите email, на который мы вышлем ответ*:
							</Input>
							<Textarea
								parentClass="send-complaint"
								isInvalid={errors.includes('message')}
								{...message.bind}
							>
								Наберите сообщение*:
							</Textarea>

							<Button
								parentClass="send-complaint"
								handler={sendForm}
								modClass={['big']}
								disabled={loading}
							>
								Отправить жалобу
							</Button>


						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SendComplaint