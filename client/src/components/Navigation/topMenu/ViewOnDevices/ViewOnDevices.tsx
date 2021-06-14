import React, { useState } from 'react'
import './ViewOnDevices.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'

interface IViewOnDevices {
	parentClass?: string
}

const ViewOnDevices: React.FC<IViewOnDevices> = ({ parentClass }) => {

	const classes = useCreateClassName('view-on-devices', parentClass)

	const [activeItem, setActiveItem] = useState<number>(0)

	const deviceItems: string[] = ['Смартфон', 'Планшет', 'Компьютер']

	const itemHandler = (index: number) => {
		setActiveItem(index)
		// ? Здесь будем запрашивать из базы данных и выводить нужные карточки
	}


	return (
		<div className={classes}>

			{deviceItems.map((i, index) => {
				return (
					<React.Fragment key={'view-on-devices' + index}>
					{ index !== 0 && <div className="view-on-devices__devider"></div> }
					<div
						className={index === activeItem ? 'view-on-devices__button view-on-devices__button_active' : 'view-on-devices__button'}
						onClick={() => itemHandler(index)}
					>
						{i}
					</div>			
					</React.Fragment>
				)
			})}

		</div>
	)
}

export default ViewOnDevices