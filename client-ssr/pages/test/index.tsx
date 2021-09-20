import React from "react"
import styled from "styled-components"
import MainLayout from "../../components/HOC/MainLayout/MainLayout"


const TestBlockStyled = styled.div<any>`
	width: 100%;
	height: 800px;
	/* background: url('http://localhost:5000/images/apples.jpg') center no-repeat; */
	background: red;
`

const UserPage: React.FC<any> = () => {

	return (
		<MainLayout title={'Тестовая страница'}>
			<TestBlockStyled />
			{/* <h1>Проверка</h1> */}
		</MainLayout>
	)
}


export default UserPage