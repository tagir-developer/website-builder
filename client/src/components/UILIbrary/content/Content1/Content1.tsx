import React from 'react'
import styled, { css } from 'styled-components'
import { BasicComponent } from '../../commonStyledComponents/BasicComponent/BasicComponent'
import { ICommonBlockProps } from '../../commonStyledComponents/commonTypes'
import { StyledFlex } from '../../commonStyledComponents/StyledFlex/StyledFlex'
import { StyledOverlay } from '../../commonStyledComponents/StyledOverlay/StyledOverlay'
import { IContent1Configs, IContent1Content, IStyledContent1Props, ITextProps, ITitleProps } from './types/content1types'

const StyledContent1 = styled(BasicComponent) <IStyledContent1Props>`
	width: 100%;
	position: relative;
	box-sizing: border-box;
	padding: 80px 25%;
	background: ${props => props.backgroundColor};
	font-size: 1em;
	text-align: center;

	${props => props.blockAlign === 'flex-start' && css<any>`
		text-align: left;
	`}
	${props => props.blockAlign === 'center' && css<any>`
		text-align: center;
	`}
	${props => props.blockAlign === 'flex-end' && css<any>`
		text-align: right;
	`}

	@media ${props => props.theme.media.phone} {
		padding: 50px 15%;
		font-size: 0.85em;
	}

	@media ${props => props.theme.media.tablete} {
		padding: 65px 20%;
		font-size: 0.95em;
	}
`

const Title = styled.h1<ITitleProps>`
	margin: 0 0 20px 0;
	font-weight: bold!important;
	/* color: #ff7300; */
	color: ${props => props.titleColor};

	@media ${props => props.theme.media.phone} {
		margin-bottom: 20px;
	}

	@media ${props => props.theme.media.tablete} {
		margin-bottom: 30px;
	}
`

const Text = styled.p<ITextProps>`
	line-height: 200%;
	color: ${props => props.textColor};
`


interface IContent1 extends ICommonBlockProps {
	blockConfigs: IContent1Configs
	blockContent: IContent1Content
}

const Content1: React.FC<IContent1> = ({ blockConfigs, blockContent, blockIsHidden, hideBlock = false }) => {
	return (
		<StyledContent1
			blockAlign={blockConfigs.blockAlign}
			backgroundColor={blockConfigs.backgroundColor}
			blockIsHidden={blockIsHidden}
			devices={blockConfigs.hiddenOnDevice}
			hideBlock={hideBlock}
		>
			<StyledOverlay
				devices={blockConfigs.hiddenOnDevice}
				blockIsHidden={blockIsHidden}
			/>

			<StyledFlex
				direction={"column"}
				align={blockConfigs.blockAlign}
			>
				<Title
					titleColor={blockConfigs.titleColor}
				>
					{blockContent.titleText}
				</Title>
				<Text
					textColor={blockConfigs.textColor}
				>
					{blockContent.contentText}
				</Text>

			</StyledFlex>
		</StyledContent1>
	)
}

export default Content1