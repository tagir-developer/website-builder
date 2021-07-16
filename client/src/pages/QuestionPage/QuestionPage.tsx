import React, { useEffect } from 'react'
import './QuestionPage.scss'
import SendQuestion from '../../components/UI/SendQuestion/SendQuestion'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'
import { RouteComponentProps, withRouter } from 'react-router'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import Alert from '../../components/UI/Alert/Alert'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'


const QuestionPage: React.FC<RouteComponentProps> = ({ history }) => {

	const contentPopup = usePopup(false, 'solid')
	const messagePopup = usePopup(false, 'blur')
	setTimeout(() => contentPopup.openPopup(), 300)

	const { message, messageType } = useTypedSelector(state => state.support)
	const { supportClearRegisterMessage } = useActions()

	useEffect(() => {

		const alertDelay: number = 2000

		if (message) {
			messagePopup.showHide(alertDelay)
			setTimeout(() => {
				supportClearRegisterMessage()
			}, alertDelay)
		}

		if (messageType === 'success') {

			setTimeout(() => {
				supportClearRegisterMessage()
				history.goBack()
			}, alertDelay)
		}
	}, [message])

	return (
		<>
			<PopUp {...messagePopup.popupProps} transparent={true}>
				<Alert type={messageType} message={message} />
			</PopUp>

			<Backdrop {...messagePopup.backdropProps}>

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

			</Backdrop>
		</>
	)
}

export default withRouter(QuestionPage)