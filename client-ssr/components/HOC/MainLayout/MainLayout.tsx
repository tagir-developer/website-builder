import Head from 'next/head'
import React from 'react'

interface IMainLayout {
	title: string
}

const MainLayout: React.FC<IMainLayout> = ({children, title}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Проверка!!!!!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{children}
			</main>
		</>
	)
}

export default MainLayout