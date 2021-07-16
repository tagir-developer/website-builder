import React, { useEffect } from 'react'
import './ComplaintPage.scss'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'
import { RouteComponentProps, withRouter } from 'react-router'
import SendComplaint from '../../components/UI/SendComplaint/SendComplaint'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import Alert from '../../components/UI/Alert/Alert'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { useAlert } from '../../hooks/useAlert.hook'


const ComplaintPage: React.FC<RouteComponentProps> = ({ history }) => {

	const contentPopup = usePopup(false, 'solid')
	const messagePopup = usePopup(false, 'blur')
	setTimeout(() => contentPopup.openPopup(), 300)


	const { message, messageType } = useTypedSelector(state => state.support)
	const { supportClearRegisterMessage } = useActions()

	const alert = useAlert(2000, supportClearRegisterMessage)



	// useEffect(() => {

	// 	console.log(messageType)
	// 	alert.messageHandler(messageType, () => messagePopup.showHide(2000), () => history.goBack())

	// }, [message, alert, history, messageType])

	useEffect(() => {

		const alertDelay: number = 2000

		if (message) {

			messagePopup.showHide(alertDelay)
			 
				setTimeout(() => {
					
					supportClearRegisterMessage()
					
					if (messageType === 'success') history.goBack()
					// if (messageType === 'success') console.log('Перешли на другую страницу')
					
				}, alertDelay)
			
		}

		// if (messageType === 'success') {

		// 	setTimeout(() => {
		// 		supportClearRegisterMessage()
		// 		history.goBack()
		// 	}, alertDelay)
		// }

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
					withTitle="Отправить жалобу"
				>
					<div className="complaint-page">
						<SendComplaint parentClass="complaint-page" />
					</div>
				</PopUp>
				<div className="content-area">
				</div>

			</Backdrop>
		</>
	)
}

export default withRouter(ComplaintPage)