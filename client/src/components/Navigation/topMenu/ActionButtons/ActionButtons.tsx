import React from 'react'
import './ActionButtons.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'
import DarkRoundButton from './DarkRoundButton/DarkRoundButton'
import { useActions } from '../../../../hooks/reduxHooks'
import { useHistory, useLocation } from 'react-router-dom'

interface IActionButtons {
	parentClass?: string
	modClass?: string[]
}

const ActionButtons: React.FC<IActionButtons> = ({ parentClass, modClass}) => {

	const actionButtonsClasses = useCreateClassName('action-buttons', parentClass, modClass)
	const {blockUndoChange, saveBlocksInDB} = useActions()
	const history = useHistory()
	const location = useLocation()

	const openPagePreview = () => {
		history.push(location.pathname + '/preview')
	}

	return (
		<div className={actionButtonsClasses}>
			<DarkRoundButton 
				parentClass="action-buttons" 
				modClass={['icon-undo']} 
				title='Отменить действие'
				handler={blockUndoChange}
			/>
			<DarkRoundButton 
				parentClass="action-buttons" 
				modClass={['icon-save']} 
				title='Сохранить изменения'
				handler={() => saveBlocksInDB(true)}
			/>
			<DarkRoundButton 
				parentClass="action-buttons" 
				modClass={['icon-show']} 
				title='Предпросмотр' 
				handler={openPagePreview}
			/>
		</div>
	)
}

export default ActionButtons