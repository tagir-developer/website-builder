import styled, { css } from 'styled-components'
import { devices } from '../commonTypes'

export interface IBasicComponent {
	blockIsHidden: boolean
	hideBlock?: boolean
	devices: devices[]
}

export const BasicComponent = styled.div<IBasicComponent>`
	
	${props => (props.blockIsHidden && props.hideBlock) && css<any>`
		display: none!important;
	`}

	@media ${props => props.theme.media.phone} {
		${props => (props.devices?.includes('mobile') && props.hideBlock) && css<any>`
			display: none;
		`}
	}

	@media ${props => props.theme.media.tablete} {
		${props => (props.devices?.includes('tablete') && props.hideBlock) && css<any>`
			display: none;
		`}
	}

	@media ${props => props.theme.media.pc} {
		${props => (props.devices?.includes('pc') && props.hideBlock) && css<any>`
			display: none;
		`}
	}
`