import React from 'react'
import styled, { css } from 'styled-components'
import { BasicComponent } from '../../commonStyledComponents/BasicComponent/BasicComponent'
import { ICommonBlockProps } from '../../commonStyledComponents/commonTypes'
import { StyledFlex } from '../../commonStyledComponents/StyledFlex/StyledFlex'
import { StyledOverlay } from '../../commonStyledComponents/StyledOverlay/StyledOverlay'
import {  } from './types/form1types'

const StyledForm1 = styled(BasicComponent) <any>`
	width: 100%;
	position: relative;
	box-sizing: border-box;
	padding: 60px 25%;
	background: #000;
	font-size: 1em;

	@media ${props => props.theme.media.phone} {
		padding: 40px 15%;
		font-size: 0.8em;
	}

	@media ${props => props.theme.media.tablete} {
		padding: 50px 20%;
		font-size: 0.9em;
	}

`

const Title = styled.h1<any>`
	margin: 0 0 40px 0;
	font-size: 200%!important;
	font-weight: bold!important;
	color: white;

	@media ${props => props.theme.media.phone} {
		margin-bottom: 20px;
	}

	@media ${props => props.theme.media.tablete} {
		margin-bottom: 30px;
	}


`

const FormContainer = styled.div`
	width: 300px;
	box-sizing: border-box;
	padding: 45px 30px 30px 30px;
	background: #fff;
	border-radius: 10px;
`

const Input = styled.input<any>`
	width: 100%;
	display: block;
	height: 40px;
	box-sizing: border-box;
	padding: 0 20px;
	text-align: center;
	color: #000;
	border: 1px solid grey;
	border-radius: 5px;
	margin-bottom: 30px;
`

const Button = styled.button<any>`
	display: block;
	width: 100%;
	padding: 15px 30px;
	/* background: ${props => props.background}; */
	background: #fd6a08;
	border-radius: 5px;
	color: #fff;
	text-align: center;
	font-size: 120%;
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

interface IForm1 extends ICommonBlockProps {
	// blockConfigs: IHeader1Styles
	// blockContent: IHeader1Content
	blockConfigs: any
	blockContent: any
}

const Form1: React.FC<IForm1> = ({ blockConfigs, blockContent, blockIsHidden, hideBlock = false }) => {

	return (
		<StyledForm1
			blockIsHidden={false}
			// devices={blockConfigs.hiddenOnDevice}
			devices={[]}
			hideBlock={true}
		>
			<StyledOverlay
				devices={[]}
				blockIsHidden={false}
			/>
			<StyledFlex
				direction={"column"}
			>
				<Title
					// fontSize={blockConfigs.titleFontSize}
				>
					Заголовок формы
				</Title>

				<FormContainer>
					<Input
						type="text"
						placeholder="Введите имя"
					/>

					<Input
						type="text"
						placeholder="Введите телефон"
					/>

					<Button
					>
						Текст кнопки
					</Button>
				</FormContainer>

			</StyledFlex>
		</StyledForm1>
	)
}

export default Form1