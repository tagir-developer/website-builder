import styled, { css } from 'styled-components'

interface IChangeWindowSizeWrapper {
	deviceType: 'mobile' | 'tablete' | 'pc'
}

export const ChangeWindowSizeWrapper = styled.div<IChangeWindowSizeWrapper>`
	${props => props.deviceType === 'mobile' && css<any>`
		max-width: 375px;
		margin: 0 auto;
		box-shadow:  -10px -10px 30px rgba(255, 255, 255, 0.9), 10px 10px 30px #B3BFC9;
	`}
	${props => props.deviceType === 'tablete' && css<any>`
		max-width: 768px;
		margin: 0 auto;
		box-shadow:  -10px -10px 30px rgba(255, 255, 255, 0.9), 10px 10px 30px #B3BFC9;
	`}
	${props => props.deviceType === 'pc' && css<any>`
		width: 100%;
	`}
`