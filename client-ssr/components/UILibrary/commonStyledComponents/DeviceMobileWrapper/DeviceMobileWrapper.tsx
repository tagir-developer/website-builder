import styled, { css } from 'styled-components'

interface IDeviceMobileWrapper {
	deviceType: 'mobile' | 'tablete' | 'pc'
}

export const DeviceMobileWrapper = styled.div<IDeviceMobileWrapper>`

@media ${props => props.theme.media.phoneAndTablete} {

	${props => props.deviceType === 'mobile' && css<any>`
		width: 100%;
	`}

	${props => props.deviceType === 'tablete' && css<any>`
		transform: scale(0.75);
		transform-origin: left top;
		width: calc(100% / 0.75);
		height: calc(100% / 0.75);
		margin-top: 30px;
	`}

	${props => props.deviceType === 'pc' && css<any>`
		transform: scale(0.5);
		transform-origin: left top;
		width: calc(100% / 0.5);
		height: calc(100% / 0.5);
		margin-top: 30px;
	`}
}

`