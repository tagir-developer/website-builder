import React, { useEffect, useState } from 'react'
import './BlockConfigMenu.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import TitleWithCloseBtn from '../TitleWithCloseBtn/TitleWithCloseBtn'

interface IBlockConfigMenu {
	parentClass?: string
	modClass?: string[]
	closeHandler: (param?: any) => void

}

const BlockConfigMenu: React.FC<IBlockConfigMenu> = ({ parentClass, modClass, closeHandler }) => {

	const blockConfigMenuClasses = useCreateClassName('block-configs-menu', parentClass, modClass)


	return (
		<div className={blockConfigMenuClasses}>

			<TitleWithCloseBtn title="Настройки блока" closeHandler={closeHandler} />

			{/* {menuItems.map((i, index) => {
				return (
					<div
						key={index}
						className={index === activeItem ? "block-configs-menu__item block-configs-menu__item_active" : "block-configs-menu__item"}
						onClick={() => itemHandler(index)}
					>
						{i}
					</div>
				)
			})} */}


		</div>
	)
}

export default BlockConfigMenu