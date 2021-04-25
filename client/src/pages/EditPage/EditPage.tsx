import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'

const EditPage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="edit" />
			<div className="content-area">
				<h1>Редактор страницы</h1>
			</div>
			<Footer />
		</>
	)
}

export default EditPage