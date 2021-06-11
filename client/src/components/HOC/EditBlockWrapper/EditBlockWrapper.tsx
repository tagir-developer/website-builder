import React from 'react'
import './EditBlockWrapper.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import BlockActionButtons from '../../UI/BlockActionButtons/BlockActionButtons'

interface IEditBlockWrapper {
	parentClass?: string
	modClass?: string[]
}

const EditBlockWrapper: React.FC<IEditBlockWrapper> = ({children, parentClass, modClass }) => {

	const blockWrapperClasses = useCreateClassName("edit-block-wrapper", parentClass, modClass)

	const hightlightBlock = (event: React.MouseEvent<HTMLDivElement>): void => {

	}

	return (
		<div className={blockWrapperClasses} onMouseOver={e => hightlightBlock(e)}>
			<div className="edit-block-wrapper__test"></div>
			<div className="edit-block-wrapper__green-light"></div>

			{/* <BlockActionButtons parentClass="edit-block-wrapper" /> // ! Надо реализовать */}

			{/* <BlockMove parentClass="edit-block-wrapper" /> */}
			{children}
		</div>
	)
}

export default EditBlockWrapper