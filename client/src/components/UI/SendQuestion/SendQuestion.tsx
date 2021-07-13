import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import FileUpload from '../FileUpload/FileUpload'
import Input from '../Input/Input'
import SmallButton from '../SmallButton/SmallButton'
import Textarea from '../Textarea/Textarea'
import './SendQuestion.scss'

interface ISendQuestion {
	parentClass: string
}

const SendQuestion: React.FC<ISendQuestion> = ({ parentClass }) => {

	const sendQuestionClasses = useCreateClassName('send-question', parentClass)

	// const {loading, errors} = useTypedSelector(state => state.support)
	// const { supportRemoveError } = useActions()

	const email = useInput('')
	const message = useInput('')

	return (
		<div className={sendQuestionClasses}>
			<div className="send-question__container">
				<div className="send-question__row">
					<div className="send-question__form-container">
						<div className="send-question__form">
							<Input
								parentClass="send-question"
								type="email"
								// isInvalid={errors.includes('email')}
								{...email.bind}
							>
								Укажите email, на который мы вышлем ответ*:
							</Input>
							<Textarea
								parentClass="send-question"
								// isInvalid={errors.includes('email')}
								{...message.bind}
							>
								Наберите сообщение*:
							</Textarea>
							{/* <input type="file" /> */}

							{/* <label 
								htmlFor="answer-mail" 
								className="send-question__input-label input-label"
							>Укажите email, на который мы вышлем ответ:
							</label>
							<input
								id="answer-mail"
								type="text"
								className="send-question__input input"
								placeholder=""
								{...email.bind}
							/>
							<label 
								htmlFor="question-textarea"
								className="send-question__input-label input-label"
							>
								Наберите сообщение:
							</label>
							<textarea
								id="question-textarea"
								className="send-question__textarea textarea"
								placeholder=""
								/> */}

								<FileUpload parentClass="send-question" />

							{/* <div className="send-question__download-file">
								<div className="send-question__show-downloaded-files">File name.jpg File name.jpg File name.jpg File name.jpg File name.jpg</div>
								<SmallButton
									parentClass="send-question"
									handler={() => console.log('Прикрепить файл нажата')}
								>
									Прикрепить файл
								</SmallButton>
							</div> */}

							<Button
								parentClass="send-question"
								handler={() => console.log('Btn click')}
								modClass={['big']}
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