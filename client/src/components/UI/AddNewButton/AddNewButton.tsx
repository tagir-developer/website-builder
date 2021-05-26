import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './AddNewButton.scss'

interface IAddNewButton {
	parentClass: string
	modClass?: string[]
	handler: (param: any) => any
}

const AddNewButton: React.FC<IAddNewButton> = ({ parentClass, modClass, handler }) => {

	const addNewButtonClasses = useCreateClassName('add-new-button', parentClass, modClass)

	return (
		<div className={addNewButtonClasses} onClick={handler}>
			<div className="add-new-button__round-shape"></div>
			<div className="add-new-button__text" onClick={handler}>Создать новый сайт</div>
		</div>
	)
}

export default AddNewButton