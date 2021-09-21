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
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import { IUrlParams } from '../../models/IUrlParams'
import styled, { ThemeProvider } from 'styled-components'
import { myTheme } from '../../components/UILIbrary/themes/themes'
import GlobalStylesWrapper from '../../components/HOC/GlobalStylesWrapper/GlobalStylesWrapper'
import PageTitle from '../../components/UI/PageTitle/PageTitle'
import AlertMessage from '../../components/HOC/AlertMessage/AlertMessage'
import SecondaryButton from '../../components/UI/SecondaryButton/SecondaryButton'

interface IRouteProps {
	pageId: string
	name: string
}

interface IEditPage extends RouteComponentProps<IRouteProps> {
}

const EditPage: React.FC<IEditPage> = ({ match }) => {

	const { pagesNames, activePage, previousPath } = useTypedSelector(state => state.page)
	const { activeProject } = useTypedSelector(state => state.projects)
	const { pageBlocks, loading, changeHistory } = useTypedSelector(state => state.block)
	const { getPageBlocks, setPreviousPath, saveBlocksInDB } = useActions()
	const { name: projectUrl, pageId: pageUrl } = useParams<IUrlParams>()
	const history = useHistory()

	const openLeftMenu = usePopup(false, 'blur')
	const openBlockConfigs = usePopup(false, 'blur')
	const openBlockContent = usePopup(false, 'blur')
	const backdropProps = useChooseBackdropProps(openLeftMenu, openBlockConfigs, openBlockContent)
	const blocksListPopup = usePopup(false, 'blur')

	useEffect(() => {
		if (!pagesNames.includes('/' + pageUrl)) history.push('/projects/' + projectUrl)
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		if (previousPath !== 'preview') {
			getPageBlocks(activePage.id)
		}
		setPreviousPath('')
		// eslint-disable-next-line
	}, [])

	const saveBlocksInTemplate = () => {
		const templateId = '6149d4b2cc05f506c8ac0248'
		saveBlocksInDB(true, templateId)
	}

	return (
		<>
		<AlertMessage>
			<PopUp {...blocksListPopup.popupProps} withTitle="Список блоков" modClass={['block-select-list']}>
				<BlockSelectionList
					closePopups={() => {
						openLeftMenu.closePopup()
						blocksListPopup.closePopup()
					}}
				/>
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
							<BlockConfigMenu 
								type="Configs" 
								title="Настройки блока" 
								closeHandler={openBlockConfigs.closePopup} 
							/>
						</LeftBar>

						<LeftBar isOpen={openBlockContent.isOpen} modClass={['wide']} >
							<BlockConfigMenu 
								type="Contents" 
								title="Редактировать контент" 
								closeHandler={openBlockContent.closePopup} 
							/>
						</LeftBar>

						<Backdrop
							{...backdropProps}
							withoutPadding={true}
						>

							{loading
								? null
								: !!pageBlocks.length
									? <ThemeProvider theme={myTheme}>
										{pageBlocks.map((i, index) => {
											const BlockComponent = React.lazy(() => import('../../components/UILIbrary/' + i.blockPath))
											return (
												<Suspense key={index} fallback={<div>Загрузка...</div>}>
													<EditBlockWrapper
														blockId={i.blockId}
														openConfig={
															openBlockConfigs.openPopup
														}
														openContent={
															openBlockContent.openPopup
														}
														blockIsHidden={i.blockIsHidden}
													>
														<GlobalStylesWrapper>
															<BlockComponent
																blockConfigs={i.blockConfigs}
																blockContent={i.blockContent}
																blockIsHidden={i.blockIsHidden}
																projectId={activeProject.id}
															/>
														</GlobalStylesWrapper>
													</EditBlockWrapper>
												</Suspense>
											)
										})}
									</ThemeProvider>
									: <PageTitle parentClass="edit-page" title="Пустой шаблон">
										Вы пока не создали ни одного блока. Добавьте свой первый блок на страницу.
									</PageTitle>
							}

							<AddNewButton
								parentClass="edit-page"
								handler={() => openLeftMenu.handler()} title="Добавить новый блок"
							/>

							<SecondaryButton
								parentClass="edit-page"
								handler={saveBlocksInTemplate}
							>
								Сохранить изменения в шаблоне
							</SecondaryButton>

						</Backdrop>

					</div>
				</div>
				<Footer />
			</Backdrop>
			</AlertMessage>
		</>
	)
}

export default withRouter(EditPage)