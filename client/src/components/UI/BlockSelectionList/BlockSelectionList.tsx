import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useTypedSelector } from '../../../hooks/reduxHooks'
import BlockCard from '../BlockCard/BlockCard'
import Loader from '../Loader/Loader'
import './BlockSelectionList.scss'

interface IBlockSelectionList {
	parentClass?: string
	handler?: any
	closePopups: Function
}

const BlockSelectionList: React.FC<IBlockSelectionList> = ({ parentClass, handler, closePopups }) => {

	const blockSelectionListClasses = useCreateClassName('block-selection-list', parentClass)
	const { blockCards, loading } = useTypedSelector(state => state.block)

	return (
		<div className={blockSelectionListClasses}>

			{loading
				? <Loader parentClass="block-selection-list"/>
				: blockCards.map(i => (
					<BlockCard
						key={i.id}
						parentClass="block-selection-list"
						blockId={i.id}
						title={i.title}
						img={i.preview}
						closePopups={closePopups}
					/>
				))
			}
			{/* {blockCards.map(i => (
				<BlockCard
					key={i.id}
					parentClass="block-selection-list"
					blockId={i.id}
					title={i.title}
					img={i.preview}
					closePopups={closePopups}
				/>
			))} */}

		</div>
	)
}

export default BlockSelectionList