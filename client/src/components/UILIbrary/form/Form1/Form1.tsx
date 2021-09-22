import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { BasicComponent } from '../../commonStyledComponents/BasicComponent/BasicComponent'
import { ICommonBlockProps } from '../../commonStyledComponents/commonTypes'
import { StyledFlex } from '../../commonStyledComponents/StyledFlex/StyledFlex'
import { StyledOverlay } from '../../commonStyledComponents/StyledOverlay/StyledOverlay'
import { StyledPopupMessage } from '../../commonStyledComponents/StyledPopupMessage/StyledPopupMessage'
import { useInputHook } from '../../hooks/useInputHook'
import { useRequestHook } from '../../hooks/useRequestHook'
import { IForm1ButtonProps, IForm1Configs, IForm1ContainerProps, IForm1Content, IForm1Props, IForm1TitleProps } from './types/form1types'

const StyledForm1 = styled(BasicComponent) <IForm1Props>`
	width: 100%;
	position: relative;
	box-sizing: border-box;
	padding: 60px;
	text-align: center;
	background: ${props => props.backgroundColor};
	font-size: 1em;

	@media ${props => props.theme.media.phone} {
		padding: 40px;
		font-size: 0.8em;
	}

	@media ${props => props.theme.media.tablete} {
		padding: 50px;
		font-size: 0.9em;
	}

`

const Title = styled.h1<IForm1TitleProps>`
	margin: 0 0 40px 0;
	font-size: ${props => props.titleSize}!important;
	font-weight: bold!important;
	color: ${props => props.titleColor};


	@media ${props => props.theme.media.phone} {
		margin-bottom: 20px;
	}

	@media ${props => props.theme.media.tablete} {
		margin-bottom: 30px;
	}

	@media ${props => props.theme.media.pc} {
		max-width: 500px;
	}


`

const FormContainer = styled.div<IForm1ContainerProps>`
	width: 300px;
	box-sizing: border-box;
	padding: 45px 30px 30px 30px;
	background: ${props => props.formColor};
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

const Button = styled.button<IForm1ButtonProps>`
	display: block;
	width: 100%;
	padding: 15px 30px;
	background: ${props => props.buttonBackground};
	color: ${props => props.buttonTextColor};
	border-radius: 5px;
	text-align: center;
	font-size: 120%;
	font-weight: bold;
	transition: background 150ms ease-in;
	cursor: pointer;
	transition: transform 0.4s ease-in;
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
		padding: 15px 60px;
	}

	@media ${props => props.theme.media.tablete} {
		padding: 20px 70px;
	}
`

interface IForm1 extends ICommonBlockProps {
	blockConfigs: IForm1Configs
	blockContent: IForm1Content
	projectId: string
}

const Form1: React.FC<IForm1> = ({ blockConfigs, blockContent, blockIsHidden, hideBlock = false, projectId }) => {

	const nameInput = useInputHook('')
	const phoneInput = useInputHook('')
	const [popup, setPopup] = useState(false)
	const [message, setMessage] = useState('')
	const request = useRequestHook()

	const formHandler = async () => {
		const response = await request.sendNameAndPhone(projectId, blockContent.formName, nameInput.value, phoneInput.value)
		setMessage(response.message)
		setPopup(true)
		setTimeout(() => {
			setPopup(false)
		}, 2000)
		nameInput.clear()
		phoneInput.clear()
	}

	return (
		<StyledForm1
			blockIsHidden={blockIsHidden}
			devices={blockConfigs.hiddenOnDevice}
			hideBlock={hideBlock}
			backgroundColor={blockConfigs.backgroundColor}
		>
			<StyledOverlay
				devices={blockConfigs.hiddenOnDevice}
				blockIsHidden={blockIsHidden}
			/>

			{popup
				? <StyledPopupMessage
					message={message}
					isActive={hideBlock}
				/>
				: null}

			<StyledFlex
				direction={"column"}
			>
				<Title
					titleColor={blockConfigs.titleColor}
					titleSize={blockConfigs.titleSize}
				>
					{blockContent.titleText}
				</Title>

				<FormContainer
					formColor={blockConfigs.formColor}
				>
					<Input
						type="text"
						placeholder={blockContent.firstInputText}
						{...nameInput.bind}
					/>

					<Input
						type="text"
						placeholder={blockContent.secondInputText}
						{...phoneInput.bind}
					/>

					<Button
						buttonBackground={blockConfigs.buttonBackground}
						buttonTextColor={blockConfigs.buttonTextColor}
						buttonAnimation={blockConfigs.buttonAnimation}
						onClick={formHandler}
						disabled={request.loading}
					>
						{blockContent.buttonText}
					</Button>
				</FormContainer>

			</StyledFlex>
		</StyledForm1>
	)
}

export default Form1