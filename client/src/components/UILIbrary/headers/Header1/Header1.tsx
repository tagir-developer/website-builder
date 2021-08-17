import React from 'react'
import './Header1.scss'
import styled from 'styled-components'
import { StyledFlex } from '../../commonStyledComponents/StyledFlex'

interface IHeader1Props {
	textAlign?: string
}

const StyledHeader1 = styled.div<IHeader1Props>`
	width: 100%;
	box-sizing: border-box;
	padding: 60px 25%;
	background: #000;
	font-size: 1em;
	text-align: ${props => props.textAlign || "center"};

	@media ${props => props.theme.media.phone} {
		padding: 40px 15%;
		font-size: 0.8em;
	}

	@media ${props => props.theme.media.tablete} {
		padding: 50px 20%;
		font-size: 0.9em;
	}
`
interface ITitleProps {
	fontSize?: string
}

const Title = styled.h1<ITitleProps>`
	margin: 0 0 40px 0;
	font-size: ${props => props.fontSize || '300%'}!important;
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

interface IButtonProps {
	background?: string
}

const Button = styled.button<IButtonProps>`
	display: block;
	max-width: 300px;
	padding: 25px 80px;
	background: ${props => props.background || "#ca4a00"};
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
interface IHeader1Styles {
	buttonBackground: string
	blockAlign: "flex-start" | "center" | "flex-end"
	titleFontSize: "300%" | "350%" | "400%"
	textAlign: "left" | "center" | "right"
}

const styles: IHeader1Styles = {
	buttonBackground: "red",
	blockAlign: "center",
	titleFontSize: "300%",
	textAlign: "center"
}

interface IHeader1Content {
	titleText: string
	descriptionText: string
	buttonText: string
}

const content: IHeader1Content = {
	titleText: "Заголовок блока",
	descriptionText: "Какой-то текст описывающий свойства продукта или услуги",
	buttonText: "Кнопка"
}

const Header1: React.FC = () => {

	return (
		<StyledHeader1
			textAlign={styles.textAlign}
		>
			<StyledFlex
				direction={"column"}
				align={styles.blockAlign}
			>
				<Title
					fontSize={styles.titleFontSize}
				>
					{content.titleText}
				</Title>
				<Description>
					{content.descriptionText}
				</Description>
				<Button
					background={styles.buttonBackground}
				>
					{content.buttonText}
				</Button>
			</StyledFlex>
		</StyledHeader1>
	)
}

export default Header1