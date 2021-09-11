import React, { Suspense, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStylesWrapper from '../../components/HOC/GlobalStylesWrapper/GlobalStylesWrapper'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import PageTitle from '../../components/UI/PageTitle/PageTitle'
import { ChangeWindowSizeWrapper } from '../../components/UILIbrary/commonStyledComponents/ChangeWindowSizeWrapper/ChangeWindowSizeWrapper'
import { DeviceMobileWrapper } from '../../components/UILIbrary/commonStyledComponents/DeviceMobileWrapper/DeviceMobileWrapper'
import { myTheme } from '../../components/UILIbrary/themes/themes'
import { Helmet } from "react-helmet"
import Menu1 from '../../components/UILIbrary/menu/Menu1/Menu1'

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
						<Menu1 />
					</ThemeProvider>
				</div>
			</div>
		</>
	)
}

export default SandboxPage