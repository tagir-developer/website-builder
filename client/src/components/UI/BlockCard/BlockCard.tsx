import React from 'react'
import './BlockCard.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import { RouteComponentProps, withRouter } from 'react-router'

interface IRouteProps {
	name: string
	pageId: string
}

interface IBlockCard extends RouteComponentProps<IRouteProps> {
	parentClass?: string
	modClass?: string[]
	title: string
	img: string
	blockId: string
}

const BlockCard: React.FC<IBlockCard> = ({ history, match, parentClass, modClass, title, img, blockId }) => {

	const BlockCardClasses = useCreateClassName('block-card', parentClass, modClass)

	const devHandler = () => {
		console.log(blockId)
		history.push('/' + match.params.name + '/' + match.params.pageId)
	} // ! Временная общая функция, которая перенаправляет на страницу редактирования страницы проекта


	return (
		<div className={BlockCardClasses}>

			<div className="block-card__image-container">
				{/* <img className="block-card__image" src={process.env.PUBLIC_URL + '/img/temp-2.jpg'} /> */}
				<img className="block-card__image" src={img} alt="" />
			</div>

			<div className="block-card__title">{title}</div>
			<div className="block-card__buttons-container">
				<SecondaryButton
					parentClass="block-card"
					modClass={['']}
					handler={devHandler}
				>
					Выбрать
			</SecondaryButton>
			</div>



		</div >

	)
}

export default withRouter(BlockCard)