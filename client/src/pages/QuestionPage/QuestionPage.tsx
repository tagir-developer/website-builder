import React from 'react'
import './QuestionPage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import SendQuestion from '../../components/UI/SendQuestion/SendQuestion'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'
import { RouteComponentProps, withRouter } from 'react-router'

// interface IQuestionPage extends RouteComponentProps<any> {

// }

const QuestionPage: React.FC<RouteComponentProps> = ({ history }) => {

	const popup = usePopup(false, 'solid')

	setTimeout(() => popup.openPopup(), 300)

	return (
		<>
			<PopUp
				{...popup.popupProps}
				handler={() => popup.closeAndGoBack(history)}
				withTitle="Задать вопрос"
			>
				<div className="question-page">
					<SendQuestion parentClass="question-page" />
				</div>
			</PopUp>
			<div className="content-area">
			</div>
		</>
	)
}

export default withRouter(QuestionPage)