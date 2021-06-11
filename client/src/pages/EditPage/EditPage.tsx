import React, { CSSProperties, Suspense } from 'react'
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
import BlockSelectionList from '../../components/UI/BlockSelectionList/BlockSelectionList'
import PageTitle from '../../components/UI/PageTitle/PageTitle'
import AddNewButton from '../../components/UI/AddNewButton/AddNewButton'
import EditBlockWrapper from '../../components/HOC/EditBlockWrapper/EditBlockWrapper'
// import Header1 from '../../components/UILIbrary/headers/Header1/Header1'
// import Header2 from '../../components/UILIbrary/headers/Header2/Header2'

interface IRouteProps {
	pageId: string
	name: string
}

interface IBlock {
	blockId: string
	styles: {
		[key: string]: CSSProperties
	}
	// component: JSX.Element
	component: string
}

interface IEditPage extends RouteComponentProps<IRouteProps> {

}


const EditPage: React.FC<IEditPage> = ({ match }) => {

	// *Здесь нужна проверка, есть ли такой роут в базе проектов, если нет, то выводим сообщение об ошибке или редиректим на главную

	const openLeftMenu = useCheck(false)

	const blocksListPopup = usePopup(false, 'blur')

	const isEmpty = false

	const blocksArray: Array<any> = [
		{
			path: 'headers/Header1/Header1',
			styles: {
				titleStyles: { fontSize: '26px', color: 'white' },
				buttonStyles: { fontSize: '18px', color: 'white' }
			}
		},
		{
			path: 'headers/Header2/Header2',
			styles: {
				titleStyles: { fontSize: '26px', color: 'white' },
			}
		}
	]


	return (
		<>
			<PopUp {...blocksListPopup.popupProps} withTitle="Список блоков" modClass={['block-select-list']}>
				<BlockSelectionList />
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

							{blocksArray.map((i, index) => {
								const BlockComponent = React.lazy(() => import('../../components/UILIbrary/' + i.path))
								return (
									<Suspense fallback={<div>Loading...</div>}>
										<EditBlockWrapper>
											<BlockComponent />
										</EditBlockWrapper>
									</Suspense>
								)
							})}



							{/* {blocksArray.map((i, index) => {
							const MyComponent = i.component
							return <MyComponent styles={i.styles} />
						})} */}

							{/* {isEmpty 
								? <PageTitle parentClass="edit-page" title="Пустой шаблон">
									Вы пока не создали ни одного блока. Добавьте свой первый блок на страницу.
								</PageTitle>
								: 
							} */}


							<AddNewButton
								parentClass="edit-page"
								handler={() => openLeftMenu.handler()} title="Добавить новый блок"
							/>

							{/* <Link to={'/' + match.params.name + '/' + match.params.pageId + '/preview'} >Предпросмотр</Link> */}

						</Backdrop>
					</div>
				</div>
				<Footer />
			</Backdrop>
		</>
	)
}

export default withRouter(EditPage)