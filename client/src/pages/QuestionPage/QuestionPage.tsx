import React from 'react'
import './QuestionPage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import SendQuestion from '../../components/UI/SendQuestion/SendQuestion'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'

const QuestionPage: React.FC = () => {

	const popup = usePopup(false, 'solid')

	setTimeout(() => popup.openPopup(), 400)

	return (
		<>
			<PopUp {...popup.popupProps} transparent={true}>
				{/* <div className="question-page"> */}
					<SendQuestion parentClass="question-page" />
				{/* </div> */}
			</PopUp>

			{/* <TopMenu menuType="back-to-main" /> */}
			<div className="content-area">

			</div>
			{/* <Footer /> */}
		</>
	)
}

export default QuestionPage