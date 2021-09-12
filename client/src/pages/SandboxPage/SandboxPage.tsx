import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStylesWrapper from '../../components/HOC/GlobalStylesWrapper/GlobalStylesWrapper'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import { myTheme } from '../../components/UILIbrary/themes/themes'
import { Helmet } from "react-helmet"
import Menu1 from '../../components/UILIbrary/menu/Menu1/Menu1'
import EditBlockWrapper from '../../components/HOC/EditBlockWrapper/EditBlockWrapper'

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
								<Menu1 />
							</GlobalStylesWrapper>
						</EditBlockWrapper>

						<GlobalStylesWrapper>
							<Menu1 />
						</GlobalStylesWrapper>
					</ThemeProvider>
				</div>
			</div>
		</>
	)
}

export default SandboxPage