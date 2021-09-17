import React, { useState } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useCheck } from '../../../hooks/useCheck.hook'
import { useInput } from '../../../hooks/useInput.hook'
import AlertMessage from '../../HOC/AlertMessage/AlertMessage'
import Button from '../Button/Button'
import Input from '../Input/Input'
import SmallIconButton from '../SmallIconButton/SmallIconButton'
import ToggleWithText from '../ToggleWithText/ToggleWithText'
import './FormProcessing.scss'

interface IFormProcessing {
	parentClass?: string
	closePopup: Function
}

const FormProcessing: React.FC<IFormProcessing> = ({ parentClass, closePopup }) => {

	const formProcessingClasses = useCreateClassName('form-processing', parentClass)

	const { errors } = useTypedSelector(state => state.alert)
	const { activeProject } = useTypedSelector(state => state.projects)
	const { customizeFormProcessing, alertRemoveError } = useActions()

	const email = useInput(activeProject.formProcessing.email, alertRemoveError, 'email', errors)
	const secondaryEmail = useInput(activeProject.formProcessing.secondaryEmail, alertRemoveError, 'secondaryEmail', errors)
	const letterSubject = useInput(activeProject.formProcessing.letterSubject, alertRemoveError, 'letterSubject', errors)
	const phoneNumber = useInput(activeProject.formProcessing.phoneNumber, alertRemoveError, 'phoneNumber', errors)

	const [showsecondaryEmail, setShowsecondaryEmail] = useState<boolean>(activeProject.formProcessing.secondaryEmail ? true : false)
	const phoneNumberToggle = useCheck(activeProject.formProcessing.phoneNumber ? true : false)

	const formHandler = () => {
		customizeFormProcessing(activeProject.id, email.value, letterSubject.value, phoneNumber.value, secondaryEmail.value)
	}

	return (
		<AlertMessage successFunc={closePopup} runWithoutDelay>
			<div className={formProcessingClasses}>
				<div className="form-processing__container">
					<div className="form-processing__row">
						<div className="form-processing__form-container">
							<div className="form-processing__form">

								<Input
									parentClass="form-processing"
									type="email"
									{...email.bind}
								>
									Укажите email, на который нужно отправлять данные из форм
								</Input>

								<div className="form-processing__add-btn-container">
									<SmallIconButton
										parentClass="form-processing"
										modClass={["add-icon"]}
										handler={() => setShowsecondaryEmail(prev => !prev)}
									>
										{showsecondaryEmail ? 'Удалить email ' : 'Добавить email'}
									</SmallIconButton>
								</div>

								{showsecondaryEmail
									? <Input
										parentClass="form-processing"
										type="email"
										{...secondaryEmail.bind}
									>
										Дополнительный адрес (если адресов несколько, разделите их запятой)
									</Input>
									: null}

								<Input
									parentClass="form-processing"
									type="text"
									{...letterSubject.bind}
								>
									Напишите тему, которая будет указана в письме
								</Input>

								<ToggleWithText
									name="form-processing-text-toggle"
									parentClass="form-processing"
									{...phoneNumberToggle.bind}
								>
									Включить СМС-уведомления
								</ToggleWithText>

								{phoneNumberToggle.value
									? <Input
										parentClass="form-processing"
										type="text"
										placeholder="Телефонный номер"
										{...phoneNumber.bind}
									/>
									: null
								}

								<Button
									parentClass="form-processing"
									handler={formHandler}
									modClass={['big']}
								>
									Сохранить
								</Button>

							</div>
						</div>
					</div>
				</div>
			</div>
		</AlertMessage>
	)
}

export default FormProcessing