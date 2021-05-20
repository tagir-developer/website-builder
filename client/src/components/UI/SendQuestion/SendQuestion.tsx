import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import SmallButton from '../SmallButton/SmallButton'
import SmallIconButton from '../SmallIconButton/SmallIconButton'
import './SendQuestion.scss'

interface ISendQuestion {
	parentClass: string
}

const SendQuestion: React.FC<ISendQuestion> = ({ parentClass }) => {

	const sendQuestionClasses = useCreateClassName('send-question', parentClass)

	const emailInput = useInput('')
	const passwordInput = useInput('')

	return (
		<div className={sendQuestionClasses}>
			<div className="send-question__container">
				<div className="send-question__row">
					<div className="send-question__form-container">
						<div className="send-question__form">
							<label 
								htmlFor="answer-mail" 
								className="send-question__input-label input-label"
							>Укажите email, на который мы вышлем ответ:
							</label>
							<input
								id="answer-mail"
								type="text"
								className="send-question__input input"
								placeholder=""
								{...emailInput.bind}
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
								/>

							<div className="send-question__download-file">
								<div className="send-question__show-downloaded-files">File name.jpg File name.jpg File name.jpg File name.jpg File name.jpg</div>
							<SmallButton
								parentClass="send-question"
								handler={() => console.log('Прикрепить файл нажата')}
							>
								Прикрепить файл
							</SmallButton>
							</div>

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