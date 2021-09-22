import React from 'react'
import './ComplaintPage.scss'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'
import { RouteComponentProps, withRouter } from 'react-router'
import SendComplaint from '../../components/UI/SendComplaint/SendComplaint'
import AlertMessage from '../../components/HOC/AlertMessage/AlertMessage'


const ComplaintPage: React.FC<RouteComponentProps> = ({ history }) => {

	const contentPopup = usePopup(false, 'solid')
	setTimeout(() => contentPopup.openPopup(), 300)

	return (
		<AlertMessage successFunc={history.goBack}>
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
		</AlertMessage>
	)
}

export default withRouter(ComplaintPage)