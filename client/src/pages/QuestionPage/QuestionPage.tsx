import React from 'react'
import './QuestionPage.scss'
import SendQuestion from '../../components/UI/SendQuestion/SendQuestion'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'
import { RouteComponentProps, withRouter } from 'react-router'
import AlertMessage from '../../components/HOC/AlertMessage/AlertMessage'


const QuestionPage: React.FC<RouteComponentProps> = ({ history }) => {

	const contentPopup = usePopup(false, 'solid')
	setTimeout(() => contentPopup.openPopup(), 300)


	return (
		<AlertMessage successFunc={history.goBack} >
			<PopUp
				{...contentPopup.popupProps}
				handler={() => contentPopup.closeAndGoBack(history)}
				withTitle="Задать вопрос"
			>
				<div className="question-page">
					<SendQuestion parentClass="question-page" />
				</div>
			</PopUp>
			<div className="content-area">
			</div>
		</AlertMessage>
	)
}

export default withRouter(QuestionPage)