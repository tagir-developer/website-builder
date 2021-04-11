import React from 'react'
import './TopMenu.scss'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import HorizontalNav from '../HorizontalNav/HorizontalNav'
import Logo from '../Logo/Logo'
import AutosaveSwitcher from '../AutosaveSwitcher/AutosaveSwitcher'
import ActionButtons from '../ActionButtons/ActionButtons'
import ViewOnDevices from '../ViewOnDevices/ViewOnDevices'

interface ITopMenu {
	menuType?: string
}

const TopMenu: React.FC<ITopMenu> = ({ menuType='main' }) => {

	const topMenuClasses = (typeMenu: string): string => {
		if (typeMenu === 'main') return 'top-menu'
		if (typeMenu === 'back-to-main') return 'top-menu'
		if (typeMenu === 'auth') return 'top-menu'
		if (typeMenu === 'auth-project') return 'top-menu'
		if (typeMenu === 'edit') return 'top-menu top-menu_dark-theme'
		if (typeMenu === 'preview') return 'top-menu top-menu_dark-theme'
		return 'top-menu'
	}

	const setMenuChildren = (typeMenu: string): JSX.Element => {

		if (typeMenu === 'main') {
			return (
				<>
				<Logo parentClass="top-menu" />
				<div className="top-menu__devider"></div>
				<HorizontalNav 
					parentClass="top-menu"
					items={[
						{ title: 'Регистрация', link: '/', bold: false },
						{ title: 'Войти', link: '/', bold: false },
					]}
				/>
				</>
			)
		}

		if (typeMenu === 'back-to-main') {
			return (
				<>
				<Logo parentClass="top-menu" />
				<div className="top-menu__devider"></div>
				<BreadCrumbs 
					parentClass="top-menu" 
					items={[
						{ title: 'Вернуться на главную', link: '/' },
					]}
				/>
				</>
			)
		}

		if (typeMenu === 'auth') {
			return (
				<>
				<Logo parentClass="top-menu" />
				<div className="top-menu__devider"></div>
				<HorizontalNav 
					parentClass="top-menu"
					items={[
						{ title: 'Справка', link: '/', bold: false },
						{ title: 'Аккаунт', link: '/', bold: false },
						{ title: 'Выход', link: '/', bold: true },
					]}
				/>
				</>
			)
		}

		if (typeMenu === 'auth-project') {
			return (
				<>
				<Logo parentClass="top-menu" />
				<BreadCrumbs 
					parentClass="top-menu" 
					items={[
						{ title: 'Мои сайты', link: '/' },
					]}
				/>
				<div className="top-menu__devider"></div>
				<HorizontalNav 
					parentClass="top-menu"
					items={[
						{ title: 'Справка', link: '/', bold: false },
						{ title: 'Аккаунт', link: '/', bold: false },
						{ title: 'Выход', link: '/', bold: true },
					]}
				/>
				</>
			)
		}

		if (typeMenu === 'edit') {
			return (
				<>
				<Logo parentClass="top-menu" modClass={['dark-theme']} />
				<BreadCrumbs 
					parentClass="top-menu" 
					modClass={['dark-theme']}
					items={[
						{ title: 'Мои сайты', link: '/' },
						{ title: 'Список страниц', link: '/' },
					]}
				/>
				<AutosaveSwitcher parentClass="top-menu" />
				<ActionButtons parentClass="top-menu" />
				<HorizontalNav 
					parentClass="top-menu"
					modClass={['dark-theme']}
					items={[
						{ title: 'Опубликовать', link: '/', bold: true },
					]}
				/>
				</>
			)
		}

		if (typeMenu === 'preview') {
			return (
				<>
				<Logo parentClass="top-menu" modClass={['dark-theme']} />
				<BreadCrumbs 
					parentClass="top-menu" 
					modClass={['dark-theme']}
					items={[
						{ title: 'Вернуться к редактированию', link: '/' },
					]}
				/>
				<ViewOnDevices parentClass="top-menu" />
				</>
			)
		}

		return (<></>)

	}


	return (
		<div className={topMenuClasses(menuType)}>
			<div className="top-menu__container">
				<div className="top-menu__row">
					{setMenuChildren(menuType)}
				</div>
			</div>		
		</div>
	)
}

export default TopMenu