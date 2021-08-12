import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { useInput } from '../../../hooks/useInput.hook'
import AlertMessage from '../../HOC/AlertMessage/AlertMessage'
import Button from '../Button/Button'
import Textarea from '../Textarea/Textarea'
import './BasicSettings.scss'

interface IBasicSettings {
	parentClass?: string
	closePopup: Function
}

const BasicSettings: React.FC<IBasicSettings> = ({ parentClass, closePopup }) => {

	const basicSettingsClasses = useCreateClassName('basic-settings', parentClass)

	const {errors} = useTypedSelector(state => state.alert)
	const {activeProject} = useTypedSelector(state => state.projects)
	const {addProjectScripts, alertRemoveError} = useActions()

	const scripts = useInput(activeProject.scripts, alertRemoveError, 'scripts', errors)

	const setProjectScripts = () => {
		addProjectScripts(activeProject.id, scripts.value)
	}

	return (
		<AlertMessage successFunc={closePopup} runWithoutDelay>
			<div className={basicSettingsClasses}>
				<div className="basic-settings__container">
					<div className="basic-settings__row">
						<div className="basic-settings__form-container">
							<div className="basic-settings__form">
								<Textarea
									parentClass="basic-settings"
									{...scripts.bind}
								>
									Код счетчиков аналитических систем
								</Textarea>

								<Button
									parentClass="basic-settings"
									handler={setProjectScripts}
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

export default BasicSettings