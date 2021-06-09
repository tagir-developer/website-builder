import React from 'react'
import './EditPage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'
import { useCheck } from '../../hooks/useCheck.hook'
import BlocksMenu from '../../components/Navigation/BlocksMenu/BlocksMenu'
import { CSSTransition } from 'react-transition-group'
import SecondaryButton from '../../components/UI/SecondaryButton/SecondaryButton'

interface IRouteProps {
	pageId: string
	name: string
}

interface IEditPage extends RouteComponentProps<IRouteProps> {

}

const EditPage: React.FC<IEditPage> = ({ match }) => {

	// *Здесь нужна проверка, есть ли такой роут в базе проектов, если нет, то выводим сообщение об ошибке или редиректим на главную

	const openLeftMenu = useCheck(false)

	const blocksListPopup = usePopup(false, 'blur')


	return (
		<>
			<PopUp {...blocksListPopup.popupProps} withTitle="Список блоков">
				<BlocksMenu />
			</PopUp>

			<Backdrop {...blocksListPopup.backdropProps}>

				<TopMenu menuType="edit" />

				<div className="content-area">
					<div className="edit-page">

						<CSSTransition
							in={openLeftMenu.value}
							timeout={400}
							classNames="edit-page__blocks-menu-wrapper_show"
							mountOnEnter
							unmountOnExit
						>
							<div className="edit-page__blocks-menu-wrapper">
								<BlocksMenu
									parentClass="edit-page"
									header={{
										title: 'Библиотека блоков',
										closeHandler: () => openLeftMenu.setNewValue(false)
									}}
									popup={{
										popupClosed: !blocksListPopup.isOpen,
										switchPopup: blocksListPopup.handler
									}}
								/>
							</div>
						</CSSTransition>

						<Backdrop
							isOpen={openLeftMenu.value}
							handler={() => openLeftMenu.setNewValue(false)}
							type="blur"
							withoutPadding={true}
						>

							<h1 style={{ textAlign: 'center' }}>Редактор страницы</h1>

							<SecondaryButton parentClass="edit-page" handler={() => openLeftMenu.handler()}> Открыть/скрыть меню</SecondaryButton>

							{/* <h1>Редактор страницы</h1>
							<h2>{match.params.pageId}</h2>
							<Link to={'/' + match.params.name + '/' + match.params.pageId + '/preview'} >Предпросмотр</Link> */}
						</Backdrop>
					</div>
				</div>
				<Footer />
			</Backdrop>
		</>
	)
}

export default withRouter(EditPage)