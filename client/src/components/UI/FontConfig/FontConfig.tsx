import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import Select from '../Select/Select'
import './FontConfig.scss'

interface IFontConfig {
	parentClass?: string
	handler: any
}

const FontConfig: React.FC<IFontConfig> = ({ parentClass, handler }) => {

	const fontConfigClasses = useCreateClassName('font-config', parentClass)

	// const projectName = useInput('')
	// const urlName = useInput('')

	return (
		<div className={fontConfigClasses}>
			<div className="font-config__container">
				<div className="font-config__row">
					<div className="font-config__form-container">
						<div className="font-config__form">

							<div className="font-config__annotation">
								Выберите наименование и размер шрифта, который будет использоваться на сайте
							</div>

							<Select 
								parentClass="font-config"
								options={['Roboto', 'Sans Serif', 'Helvetica']}
							>
								Шрифт
							</Select>
							<Select 
								parentClass="font-config"
								options={['12px', '14px', '16px', '18px']}
							>
								Размер текста
							</Select>



							<div className="font-config__font-preview">
								<div className="font-config__font-preview-label">Предпросмотр</div>
								<h1 
									className="font-config__font-preview-h1"
									// style={{}} Здесь будут стили в зависимости от выбранного шрифта
								>
									Roboto
								</h1>
								<p 
									className="font-config__font-preview-p"
									// style={{}} Здесь будут стили в зависимости от выбранного шрифта
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>

							

							{/* <label
								htmlFor="font-config-site-name"
								className="font-config__input-label input-label"
							>Название страницы
							</label>
							<input
								id="font-config-site-name"
								type="text"
								className="font-config__input input"
								{...projectName.bind}
							/> */}

							<Button
								parentClass="font-config"
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

export default FontConfig