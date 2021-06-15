import React, { Suspense } from 'react'
import './EditPage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'
import BlocksMenu from '../../components/Navigation/BlocksMenu/BlocksMenu'
import BlockSelectionList from '../../components/UI/BlockSelectionList/BlockSelectionList'
import AddNewButton from '../../components/UI/AddNewButton/AddNewButton'
import EditBlockWrapper from '../../components/HOC/EditBlockWrapper/EditBlockWrapper'
import LeftBar from '../../components/HOC/LeftBar/LeftBar'
import { useChooseBackdropProps } from '../../hooks/useChooseBackdropProps.hook'
import TitleWithCloseBtn from '../../components/UI/TitleWithCloseBtn/TitleWithCloseBtn'
import BlockConfigMenu from '../../components/UI/BlockConfigMenu/BlockConfigMenu'

interface IRouteProps {
	pageId: string
	name: string
}


interface IEditPage extends RouteComponentProps<IRouteProps> {
}


const EditPage: React.FC<IEditPage> = ({ match }) => {

	// *Здесь нужна проверка, есть ли такой роут в базе проектов, если нет, то выводим сообщение об ошибке или редиректим на главную

	// const openLeftMenu = useCheck(false)

	const openLeftMenu = usePopup(false, 'blur')
	const openBlockConfigs = usePopup(false, 'blur')
	const openBlockContent = usePopup(false, 'blur')

	const backdropProps = useChooseBackdropProps(openLeftMenu, openBlockConfigs, openBlockContent)

	const blocksListPopup = usePopup(false, 'blur')

	// const isEmpty = false  // Если нет ни одного блока

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

						<LeftBar isOpen={openLeftMenu.isOpen}>
							<BlocksMenu
								header={{
									title: 'Библиотека блоков',
									closeHandler: () => openLeftMenu.closePopup()
								}}
								popup={{
									popupClosed: !blocksListPopup.isOpen,
									switchPopup: blocksListPopup.handler
								}}
							/>
						</LeftBar>

						<LeftBar isOpen={openBlockConfigs.isOpen}>
							<BlockConfigMenu closeHandler={openBlockConfigs.closePopup} />
						</LeftBar>

						<LeftBar isOpen={openBlockContent.isOpen}>
							<TitleWithCloseBtn title="Редактировать контент" closeHandler={openBlockContent.closePopup} />
						</LeftBar>


						<Backdrop
							{...backdropProps}
							withoutPadding={true}
						>

							{blocksArray.map((i, index) => {
								const BlockComponent = React.lazy(() => import('../../components/UILIbrary/' + i.path))
								return (
									<Suspense key={index} fallback={<div>Загрузка...</div>}>
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

							<AddNewButton
								parentClass="edit-page"
								handler={openBlockConfigs.openPopup} title="Настройки блока"
							/>

							<AddNewButton
								parentClass="edit-page"
								handler={openBlockContent.openPopup} title="Содержимое блока"
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