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
import { useActions } from '../../hooks/reduxHooks'
import { useUploadFiles } from '../../hooks/useUploadFiles.hook'
import FileUpload from '../../components/UI/FileUpload/FileUpload'
import produce from 'immer'

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

	const { blockTestImagesDownload } = useActions()

	const appleUpload = useUploadFiles('apple')
	const orangeUpload = useUploadFiles('orange')





	const testFunction = () => {

		let arr = [
			{ fieldName: "apple", path: "somevalue1" },
			{ fieldName: "orange", path: "somevalue2" },
			{ fieldName: "apple", path: "somevalue3" },
			{ fieldName: "apple", path: "somevalue4" },
			{ fieldName: "apple", path: "somevalue5" },
			{ fieldName: "pear", path: "somevalue6" },
			{ fieldName: "orange", path: "somevalue7" }
		]

		type newArrType = {fieldName: string, path: string[] | string}

		let newArr: newArrType[] = []
		let newArrFieldNames: string[] = []

		arr.forEach((i, index) => {

			if (index === 0) {
				newArr = [i]
				newArrFieldNames.push(i.fieldName)
				return
			}

			if (newArrFieldNames.includes(i.fieldName)) {
				const targetObj: newArrType = newArr.filter(item => item.fieldName === i.fieldName)[0]
				if (typeof targetObj.path === 'string') {
					targetObj.path = [targetObj.path, i.path]
				} else {
					targetObj.path = [...targetObj.path, i.path]
				}
				return
			}

			newArrFieldNames.push(i.fieldName)
			newArr = [...newArr, i]


		})





		console.log('newArr', newArr)

	}



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
									<Button
										parentClass="landing-header"
										// handler={testPopup.handler}
										// handler={() => blockTestImagesDownload(appleUpload.files, orangeUpload.files)}
										handler={testFunction}
									>
										Тестовая функция
									</Button>
									{/* <ThemeProvider theme={myTheme}>
										<StyledButton
											outlined
											color="red"
											animation="scale"
											onClick={blockTestImagesDownload}
										>
											Кнопка
										</StyledButton>
									</ThemeProvider> */}

									<FileUpload
										parentClass="send-question"
										multiple={true}
										{...appleUpload.bind}
									>
										Яблоки
									</FileUpload>

									<FileUpload
										parentClass="send-question"
										multiple={true}
										{...orangeUpload.bind}
									>
										Апельсины
									</FileUpload>

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