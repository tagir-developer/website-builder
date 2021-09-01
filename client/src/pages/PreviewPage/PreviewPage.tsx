import React, { Suspense, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStylesWrapper from '../../components/HOC/GlobalStylesWrapper/GlobalStylesWrapper'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import PageTitle from '../../components/UI/PageTitle/PageTitle'
import { ChangeWindowSizeWrapper } from '../../components/UILIbrary/commonStyledComponents/ChangeWindowSizeWrapper/ChangeWindowSizeWrapper'
import { myTheme } from '../../components/UILIbrary/themes/themes'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'

const PreviewPage: React.FC = () => {

	const { activePage, devicePreview } = useTypedSelector(state => state.page)
	const { pageBlocks, loading } = useTypedSelector(state => state.block)
	const { getPageBlocks } = useActions()

	useEffect(() => {
		getPageBlocks(activePage.id)
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<TopMenu menuType="preview" />
			<div className="content-area">
				<div className="edit-page">


					{loading
						? null
						: !!pageBlocks.length
							? <ThemeProvider theme={myTheme}>
								{pageBlocks.map((i, index) => {
									const BlockComponent = React.lazy(() => import('../../components/UILIbrary/' + i.blockPath))
									return (
										<Suspense key={index} fallback={<div>Загрузка...</div>}>
											<ChangeWindowSizeWrapper
												deviceType={devicePreview}
											>
												<GlobalStylesWrapper>
													<BlockComponent
														blockConfigs={i.blockConfigs}
														blockContent={i.blockContent}
														blockIsHidden={i.blockIsHidden}
														hideBlock={true}
													/>
												</GlobalStylesWrapper>
											</ChangeWindowSizeWrapper>
										</Suspense>
									)
								})}
							</ThemeProvider>
							: <PageTitle parentClass="edit-page" title="Пустой шаблон">
								Вы пока не создали ни одного блока. Добавьте свой первый блок на страницу.
							</PageTitle>
					}

				</div>
			</div>
		</>
	)
}

export default PreviewPage