import React from 'react'
import './TopMenu.scss'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import HorizontalNav from '../HorizontalNav/HorizontalNav'
import Logo from '../Logo/Logo'
import AutosaveSwitcher from '../AutosaveSwitcher/AutosaveSwitcher'
import ActionButtons from '../ActionButtons/ActionButtons'
import ViewOnDevices from '../ViewOnDevices/ViewOnDevices'
import ViewOnDevicesMobile from '../ViewOnDevicesMobile/ViewOnDevicesMobile'
import MobileMenu from '../MobileMenu/MobileMenu'

interface ITopMenu {
	menuType?: 'main' | 'back-to-main' | 'go-back' | 'auth' | 'auth-project' | 'select-template' | 'edit' | 'preview'
}

const TopMenu: React.FC<ITopMenu> = ({ menuType = 'main' }) => {

	const topMenuClasses = (typeMenu: string): string => {
		if (typeMenu === 'main') return 'top-menu'
		if (typeMenu === 'back-to-main') return 'top-menu'
		if (typeMenu === 'auth') return 'top-menu'
		if (typeMenu === 'auth-project') return 'top-menu'
		if (typeMenu === 'select-template') return 'top-menu'
		if (typeMenu === 'edit') return 'top-menu top-menu_dark-theme top-menu_edit-page'
		if (typeMenu === 'preview') return 'top-menu top-menu_dark-theme'
		return 'top-menu'
	}

	const topMenuContainerClasses = (typeMenu: string): string => {
		if (typeMenu === 'edit') return 'top-menu__container top-menu__container_dark-theme'
		if (typeMenu === 'preview') return 'top-menu__container top-menu__container_dark-theme'
		return 'top-menu__container'
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
							{ title: 'Регистрация', link: '/registration', bold: false },
							{ title: 'Войти', link: '/login', bold: false },
						]}
					/>
					<MobileMenu
						items={[
							{ title: 'Регистрация', link: '/registration', bold: false },
							{ title: 'Войти', link: '/login', bold: false },
						]}
						parentClass="top-menu"
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
					<BreadCrumbs
						parentClass="top-menu"
						modClass={['mobile-version']}
						items={[
							{ title: 'На главную', link: '/' },
						]}
					/>
				</>
			)
		}

		if (typeMenu === 'go-back') {
			return (
				<>
					<Logo parentClass="top-menu" />
					<div className="top-menu__devider"></div>
					<BreadCrumbs
						parentClass="top-menu"
						items={[
							{ title: 'Назад', link: '/', goBack: true },
						]}
					/>
					<BreadCrumbs
						parentClass="top-menu"
						modClass={['mobile-version']}
						items={[
							{ title: 'Назад', link: '/', goBack: true },
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
							{ title: 'Справка', link: '/help', bold: false },
							{ title: 'Аккаунт', link: '/user-profile', bold: false },
							{ title: 'Выход', link: '/logout', bold: true },
						]}
					/>
					<MobileMenu
						items={[
							{ title: 'Справочная информация', link: '/help', bold: false },
							{ title: 'Настройки аккаунта', link: '/user-profile', bold: false },
							{ title: 'Выход', link: '/logout', bold: false },
						]}
						parentClass="top-menu"
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
					<BreadCrumbs
						parentClass="top-menu"
						modClass={['mobile-version']}
						items={[
							{ title: 'Мои сайты', link: '/' },
						]}
					/>
					<div className="top-menu__devider"></div>
					<HorizontalNav
						parentClass="top-menu"
						items={[
							{ title: 'Справка', link: '/help', bold: false },
							{ title: 'Аккаунт', link: '/user-profile', bold: false },
							{ title: 'Выход', link: '/logout', bold: true },
						]}
					/>
					<MobileMenu
						items={[
							{ title: 'Справочная информация', link: '/help', bold: false },
							{ title: 'Настройки аккаунта', link: '/user-profile', bold: false },
							{ title: 'Выход', link: '/logout', bold: false },
						]}
						parentClass="top-menu"
					/>
				</>
			)
		}

		if (typeMenu === 'select-template') {
			return (
				<>
					<Logo parentClass="top-menu" />
					<BreadCrumbs
						parentClass="top-menu"
						items={[
							{ title: 'Сайт', link: '/', goBack: true },
						]}
					/>
					<BreadCrumbs
						parentClass="top-menu"
						modClass={['mobile-version']}
						items={[
							{ title: 'Сайт', link: '/', goBack: true },
						]}
					/>
					<div className="top-menu__devider"></div>
					<HorizontalNav
						parentClass="top-menu"
						items={[
							{ title: 'Справка', link: '/help', bold: false },
							{ title: 'Аккаунт', link: '/user-profile', bold: false },
							{ title: 'Выход', link: '/logout', bold: true },
						]}
					/>
					<MobileMenu
						items={[
							{ title: 'Справочная информация', link: '/help', bold: false },
							{ title: 'Настройки аккаунта', link: '/user-profile', bold: false },
							{ title: 'Выход', link: '/logout', bold: false },
						]}
						parentClass="top-menu"
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
							{ title: 'Список страниц', link: '/', goBack: true },
						]}
					/>
					<BreadCrumbs
						parentClass="top-menu"
						modClass={['dark-theme', 'mobile-version']}
						items={[
							{ title: 'Сайт', link: '/', goBack: true },
						]}
					/>
					<div className="top-menu__devider"></div>
					<AutosaveSwitcher parentClass="top-menu" />
					<ActionButtons parentClass="top-menu" />
					<HorizontalNav
						parentClass="top-menu"
						modClass={['dark-theme']}
						items={[
							{ title: 'Опубликовать', link: '/', bold: true },
						]}
					/>
					<MobileMenu
						items={[
							{ title: 'Сохранить', link: '/', bold: false },
							{ title: 'Отменить действие', link: '/', bold: false },
							{ title: 'Предпросмотр', link: '/', bold: false },
							{ title: 'Опубликовать', link: '/', bold: false },
						]}
						parentClass="top-menu"
						modClass={['dark-theme']}
						autosaveCheker={true}
					/>
				</>
			)
		}

		if (typeMenu === 'preview') {
			return (
				<>
					<Logo parentClass="top-menu" modClass={['dark-theme', 'hide-on-small-devices']} />
					<BreadCrumbs
						parentClass="top-menu"
						modClass={['dark-theme']}
						items={[
							{ title: 'Вернуться к редактированию', link: '/', goBack: true },
						]}
					/>
					<BreadCrumbs
						parentClass="top-menu"
						modClass={['dark-theme', 'mobile-version']}
						items={[
							{ title: 'Назад', link: '/', goBack: true },
						]}
					/>
					<ViewOnDevices 
						parentClass="top-menu"
						deviceItems={[
							{title: 'Смартфон', value: 'mobile' },
							{title: 'Планшет', value: 'tablete' },
							{title: 'Компьютер', value: 'pc' }
						]} 
					/>
					<ViewOnDevicesMobile 
						parentClass="top-menu"
						deviceItems={[
							{title: 'Смартфон', value: 'mobile', iconClass: 'icon-mobile' },
							{title: 'Планшет', value: 'tablete', iconClass: 'icon-tablet' },
							{title: 'Компьютер', value: 'pc', iconClass: 'icon-pc' }
						]}
					/>
				</>
			)
		}

		return (<></>)

	}

	return (
		<div className={topMenuClasses(menuType)}>
			<div className="top-menu__shadow"></div>
			<div className={topMenuContainerClasses(menuType)}>
				<div className="top-menu__row">
					{setMenuChildren(menuType)}
				</div>
			</div>
		</div>
	)
}

export default TopMenu