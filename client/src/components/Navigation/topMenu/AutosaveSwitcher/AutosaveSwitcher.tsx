import React from 'react'
import './AutosaveSwitcher.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import Toggle from '../../../UI/Toggle/Toggle'
import { useCheck } from '../../../../hooks/useCheck.hook'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'

interface IAutosaveSwitcherProps {
	parentClass?: string
	modClass?: string[]
}

const AutosaveSwitcher: React.FC<IAutosaveSwitcherProps> = ({ parentClass }) => {

	const autosaveSwitcherClasses = useCreateClassName('autosave-switcher', parentClass)

	const {activePage} = useTypedSelector(state => state.page)
	const {switchPageAutosave} = useActions()

	return (
		<div className={autosaveSwitcherClasses}>
			<div className="autosave-switcher__title">Сохранять автоматически</div>
			<Toggle 
				parentClass="autosave-switcher"
				modClass={['dark-theme']} 
				name="autosave-toggle"
				value={activePage.autosavePage}
				handler={() => switchPageAutosave(!activePage.autosavePage)}
			/>
		</div>
	)
}

export default AutosaveSwitcher