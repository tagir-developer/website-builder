import React from 'react'
import styled, { css } from 'styled-components'
import { StyledFlex } from '../../commonStyledComponents/StyledFlex/StyledFlex'
import { StyledOverlay } from '../../commonStyledComponents/StyledOverlay/StyledOverlay'
import { IButtonProps, IHeader1Content, IHeader1Props, IHeader1Styles, ITitleProps } from './types/header1types'

const StyledHeader1 = styled.div<IHeader1Props>`
	width: 100%;
	position: relative;
	box-sizing: border-box;
	padding: 60px 25%;
	background: #000;
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
		padding: 40px 15%;
		font-size: 0.8em;
	}

	@media ${props => props.theme.media.tablete} {
		padding: 50px 20%;
		font-size: 0.9em;
	}
`

const Title = styled.h1<ITitleProps>`
	margin: 0 0 40px 0;
	font-size: ${props => props.fontSize}!important;
	font-weight: bold!important;
	color: white;

	@media ${props => props.theme.media.phone} {
		margin-bottom: 20px;
	}

	@media ${props => props.theme.media.tablete} {
		margin-bottom: 30px;
	}


`

const Description = styled.div`
	color: #d6d6d6;
	font-size: 140%!important;
	margin-bottom: 60px;

	@media ${props => props.theme.media.phone} {
		margin-bottom: 30px;
	}

	@media ${props => props.theme.media.tablete} {
		margin-bottom: 45px;
	}
`

const Button = styled.button<IButtonProps>`
	display: block;
	max-width: 300px;
	padding: 25px 80px;
	background: ${props => props.background};
	color: #fff;
	text-align: center;
	font-size: 140%;
	font-weight: bold;
	transition: background 150ms ease-in;
	cursor: pointer;
	opacity: 0.99;
	&:hover {
		opacity: 0.8;
	}

	@media ${props => props.theme.media.phone} {
		padding: 15px 60px;
	}

	@media ${props => props.theme.media.tablete} {
		padding: 20px 70px;
	}
`

interface IHeader1 {
	blockConfigs: IHeader1Styles
	blockContent: IHeader1Content
	blockIsHidden: boolean
}



const Header1: React.FC<IHeader1> = ({ blockConfigs, blockContent, blockIsHidden }) => {
	// console.log('Значения параметра скрытия блока', blockIsHidden)
	return (
		<StyledHeader1
			textAlign={blockConfigs.blockAlign}
		>
			<StyledOverlay
				devices={blockConfigs.hiddenOnDevice}
				blockIsHidden={blockIsHidden}
			/>
			{/* {!blockIsHidden
				? <StyledOverlay
					devices={blockConfigs.hiddenOnDevice}
					blockIsHidden={true}
				/>
				: <StyledOverlay
					devices={blockConfigs.hiddenOnDevice}
					blockIsHidden={false}
				/>
			}
			<p style={{ color: 'red' }}>{blockIsHidden.toString()}</p> */}
			<StyledFlex
				direction={"column"}
				align={blockConfigs.blockAlign}
			>
				<Title
					fontSize={blockConfigs.titleFontSize}
				>
					{blockContent.titleText}
				</Title>
				<Description>
					{blockContent.descriptionText}
				</Description>
				<Button
					background={blockConfigs.buttonBackground}
				>
					{blockContent.buttonText}
				</Button>
			</StyledFlex>
		</StyledHeader1>
	)
}

export default Header1