import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStylesWrapper from '../../components/HOC/GlobalStylesWrapper/GlobalStylesWrapper'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import { myTheme } from '../../components/UILIbrary/themes/themes'
import { Helmet } from "react-helmet"
import Menu1 from '../../components/UILIbrary/menu/Menu1/Menu1'
import EditBlockWrapper from '../../components/HOC/EditBlockWrapper/EditBlockWrapper'
import AddMenuItemCard from '../../components/UI/AddMenuItemCard/AddMenuItemCard'
import Form1 from '../../components/UILIbrary/form/Form1/Form1'
import Content1 from '../../components/UILIbrary/content/Content1/Content1'

const SandboxPage: React.FC = () => {

	return (
		<>
			<Helmet>
				<title>Песочница</title>
			</Helmet>

			<TopMenu menuType="preview" />
			<div className="content-area">
				<div className="edit-page">
					<ThemeProvider theme={myTheme}>
						<EditBlockWrapper
							// modClass={['short-block']}
							blockId={'asdasdasdasd'}
							openConfig={() => { }}
							openContent={() => { }}
							blockIsHidden={false}
						>
							<GlobalStylesWrapper>
								{/* <Menu1 /> */}
							</GlobalStylesWrapper>
						</EditBlockWrapper>

						<GlobalStylesWrapper>
							
						</GlobalStylesWrapper>
					</ThemeProvider>

					{/* <AddMenuItemCard
						title="Укажите название пункта"
						link="Укажите ссылку"
						openInNewWindow={false}
					/> */}
				</div>
			</div>
		</>
	)
}

export default SandboxPage