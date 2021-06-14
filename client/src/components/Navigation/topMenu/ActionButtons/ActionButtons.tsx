import React from 'react'
import './ActionButtons.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'
import DarkRoundButton from './DarkRoundButton/DarkRoundButton'

interface IActionButtons {
	parentClass?: string
	modClass?: string[]
}

const ActionButtons: React.FC<IActionButtons> = ({ parentClass, modClass}) => {

	const actionButtonsClasses = useCreateClassName('action-buttons', parentClass, modClass)

	return (
		<div className={actionButtonsClasses}>
			<DarkRoundButton parentClass="action-buttons" modClass={['icon-undo']} title='Отменить действие' />
			<DarkRoundButton parentClass="action-buttons" modClass={['icon-save']} title='Сохранить изменения' />
			<DarkRoundButton parentClass="action-buttons" modClass={['icon-show']} title='Предпросмотр' />
		</div>
	)
}

export default ActionButtons