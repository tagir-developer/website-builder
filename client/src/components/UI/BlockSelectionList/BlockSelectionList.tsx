import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import BlockCard from '../BlockCard/BlockCard'
import './BlockSelectionList.scss'
import block1 from './img/block-1.jpg'
import block2 from './img/block-2.jpg'
import block3 from './img/block-3.jpg'

interface IBlockSelectionList {
	parentClass?: string
	handler?: any
}

const BlockSelectionList: React.FC<IBlockSelectionList> = ({ parentClass, handler }) => {

	const blockSelectionListClasses = useCreateClassName('block-selection-list', parentClass)

	const blocks = [
		{
			blockId: '6231233',
			title: 'Шапка с длиным заголовком (вариант 1)',
			img: block1
		},
		{
			blockId: '1213143',
			title: 'Шапка (вариант 2)',
			img: block2
		},
		{
			blockId: '1231223',
			title: 'Шапка (вариант 3)',
			img: block3
		},
	]


	return (
		<div className={blockSelectionListClasses}>
			{blocks.map((i, index) => (
				<BlockCard
					key={'block-card' + index}
					parentClass="block-selection-list"
					title={i.title}
					img={i.img}
					blockId={i.blockId}
				/>
			))}
			
		</div>
	)
}

export default BlockSelectionList