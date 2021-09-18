import React, { ComponentType } from "react"
import dynamic from 'next/dynamic'
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../components/UILibrary/themes/themes"
import MainLayout from "../../components/HOC/MainLayout/MainLayout"
import UserScripts from "../../components/Another/UserScripts/UserScripts"
import { GetServerSideProps } from "next"

const stringData: string = '[{"blockPath":"menu/Menu1/Menu1","blockIsHidden":false,"blockConfigs":{"menuColor":"#000","textColor":"#fff","activeItemColor":"#383838","activeItemTextColor":"#ffa32b","hiddenOnDevice":[]},"blockContent":{"menuItems":[{"title":"Главная","link":"/orange"},{"title":"Апельсин","link":"/orange/page-2"}]}},{"blockPath":"headers/Header1/Header1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"buttonBackground":"#ca4a00","blockAlign":"center","titleFontSize":"300%"},"blockContent":{"titleText":"Заголовок блока","descriptionText":"Какой-то текст описывающий свойства продукта или услуги","buttonText":"Кнопка"}},{"blockPath":"headers/Header2/Header2","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"buttonBackground":"#7dca00","blockAlign":"center","titleFontSize":"400%","buttonAnimation":"scale","titleColor":"#004223"},"blockContent":{"titleText":"Заголовок блока 2","descriptionText":"Какой-то текст описывающий свойства продукта или услуги","buttonText":"Кнопка","backgroundImage":"/images/blocks/default/headers/1/header1content.jpg"}},{"blockPath":"form/Form1/Form1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"backgroundColor":"#000","formColor":"#fff","titleColor":"#fff","titleSize":"200%","buttonBackground":"#ff8300","buttonAnimation":"scale","buttonTextColor":"#fff"},"blockContent":{"titleText":"Заголовок формы апельсин","firstInputText":"Введите имя","secondInputText":"Введите телефон","buttonText":"Текст кнопки","formName":"Апельсиновая форма"}}]'
const pageBlocks: IPageBlock[] = JSON.parse(stringData)

const blockList: any = pageBlocks.map((i, index) => {
	const BlockComponent: ComponentType<any> = dynamic(() => import(/* webpackChunkName: "notfound" */'../../components/UILibrary/' + i.blockPath))
	return (
		<BlockComponent
			key={index}
			blockConfigs={i.blockConfigs}
			blockContent={i.blockContent}
			blockIsHidden={i.blockIsHidden}
			hideBlock={true}
			projectId={i.projectId}
		/>
	)
})

// const createBlockList = (blocks: any[]) => {
// 	return blocks.map((i, index) => {
// 		const BlockComponent: ComponentType<any> = dynamic(() => import('../../components/UILibrary/' + i.blockPath))
// 		return (
// 			<BlockComponent
// 				key={index}
// 				blockConfigs={i.blockConfigs}
// 				blockContent={i.blockContent}
// 				blockIsHidden={i.blockIsHidden}
// 			/>
// 		)
// 	})
// } 

interface IUserPage {
	pageData: IPageData
}

interface IPageData {
	pageName: string
	additionalScripts: string
	projectFontConfigs: {
		fontFamily: string
		title: {
			fontSize: string
			fontWeight: string
		},
		text: {
			fontSize: string
		}
	}
	pageBlocks: IPageBlock[]
}

interface IPageBlock {
	blockPath: string
	blockIsHidden: boolean
	blockConfigs: any
	blockContent: any
	projectId: string
}


const UserPage: React.FC<IUserPage> = ({ pageData }) => {

	return (
		<>
			<MainLayout title={pageData.pageName}>

				<UserScripts scripts={pageData.additionalScripts} />

				<div className="wrapper-test">
					<ThemeProvider theme={myTheme}>
						{/* {createBlockList(pageData.pageBlocks)} */}
						{blockList}
					</ThemeProvider>
				</div>

			</MainLayout>

			<style jsx>{`
				.wrapper-test {
					font-family: ${pageData.projectFontConfigs.fontFamily};
					font-size: ${pageData.projectFontConfigs.text.fontSize};
				}
				h1, h2, h3, h4, h5 {
					font-weight: ${pageData.projectFontConfigs.title.fontWeight};
				}
				h1 {
					font-size: ${pageData.projectFontConfigs.title.fontSize};
					color: red;
				}
				h2 {
					font-size: ${(parseInt(pageData.projectFontConfigs.title.fontSize) * 0.8) + 'px'};
				}
				h3 {
					font-size: ${(parseInt(pageData.projectFontConfigs.title.fontSize) * 0.6) + 'px'};
				}
				h4 {
					font-size: ${(parseInt(pageData.projectFontConfigs.title.fontSize) * 0.4) + 'px'};
				}
				h5 {
					font-size: ${(parseInt(pageData.projectFontConfigs.title.fontSize) * 0.3) + 'px'};
				}
			`}</style>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {

	const projectId = '61448479f118f721606fa206'
	const pageId = '614484ecf118f721606fa20c'

	const res = await fetch(`http://localhost:5000/api/projects/get-page-data/${projectId}/${pageId}`)
	const pageData = await res.json()

	return { props: { pageData } }
}

export default UserPage