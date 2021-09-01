import styled, { css } from 'styled-components'
import { devices } from '../commonTypes'
import iconHidden from './hidden-block-shadow.svg'

interface IStyledOverlayProps {
	devices: devices[]
	blockIsHidden: boolean
}

export const StyledOverlay = styled.div<IStyledOverlayProps>`
	position: absolute;
	display: flex;
	flex-direction:column;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${props => props.blockIsHidden ? '#9c5050d3' : '#a2a2a2d5'};
    z-index: 2;
	visibility: hidden;


	&:before {
		content: '';
		display: block;
		width: 154px;
		height: 135px;
		background: url(${iconHidden}) center no-repeat;
		z-index: 3;
	}

	&:after {
		content: 'Блок скрыт на некоторых устройствах';
		display: block;
		width: 250px;
		font-family: Montserrat;
		font-size: 18px;
		font-weight: 500;
		color: white;
		z-index: 3;
		text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.4);
	}

	${props => props.blockIsHidden && css<any>`
		&:after {
			content: 'Блок скрыт на всех устройствах';
		}
	`}

	@media ${props => props.theme.media.phone} {
		${props => props.devices.includes('mobile') && css<any>`
			visibility: visible;
		`}
	}

	@media ${props => props.theme.media.tablete} {
		${props => props.devices.includes('tablete') && css<any>`
			visibility: visible;
		`}
	}

	@media ${props => props.theme.media.pc} {
		${props => props.devices.includes('pc') && css<any>`
			visibility: visible;
		`}
	}

	${props => props.blockIsHidden && css<any>`
		visibility: visible!important;
	`}
`