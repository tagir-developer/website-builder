import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'

const SelectTemplatePage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="select-template" />
			<div className="content-area">
				<h1>Страница выбора шаблона новой страницы</h1>
			</div>
			<Footer />
		</>
	)
}

export default SelectTemplatePage