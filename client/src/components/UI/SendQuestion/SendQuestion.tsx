import React, { useRef } from 'react'
import { MutableRefObject } from 'react'
import { useCallback } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useInput } from '../../../hooks/useInput.hook'
import { useUploadFiles } from '../../../hooks/useUploadFiles.hook'
import Button from '../Button/Button'
import FileUpload from '../FileUpload/FileUpload'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import './SendQuestion.scss'

interface ISendQuestion {
	parentClass: string
}

const SendQuestion: React.FC<ISendQuestion> = ({ parentClass }) => {

	const sendQuestionClasses = useCreateClassName('send-question', parentClass)

	const {loading, errors} = useTypedSelector(state => state.support)
	const { sendQuestion, supportRemoveError } = useActions()

	const email = useInput('', supportRemoveError, 'email', errors)
	const message = useInput('', supportRemoveError, 'message', errors)
	const upload = useUploadFiles('question-images')

	const sendForm = useCallback(() => {
		sendQuestion(email.value, message.value, upload.formData)
	}, [upload.formData, email.value, message.value, sendQuestion])

	return (
		<div className={sendQuestionClasses}>
			<div className="send-question__container">
				<div className="send-question__row">
					<div className="send-question__form-container">
						<div className="send-question__form">
							<Input
								parentClass="send-question"
								type="email"
								isInvalid={errors.includes('email')}
								{...email.bind}
							>
								Укажите email, на который мы вышлем ответ*:
							</Input>
							<Textarea
								parentClass="send-question"
								isInvalid={errors.includes('message')}
								{...message.bind}
							>
								Наберите сообщение*:
							</Textarea>

							<FileUpload 
								parentClass="send-question"
								multiple={true}
								{ ...upload.bind }
							/>

							<Button
								parentClass="send-question"
								handler={sendForm}
								modClass={['big']}
								disabled={loading}
							>
								Отправить
							</Button>


						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SendQuestion