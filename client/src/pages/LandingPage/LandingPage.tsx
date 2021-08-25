import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import PopUp from '../../components/HOC/PopUp/PopUp'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import BasicSettings from '../../components/UI/BasicSettings/BasicSettings'
import Button from '../../components/UI/Button/Button'
import Footer from '../../components/UI/Footer/Footer'
import { StyledButton } from '../../components/UILIbrary/commonStyledComponents/StyledButton/StyledButton'
import { usePopup } from '../../hooks/usePopup.hook'
import './LandingPage.scss'
import styled, { ThemeProvider } from 'styled-components'
import { myTheme } from '../../components/UILIbrary/themes/themes'

// import myImg from './img/pc-and-phone.svg';


// const StyledDiv = styled.div<any>`
// 	display: block;
// 	width: 200px;
// 	height: 100px;
// 	/* background: red; */
// 	background: url(${myImg}) center no-repeat;
// `

const LandingPage: React.FC<RouteComponentProps> = ({ history }) => {

	const testPopup = usePopup(false, 'blur')

	return (
		<>
			{/* <ScrollTo value={testPopup.scroll} dep={testPopup.isOpen} /> */}

			<PopUp {...testPopup.popupProps} withTitle="Основные настройки">
				{/* <BasicSettings handler={() => { }} /> */}
			</PopUp>

			<Backdrop {...testPopup.backdropProps} >

				<TopMenu menuType="main" />
				{/* <div className="content-area" style={testPopup.isOpen ? {marginTop: `-${testPopup.scroll - 60}px`} : undefined} > */}
				<div className="content-area">

					<div className="landing-wrapper">

						<div className="landing-header">
							<div className="landing-header__container">
								<div className="landing-header__text-container">
									<h1 className="landing-header__heading">Хотите создать сайт-визитку для Instagram?</h1>
									{/* <Button parentClass="landing-header" handler={() => history.push('/registration')} >
										Создать сайт
									</Button> */}
									<Button parentClass="landing-header" handler={testPopup.handler} >
										Открыть попап
									</Button>
									<ThemeProvider theme={myTheme}>
										<StyledButton
											outlined
											color="red"
											animation="scale"
										>
											Кнопка
										</StyledButton>
									</ThemeProvider>

								</div>
								<div className="landing-header__image-container">
									<div className="landing-header__image"></div>
								</div>
							</div>
						</div>

						<div className="landing-blocks">
							<div className="landing-blocks__container">
								<div className="landing-blocks__blocks-wrapper">
									<div className="landing-blocks__block-light">Блок 2</div>
									<div className="landing-blocks__block-dark">Блок 3</div>
									<div className="landing-blocks__block-light">Блок 4</div>
								</div>
							</div>
						</div>

						<div className="landing-final">
							<Button parentClass="landing-final" handler={() => history.push('/registration')} >
								Создать сайт
							</Button>
						</div>

					</div>

				</div>
				<Footer />

			</Backdrop>
		</>
	)
}

export default withRouter(LandingPage)