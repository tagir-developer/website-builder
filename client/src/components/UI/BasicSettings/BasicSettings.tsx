import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import Button from '../Button/Button'
import './BasicSettings.scss'

interface IBasicSettings {
	parentClass?: string
	handler: any
}

const BasicSettings: React.FC<IBasicSettings> = ({ parentClass, handler }) => {

	const basicSettingsClasses = useCreateClassName('basic-settings', parentClass)


	return (
		<div className={basicSettingsClasses}>
			<div className="basic-settings__container">
				<div className="basic-settings__row">
					<div className="basic-settings__form-container">
						<div className="basic-settings__form">

							<label
								htmlFor="basic-settings-textarea"
								className="basic-settings__input-label input-label"
							>
								Код счетчиков аналитических систем
							</label>
							<textarea
								id="basic-settings-textarea"
								className="basic-settings__textarea textarea"
							/>

							<Button
								parentClass="basic-settings"
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

export default BasicSettings