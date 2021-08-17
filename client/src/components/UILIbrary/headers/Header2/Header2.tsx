import React from 'react'
import styled from 'styled-components'
import { StyledFlex } from '../../commonStyledComponents/StyledFlex'

interface IHeader2Props {
	textAlign?: string
}

const StyledHeader2 = styled.div<IHeader2Props>`
	width: 100%;
	box-sizing: border-box;
	padding: 80px 25%;
	background: #fff;
	font-size: 1em;
	text-align: ${props => props.textAlign || "center"};

	@media ${props => props.theme.media.phone} {
		padding: 50px 15%;
		font-size: 0.8em;
	}

	@media ${props => props.theme.media.tablete} {
		padding: 70px 20%;
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
	color: #004223;

	@media ${props => props.theme.media.phone} {
		margin-bottom: 20px;
	}

	@media ${props => props.theme.media.tablete} {
		margin-bottom: 30px;
	}


`

const Description = styled.div`
	color: #222222;
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
	background: ${props => props.background || "#7dca00"};
	color: #fff;
	text-align: center;
	font-size: 140%;
	font-weight: bold;
	transition: background 150ms ease-in;
	cursor: pointer;
	border-radius: 15px;
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
interface IHeader2Styles {
	buttonBackground: string
	blockAlign: "flex-start" | "center" | "flex-end"
	titleFontSize: "300%" | "350%" | "400%"
	textAlign: "left" | "center" | "right"
}

const styles: IHeader2Styles = {
	buttonBackground: "red",
	blockAlign: "center",
	titleFontSize: "300%",
	textAlign: "center"
}

interface IHeader2Content {
	titleText: string
	descriptionText: string
	buttonText: string
}

const content: IHeader2Content = {
	titleText: "Заголовок блока 2",
	descriptionText: "Какой-то текст описывающий свойства продукта или услуги",
	buttonText: "Кнопка"
}

const Header2: React.FC = () => {

	return (
		<StyledHeader2
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
					// background={styles.buttonBackground}
				>
					{content.buttonText}
				</Button>
			</StyledFlex>
		</StyledHeader2>
	)
}

export default Header2