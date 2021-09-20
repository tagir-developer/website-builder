import styled from 'styled-components'

interface IStyledPopupMessageProps {
	isActive: boolean
	message: string
}

const PopupOverlay = styled.div<any>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #000;
	opacity: 0.7;
	z-index: 200;
	display: flex;
	justify-content: center;
	align-items: center;
`

const PopupMessageContainer = styled.div<any>`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 350px;
	margin-left: -175px;
	margin-top: -130px;
	box-sizing: border-box;
	padding: 30px;
	background: #fff;
	border-radius: 10px;
	z-index: 300;
	box-shadow: 8px 8px 30px #00000052;
`

export const StyledPopupMessage: React.FC<IStyledPopupMessageProps> = ({ isActive, message }) => {

	if (isActive) {
		return (
			<>
				<PopupMessageContainer>
					{message}
				</PopupMessageContainer>
				<PopupOverlay />
			</>
		)
	} else {
		return (
			<></>
		)
	}

}

// export default StyledPopupMessage