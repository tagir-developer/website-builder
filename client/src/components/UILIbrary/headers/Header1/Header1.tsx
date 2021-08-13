import React from 'react'
import './Header1.scss'
import styled from 'styled-components'
import { StyledFlex } from '../../commonStyledComponents/StyledFlex'
import { StyledButton } from '../../commonStyledComponents/StyledButton'

const StyledHeader1 = styled.div`
	width: 100%;
	height: 500px;
	box-sizing: border-box;
	padding: 30px;
	background: #000;
`
const Title = styled.h1`
	font-size: 50px;
	font-weight: bold;
	color: ${props => props.color};
	margin-bottom: 40px;
`

const Description = styled.div`
	color: #fff;
	font-size: 26px;
	margin-bottom: 60px;
`
// const Button = styled.button`
// 	display: block;
// 	padding: 0 80px;
// 	height: 70px;
// 	background: rgb(202, 74, 0);
// 	color: #fff;
// 	text-align: center;
// 	line-height: 70px;
// 	font-size: 24px;
// 	font-weight: bold;
// 	transition: background 150ms ease-in;
// 	cursor: pointer;
// 	&:hover {
// 		background: rgb(207, 97, 33);
// 	}
// `

const Header1: React.FC = () => {

	return (
		<StyledHeader1>
			<StyledFlex 
				direction={"column"} 
				align={"center"}
			>
				<Title color={'green'}>Заголовок блока</Title>
				<Description>Какой-то текст описывающий свойства продукта или услуги</Description>
				<StyledButton 
					outlined 
					color="red"
					animation="scale"
				>
					Кнопка
				</StyledButton>
			</StyledFlex>
		</StyledHeader1>
	)
}

export default Header1