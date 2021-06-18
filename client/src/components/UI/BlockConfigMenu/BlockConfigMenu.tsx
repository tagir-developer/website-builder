import React, { Suspense } from 'react'
import './BlockConfigMenu.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import TitleWithCloseBtn from '../TitleWithCloseBtn/TitleWithCloseBtn'

interface IBlockConfigMenu {
	parentClass?: string
	modClass?: string[]
	closeHandler: (param?: any) => void
	blockId?: string
	title: string
	type: 'Contents' | 'Configs'
}

const BlockConfigMenu: React.FC<IBlockConfigMenu> = ({ parentClass, modClass, closeHandler, blockId, title, type }) => {

	const blockConfigMenuClasses = useCreateClassName('block-configs-menu', parentClass, modClass)

	const activeBlock = {
		blockId: 'asdadasdassdfsdfd',
		path: 'headers/Header1/Header1',
		// configPath: 'headers/Header1/Header1Configs',
		styles: {
			titleStyles: { fontSize: '26px', color: 'white' },
			buttonStyles: { fontSize: '18px', color: 'white' }
		}
	} // ! Получаем активный блок, используя значение id активного блока (пока заглушка)

	const BlockConfigs = React.lazy(() => import('../../UILIbrary/' + activeBlock.path + type)) // ! Используя динамический импорт, записываем в переменную компонент с конфигурациями для конкретного блока

	return (
		<div className={blockConfigMenuClasses}>

			<TitleWithCloseBtn title={title} closeHandler={closeHandler} />

			<Suspense fallback={<div>Загрузка...</div>}>
				<BlockConfigs />
			</Suspense>

		</div>
	)
}

export default BlockConfigMenu