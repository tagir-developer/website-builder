import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'

const PreviewPage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="preview" />
			<div className="content-area">
				<h1>Страница предпросмотра на разных устройствах</h1>
			</div>
			<Footer />
		</>
	)
}

export default PreviewPage