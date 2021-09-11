import React from 'react'
import styled, { css } from 'styled-components'
import { BasicComponent } from '../../commonStyledComponents/BasicComponent/BasicComponent'
import { ICommonBlockProps } from '../../commonStyledComponents/commonTypes'
import { StyledFlex } from '../../commonStyledComponents/StyledFlex/StyledFlex'
import { StyledOverlay } from '../../commonStyledComponents/StyledOverlay/StyledOverlay'
import { IMenu1Configs, IMenu1Content, IMenu1Props } from './types/menu1types'

// const StyledMenu1 = styled(BasicComponent)<IMenu1Props>`
const StyledMenu1 = styled.div<any>`
	width: 100%;
	height: 60px;	
	position: relative;
	box-sizing: border-box;
	background: #3600f8;
	font-size: 1em;

	@media ${props => props.theme.media.phone} {
		font-size: 0.8em;
	}

	@media ${props => props.theme.media.tablete} {
		font-size: 0.9em;
	}

`

// const Title = styled.h1<ITitleProps>`
// 	margin: 0 0 40px 0;
// 	font-size: ${props => props.fontSize}!important;
// 	font-weight: bold!important;
// 	color: white;

// 	@media ${props => props.theme.media.phone} {
// 		margin-bottom: 20px;
// 	}

// 	@media ${props => props.theme.media.tablete} {
// 		margin-bottom: 30px;
// 	}

// `

interface IMenu1  {
}

// interface IMenu1 extends ICommonBlockProps {
// 	blockConfigs: IMenu1Configs
// 	blockContent: IMenu1Content
// }

// const Menu1: React.FC<IMenu1> = ({ blockConfigs, blockContent, blockIsHidden, hideBlock = false }) => {
const Menu1: React.FC<IMenu1> = () => {

	return (
		<StyledMenu1
			// textAlign={blockConfigs.blockAlign}
			// blockIsHidden={blockIsHidden}
			// devices={blockConfigs.hiddenOnDevice}
			// hideBlock={hideBlock}
		>
			{/* <StyledOverlay
				devices={blockConfigs.hiddenOnDevice}
				blockIsHidden={blockIsHidden}
			/> */}
			<StyledFlex
				direction={"column"}
				// align={blockConfigs.blockAlign}
			>
				
			</StyledFlex>
		</StyledMenu1>
	)
}

export default Menu1