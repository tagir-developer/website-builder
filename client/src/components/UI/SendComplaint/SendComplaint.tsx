import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import './SendComplaint.scss'

interface ISendComplaint {
	parentClass: string
}

const SendComplaint: React.FC<ISendComplaint> = ({ parentClass }) => {

	const sendComplaintClasses = useCreateClassName('send-complaint', parentClass)

	const emailInput = useInput('')

	return (
		<div className={sendComplaintClasses}>
			<div className="send-complaint__container">
				<div className="send-complaint__row">
					<div className="send-complaint__form-container">
						<div className="send-complaint__form">
							<label 
								htmlFor="answer-mail" 
								className="send-complaint__input-label input-label"
							>Укажите email, на который мы вышлем ответ:
							</label>
							<input
								id="answer-mail"
								type="text"
								className="send-complaint__input input"
								{...emailInput.bind}
							/>
							<label 
								htmlFor="question-textarea"
								className="send-complaint__input-label input-label"
							>
								Наберите сообщение:
							</label>
							<textarea
								id="question-textarea"
								className="send-complaint__textarea textarea"
							/>

							<Button
								parentClass="send-complaint"
								handler={() => console.log('Btn click')}
								modClass={['big']}
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