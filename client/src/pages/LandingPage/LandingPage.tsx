import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Button from '../../components/UI/Button/Button'
import Footer from '../../components/UI/Footer/Footer'
import { useTypedSelector } from '../../hooks/reduxHooks'
import './LandingPage.scss'

const LandingPage: React.FC<RouteComponentProps> = ({history}) => {

	const {checkAuthLoading} = useTypedSelector(state => state.auth)

	return (
		<>
			<TopMenu menuType="main" />
			<div className="content-area">

				<div className="landing-wrapper">

					<div className="landing-header">
						<div className="landing-header__container">
							<div className="landing-header__text-container">
								<h1 className="landing-header__heading">Хотите создать сайт-визитку для Instagram?</h1>
								<Button parentClass="landing-header" handler={() => history.push('/registration')} >
									Создать сайт
								</Button>
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
		</>
	)
}

export default withRouter(LandingPage)