import React from 'react'

const Layout: React.FC = ({children}) => {

	// !Когда будем подключать Redux, можно будет задавать тегу main класс с размытием, при открытии алерта


	return (
		<main className="main">
			{children}
		</main>
	)
}

export default Layout