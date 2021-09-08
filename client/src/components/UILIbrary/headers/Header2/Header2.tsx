import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { BasicComponent } from '../../commonStyledComponents/BasicComponent/BasicComponent'
import { ICommonBlockProps } from '../../commonStyledComponents/commonTypes'
import { StyledFlex } from '../../commonStyledComponents/StyledFlex/StyledFlex'
import { StyledOverlay } from '../../commonStyledComponents/StyledOverlay/StyledOverlay'
import { IButtonProps, IHeader2Content, IHeader2Props, IHeader2Styles, ITitleProps } from './types/header2types'

const StyledHeader2 = styled(BasicComponent)<IHeader2Props>`
	width: 100%;
	position: relative;
	box-sizing: border-box;
	padding: 80px 25%;
	/* background: #fff; */
	background: url(${props => props.backgroundImage}) center no-repeat;
	background-size: cover;
	font-size: 1em;

	${props => props.textAlign === 'flex-start' && css<any>`
		text-align: left;
	`}
	${props => props.textAlign === 'center' && css<any>`
		text-align: center;
	`}
	${props => props.textAlign === 'flex-end' && css<any>`
		text-align: right;
	`}

	@media ${props => props.theme.media.phone} {
		padding: 50px 15%;
		font-size: 0.8em;
	}

	@media ${props => props.theme.media.tablete} {
		padding: 70px 20%;
		font-size: 0.9em;
	}
`

const Title = styled.h1<ITitleProps>`
	margin: 0 0 40px 0;
	font-family: Roboto;
	font-size: ${props => props.fontSize}!important;
	font-weight: bold!important;
	/* color: #004223; */
	color: ${props => props.titleColor};
	z-index: 1;

	@media ${props => props.theme.media.phone} {
		margin-bottom: 20px;
	}

	@media ${props => props.theme.media.tablete} {
		margin-bottom: 30px;
	}


`

const Description = styled.div`
	color: #222222;
	font-size: 120%!important;
	margin-bottom: 40px;
	z-index: 1;

	@media ${props => props.theme.media.phone} {
		margin-bottom: 25px;
	}

	@media ${props => props.theme.media.tablete} {
		margin-bottom: 30px;
	}
`

const shakeButtonAnim = keyframes`
	0% {
		transform: rotate(0deg);
	} 
	
	33% {
		transform: rotate(-14deg);
	}

	66% {
		transform: rotate(7deg);
	}

	100% {
		transform: rotate(0deg);
	}
`

const Button = styled.button<IButtonProps>`
	display: block;
	max-width: 300px;
	padding: 20px 50px;
	background: ${props => props.background};
	color: #ffffff;
	text-align: center;
	font-size: 150%;
	font-weight: bold;
	transition: background 150ms ease-in;
	cursor: pointer;
	border-radius: 15px;
	transition: transform 0.4s ease-in;
	z-index: 1;

	&:hover {
		${props => props.buttonAnimation === 'rotate' && css<any>`
			transform: rotate(360deg);
		`}

		${props => props.buttonAnimation === 'scale' && css<any>`
			transform: scale(1.2, 1.2);
		`}

		${props => props.buttonAnimation === 'shake' && css<any>`
			animation: ${shakeButtonAnim} 0.6s ease-in-out;
		`}
		
	}

	@media ${props => props.theme.media.phone} {
		padding: 15px 40px;
	}

	@media ${props => props.theme.media.tablete} {
		padding: 20px 50px;
	}
`

const BackgroundLightening = styled.div<any>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #fff;
	opacity: 0.85;
	z-index: 0;
`

interface IHeader2 extends ICommonBlockProps {
	blockConfigs: IHeader2Styles
	blockContent: IHeader2Content
}

const Header2: React.FC<IHeader2> = ({ blockConfigs, blockContent, blockIsHidden, hideBlock = false }) => {
	return (
		<StyledHeader2
			textAlign={blockConfigs.blockAlign}
			blockIsHidden={blockIsHidden}
			devices={blockConfigs.hiddenOnDevice}
			hideBlock={hideBlock}
			backgroundImage="https://cdn.pixabay.com/photo/2019/07/18/00/14/falcon-4345234_1280.jpg"
		>
			<StyledOverlay
				devices={blockConfigs.hiddenOnDevice}
				blockIsHidden={blockIsHidden}
			/>
			<BackgroundLightening />
			<StyledFlex
				direction={"column"}
				align={blockConfigs.blockAlign}
			>
				<Title
					fontSize={blockConfigs.titleFontSize}
					titleColor={blockConfigs.titleColor}
					// titleColor="#004223"
					// fontSize="450%"
				>
					{blockContent.titleText}
				</Title>
				<Description>
					{blockContent.descriptionText}
				</Description>
				<Button
					background={blockConfigs.buttonBackground}
					buttonAnimation={blockConfigs.buttonAnimation}
					// buttonAnimation="shake"
				>
					{blockContent.buttonText}
				</Button>
			</StyledFlex>
		</StyledHeader2>
	)
}

export default Header2