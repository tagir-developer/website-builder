import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
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
							<input 
								type="text" 
								className="send-question__input input" 
								placeholder="" 
								{...emailInput.bind} 
							/>
							<input 
								type="password" 
								className="send-question__input input" 
								placeholder="" 
								{...passwordInput.bind} />

							<Button 
								parentClass="send-question" 
								handler={() => console.log('Btn click')}
								modClass={['big']}
							>
								Отправить
							</Button>

							<div className="send-question__bottom-container">
							<SmallIconButton 
								parentClass="send-question"
								modClass={["register-icon"]}
								handler={() => console.log('Прикрепить файл нажата')}
							>
								Прикрепить файл
							</SmallIconButton>
							</div>				
						</div>			
					</div>
				</div>
			</div>
		</div>
	)
}

export default SendQuestion