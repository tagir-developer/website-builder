import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './BlockMoveBtn.scss'

interface IBlockMoveBtn {
	parentClass?: string
	modClass?: string[]
	handler: (param?: any) => void
}

const BlockMoveBtn: React.FC<IBlockMoveBtn> = ({ parentClass, modClass, handler }) => {

	const blockMoveBtnClasses = useCreateClassName('block-move-btn', parentClass, modClass)

	return (
		<div className={blockMoveBtnClasses}>
			<div 
				className="block-move-btn__move-btn block-move-btn__move-btn_up-icon"
				onClick={handler}
			>
				<span className="block-move-btn__tooltip">Сдвинуть блок вверх</span>
			</div>
			<div className="block-move-btn__devider"></div>
			<div 
				className="block-move-btn__move-btn block-move-btn__move-btn_down-icon"
				onClick={handler}
			>
				<span className="block-move-btn__tooltip">Сдвинуть блок вниз</span>
			</div>	
		</div>
	)
}

export default BlockMoveBtn