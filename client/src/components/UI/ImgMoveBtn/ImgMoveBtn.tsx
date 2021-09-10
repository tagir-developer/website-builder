import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './ImgMoveBtn.scss'

interface IImgMoveBtn {
	parentClass?: string
	modClass?: string[]
	handler: (index: number, moveArrow: 'up' | 'down') => void
	tooltipTextUp?: string
	tooltipTextDown?: string
	cardId: number
}

const ImgMoveBtn: React.FC<IImgMoveBtn> = ({ parentClass, modClass, handler, tooltipTextUp, tooltipTextDown, cardId }) => {

	const ImgMoveBtnClasses = useCreateClassName('img-move-btn', parentClass, modClass)

	return (
		<div className={ImgMoveBtnClasses}>
			<div 
				className="img-move-btn__move-btn img-move-btn__move-btn_up-icon"
				onClick={() => handler(cardId, 'up')}
			>
				<span className="img-move-btn__tooltip">{tooltipTextUp ? tooltipTextUp : 'Сдвинуть вверх'}</span>
			</div>
			<div className="img-move-btn__devider"></div>
			<div 
				className="img-move-btn__move-btn img-move-btn__move-btn_down-icon"
				onClick={() => handler(cardId, 'down')}
			>
				<span className="img-move-btn__tooltip">{tooltipTextDown ? tooltipTextDown : 'Сдвинуть вниз'}</span>
			</div>	
		</div>
	)
}

export default ImgMoveBtn