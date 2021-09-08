import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './ImgMoveBtn.scss'

interface IImgMoveBtn {
	parentClass?: string
	modClass?: string[]
	handler: (param: 'up' | 'down') => void
	tooltipTextUp?: string
	tooltipTextDown?: string
}

const ImgMoveBtn: React.FC<IImgMoveBtn> = ({ parentClass, modClass, handler, tooltipTextUp, tooltipTextDown }) => {

	const ImgMoveBtnClasses = useCreateClassName('img-move-btn', parentClass, modClass)

	return (
		<div className={ImgMoveBtnClasses}>
			<div 
				className="img-move-btn__move-btn img-move-btn__move-btn_up-icon"
				onClick={() => handler('up')}
			>
				<span className="img-move-btn__tooltip">{tooltipTextUp ? tooltipTextUp : 'Сдвинуть вверх'}</span>
			</div>
			<div className="img-move-btn__devider"></div>
			<div 
				className="img-move-btn__move-btn img-move-btn__move-btn_down-icon"
				onClick={() => handler('down')}
			>
				<span className="img-move-btn__tooltip">{tooltipTextDown ? tooltipTextDown : 'Сдвинуть вниз'}</span>
			</div>	
		</div>
	)
}

export default ImgMoveBtn