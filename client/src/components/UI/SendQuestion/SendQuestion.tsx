import React from 'react'
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

	const {loading} = useTypedSelector(state => state.support)
	const { errors } = useTypedSelector(state => state.alert)
	const { sendQuestion, alertRemoveError } = useActions()

	const email = useInput('', alertRemoveError, 'email', errors)
	const message = useInput('', alertRemoveError, 'message', errors)
	const upload = useUploadFiles('question-images')

	const sendForm = () => sendQuestion(email.value, message.value, upload.formData)

	return (
		<div className={sendQuestionClasses}>
			<div className="send-question__container">
				<div className="send-question__row">
					<div className="send-question__form-container">
						<div className="send-question__form">
							<Input
								parentClass="send-question"
								type="email"
								{...email.bind}
							>
								Укажите email, на который мы вышлем ответ*:
							</Input>
							<Textarea
								parentClass="send-question"
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