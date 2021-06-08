import React, { useState } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useCheck } from '../../../hooks/useCheck.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import SmallIconButton from '../SmallIconButton/SmallIconButton'
import ToggleWithText from '../ToggleWithText/ToggleWithText'
import './FormProcessing.scss'

interface IFormProcessing {
	parentClass?: string
	handler: any
}

const FormProcessing: React.FC<IFormProcessing> = ({ parentClass, handler }) => {

	const formProcessingClasses = useCreateClassName('form-processing', parentClass)

	const [showAdditionalEmail, setShowAdditionalEmail] = useState<boolean>(false)

	const email = useInput('')
	const additionalEmail = useInput('')
	const emailTheme = useInput('')
	const phone = useInput('')

	const phoneToggle = useCheck(false)

	return (
		<div className={formProcessingClasses}>
			<div className="form-processing__container">
				<div className="form-processing__row">
					<div className="form-processing__form-container">
						<div className="form-processing__form">
							<label
								htmlFor="form-processing-site-name"
								className="form-processing__input-label input-label"
							>Укажите email, на который нужно отправлять данные из форм
							</label>
							<input
								id="form-processing-site-name"
								type="email"
								className="form-processing__input input"
								{...email.bind}
							/>

							<div className="form-processing__add-btn-container">
								<SmallIconButton
									parentClass="form-processing"
									modClass={["add-icon"]}
									handler={() => setShowAdditionalEmail(prev => !prev)}
								>
									{showAdditionalEmail ? 'Удалить email ' : 'Добавить email'}
								</SmallIconButton>
							</div>

							{showAdditionalEmail
								? <>
									<label
										htmlFor="form-processing-project-name"
										className="form-processing__input-label input-label"
									>
										Дополнительный адрес (если адресов несколько, разделите их запятой)
									</label>
									<input
										id="form-processing-project-name"
										type="email"
										className="form-processing__input input"
										{...additionalEmail.bind}
									/>
								</>
								: null}

							<label
								htmlFor="form-processing-site-name"
								className="form-processing__input-label input-label"
							>
								Напишите тему, которая будет указана в письме
							</label>
							<input
								id="form-processing-site-name"
								type="text"
								className="form-processing__input input"
								{...emailTheme.bind}
							/>

							<ToggleWithText
								name="form-processing-text-toggle"
								parentClass="form-processing"
								{...phoneToggle.bind}
							>
								Включить СМС-уведомления
							</ToggleWithText>

							{ phoneToggle.value
								? <input
									type="text"
									className="form-processing__input input"
									placeholder="Телефонный номер"
									{...phone.bind}
								  />
								  : null
						    }



							<Button
								parentClass="form-processing"
								handler={handler}
								modClass={['big']}
							>
								Сохранить
							</Button>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormProcessing