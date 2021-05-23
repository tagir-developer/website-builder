import React from 'react'
import './QuestionPage.scss'
import SendQuestion from '../../components/UI/SendQuestion/SendQuestion'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'
import { RouteComponentProps, withRouter } from 'react-router'


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