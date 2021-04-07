import React from 'react'
import './AutosaveSwitcher.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import Toggle from '../../../UI/Toggle/Toggle'

interface IAutosaveSwitcherProps {
	parentClass?: string
	modClass?: string[]
}

const AutosaveSwitcher: React.FC<IAutosaveSwitcherProps> = ({ parentClass }) => {

	const autosaveSwitcherClasses = useCreateClassName('autosave-switcher', parentClass)

	return (
		<div className={autosaveSwitcherClasses}>
			<div className="autosave-switcher__title">Сохранять автоматически</div>
			<Toggle name="autosave-toggle" parentClass="autosave-switcher" modClass={['dark-theme']} />
		</div>
	)
}

export default AutosaveSwitcher