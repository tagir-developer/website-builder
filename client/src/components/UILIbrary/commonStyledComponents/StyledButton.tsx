import styled, { css, keyframes } from 'styled-components'

interface IButtonProps {
	direction?: string
	align?: string
	justify?: string
	margin?: string
	primary?: boolean
	outlined?: boolean
	animation?: string
}

const rotateAnimation = keyframes`
	0% {
		transform: rotateZ(0deg);
	}
	100% {
		transform: rotateZ(360deg);
	}
`

const scaleAnimation = keyframes`
	0% {
		transform: scale(1, 1);
	}
	100% {
		transform: scale(2, 2);
	}
`

export const StyledButton = styled.button<IButtonProps>`
	display: block;
	padding: 10px 15px;
	font-size: 18px;
	cursor: pointer;
	align-self: ${props => props.align || 'center'};
	&: hover {
			animation: ${rotateAnimation} 1s infinite linear;
	}

	${props => props.primary && css<any>`
		color: ${props => props.color || 'white'};
		background: ${props => props.background || 'grey'};
	`}

	${props => props.outlined && css<any>`
		color: ${props => props.color || 'white'};
		border: 1px solid ${props => props.color || 'white'};
		background: transparent;
	`}

	${props => props.animation === 'rotate' && css<any>`
	&:hover {
		animation: ${rotateAnimation} 1s infinite linear;
	}
	`} 
	
	${props => props.animation === 'scale' && css<any>`
	&:hover {
		animation: ${scaleAnimation} 1s infinite linear;
	}
	`}

	@media ${props => props.theme.media.phone} {
		border: 2px solid  yellow;
	}

	@media ${props => props.theme.media.tablete} {
		border: 2px solid red;
	}

	@media ${props => props.theme.media.pc} {
		border: 2px solid green;
	}

`
