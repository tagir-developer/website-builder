import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './TitleWithCloseBtn.scss'

interface ITitleWithCloseBtn {
	parentClass?: string
	modClass?: string[]
	title: string
	closeHandler: (param?: any) => void

}

const TitleWithCloseBtn: React.FC<ITitleWithCloseBtn> = ({ parentClass, modClass, title, closeHandler }) => {

	const classes = useCreateClassName('title-with-close-btn', parentClass, modClass)

	return (
		<div className={classes}>
			<div className="title-with-close-btn__row">
				<div className="title-with-close-btn__col-title">{title}</div>
				<div className="title-with-close-btn__col-close-btn">
					<div className="title-with-close-btn__close-btn" onClick={closeHandler}></div>
				</div>
			</div>
			<div className="title-with-close-btn__devider"></div>
		</div>
	)
}

export default TitleWithCloseBtn