import React from 'react'
import './ComplaintPage.scss'
import { usePopup } from '../../hooks/usePopup.hook'
import PopUp from '../../components/HOC/PopUp/PopUp'
import { RouteComponentProps, withRouter } from 'react-router'
import SendComplaint from '../../components/UI/SendComplaint/SendComplaint'


const ComplaintPage: React.FC<RouteComponentProps> = ({ history }) => {

	const popup = usePopup(false, 'solid')

	setTimeout(() => popup.openPopup(), 300)

	return (
		<>
			<PopUp
				{...popup.popupProps}
				handler={() => popup.closeAndGoBack(history)}
				withTitle="Отправить жалобу"
			>
				<div className="complaint-page">
					<SendComplaint parentClass="complaint-page" />
				</div>
			</PopUp>
			<div className="content-area">
			</div>
		</>
	)
}

export default withRouter(ComplaintPage)