import styled, { css } from 'styled-components'
import { devices } from '../commonTypes'
import iconHidden from './hidden-block.svg'

interface IStyledOverlayProps {
	devices: devices[]
}

export const StyledOverlay = styled.div<IStyledOverlayProps>`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #a2a2a2;
    opacity: 0;
    z-index: 2;

	&:before {
		content: '';
		display: block;
		width: 126px;
		height: 108px;
		background: url(${iconHidden}) center no-repeat;
		z-index: 3;
	}

	@media ${props => props.theme.media.phone} {
		${props => props.devices.includes('mobile') && css<any>`
			opacity: 0.8;
		`}
	}

	@media ${props => props.theme.media.tablete} {
		${props => props.devices.includes('tablete') && css<any>`
			opacity: 0.8;
		`}
	}

	@media ${props => props.theme.media.pc} {
		${props => props.devices.includes('pc') && css<any>`
			opacity: 0.8;
		`}
	}
`