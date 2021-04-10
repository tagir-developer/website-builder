import React from 'react'
import './TopMenu.scss'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import HorizontalNav from '../HorizontalNav/HorizontalNav'
import Logo from '../Logo/Logo'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'
import AutosaveSwitcher from '../AutosaveSwitcher/AutosaveSwitcher'
import ActionButtons from '../ActionButtons/ActionButtons'
import ViewOnDevices from '../ViewOnDevices/ViewOnDevices'

interface ITopMenu {
	menuType?: string
}

const TopMenu: React.FC<ITopMenu> = ({ menuType }) => {


	const topMenuClasses = useCreateClassName('top-menu', null, ['dark-theme'])
	// const topMenuClasses = useCreateClassName('top-menu')

	return (
		<div className={topMenuClasses}>
			<div className="top-menu__container">
				<div className="top-menu__row">

					<Logo parentClass="top-menu" modClass={['dark-theme']} />
					{/* <Logo parentClass="top-menu" /> */}

					<BreadCrumbs parentClass="top-menu" modClass={['dark-theme']} />
					{/* <BreadCrumbs parentClass="top-menu" /> */}

					<AutosaveSwitcher parentClass="top-menu" />

					{/* <ActionButtons parentClass="top-menu" />

					<HorizontalNav parentClass="top-menu" modClass={['dark-theme']} /> */}

					<ViewOnDevices parentClass="top-menu" />

				</div>
			</div>		
		</div>
	)
}

export default TopMenu