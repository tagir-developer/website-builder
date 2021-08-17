import React, { Suspense, useEffect } from 'react'
import './EditPage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import { RouteComponentProps, useHistory, useParams, withRouter } from 'react-router-dom'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'
import BlocksMenu from '../../components/Navigation/BlocksMenu/BlocksMenu'
import BlockSelectionList from '../../components/UI/BlockSelectionList/BlockSelectionList'
import AddNewButton from '../../components/UI/AddNewButton/AddNewButton'
import EditBlockWrapper from '../../components/HOC/EditBlockWrapper/EditBlockWrapper'
import LeftBar from '../../components/HOC/LeftBar/LeftBar'
import { useChooseBackdropProps } from '../../hooks/useChooseBackdropProps.hook'
import BlockConfigMenu from '../../components/UI/BlockConfigMenu/BlockConfigMenu'
import { useTypedSelector } from '../../hooks/reduxHooks'
import { IUrlParams } from '../../models/IUrlParams'
import styled, { ThemeProvider } from 'styled-components'
import { myTheme } from '../../components/UILIbrary/themes/themes'
import GlobalStylesWrapper from '../../components/HOC/GlobalStylesWrapper/GlobalStylesWrapper'

interface IRouteProps {
	pageId: string
	name: string
}

interface IEditPage extends RouteComponentProps<IRouteProps> {
}

const EditPage: React.FC<IEditPage> = ({ match }) => {

	// *Здесь нужна проверка, есть ли такой роут в базе проектов, если нет, то выводим сообщение об ошибке или редиректим на главную

	// const openLeftMenu = useCheck(false)
	const { pagesNames } = useTypedSelector(state => state.page)
	const { activeProject } = useTypedSelector(state => state.projects)
	const { name: projectUrl, pageId: pageUrl } = useParams<IUrlParams>()
	const history = useHistory()


	const openLeftMenu = usePopup(false, 'blur')
	const openBlockConfigs = usePopup(false, 'blur')
	const openBlockContent = usePopup(false, 'blur')

	const backdropProps = useChooseBackdropProps(openLeftMenu, openBlockConfigs, openBlockContent)

	const blocksListPopup = usePopup(false, 'blur')

	// const isEmpty = false  // Если нет ни одного блока

	const blocksArray: Array<any> = [
		{
			blockId: 'asdadasdassdfsdfd',
			path: 'headers/Header1/Header1',
			styles: {
				titleStyles: { fontSize: '26px', color: 'white' },
				buttonStyles: { fontSize: '18px', color: 'white' }
			}
		},
		{
			blockId: 'adadadadsasdasd',
			path: 'headers/Header2/Header2',
			styles: {
				titleStyles: { fontSize: '26px', color: 'white' },
			}
		}
	]

	useEffect(() => {
		if (!pagesNames.includes('/' + pageUrl)) history.push('/projects/' + projectUrl)
		// eslint-disable-next-line
	}, [])


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

						<LeftBar isOpen={openBlockConfigs.isOpen} modClass={['wide']} >
							<BlockConfigMenu type="Configs" title="Настройки блока" closeHandler={openBlockConfigs.closePopup} />
						</LeftBar>

						<LeftBar isOpen={openBlockContent.isOpen} modClass={['wide']} >
							<BlockConfigMenu type="Contents" title="Редактировать контент" closeHandler={openBlockContent.closePopup} />
						</LeftBar>


						<Backdrop
							{...backdropProps}
							withoutPadding={true}
						>

							<ThemeProvider theme={myTheme}>
								{blocksArray.map((i, index) => {
									const BlockComponent = React.lazy(() => import('../../components/UILIbrary/' + i.path))
									return (
										<Suspense key={index} fallback={<div>Загрузка...</div>}>
											<EditBlockWrapper
												openConfig={openBlockConfigs.openPopup}
												openContent={openBlockContent.openPopup}
											>
												<GlobalStylesWrapper>
													<BlockComponent />
												</GlobalStylesWrapper>
											</EditBlockWrapper>
										</Suspense>
									)
								})}
							</ThemeProvider>



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