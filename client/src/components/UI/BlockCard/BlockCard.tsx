import React from 'react'
import './BlockCard.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'

interface IBlockCard {
	parentClass?: string
	modClass?: string[]
	title: string
	img: string
	blockId: string
	closePopups: Function
}

const BlockCard: React.FC<IBlockCard> = ({ parentClass, modClass, title, img, blockId, closePopups }) => {

	const BlockCardClasses = useCreateClassName('block-card', parentClass, modClass)
	const { activePage } = useTypedSelector(state => state.page)
	const { addBlockToPage, saveBlocksInDB } = useActions()

	const devHandler = async () => {
		closePopups()
		await addBlockToPage(blockId)
		if (activePage.autosavePage) saveBlocksInDB()
	}

	return (
		<div className={BlockCardClasses}>

			<div className="block-card__image-container">
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

export default BlockCard