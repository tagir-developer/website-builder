import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './AddNewButton.scss'

interface IAddNewButton {
	parentClass: string
	modClass?: string[]
	handler: (param: any) => any
	title?: string
}

const AddNewButton: React.FC<IAddNewButton> = ({ parentClass, modClass, handler, title }) => {

	const addNewButtonClasses = useCreateClassName('add-new-button', parentClass, modClass)

	return (
		<div className={addNewButtonClasses} onClick={handler}>
			<div className="add-new-button__round-shape"></div>
			<div className="add-new-button__text" onClick={handler}>{title}</div>
		</div>
	)
}

export default AddNewButton