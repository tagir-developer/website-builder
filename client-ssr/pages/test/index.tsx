import React, { ComponentType, useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../components/UILibrary/themes/themes"
import MainLayout from "../../components/HOC/MainLayout/MainLayout"
import Script from 'next/script'
import UserScripts from "../../components/Another/UserScripts/UserScripts"
import { useUserScripts } from "../../hooks/useUserScript.hook"
import { GetServerSideProps } from "next"
import ReactDOMServer from 'react-dom/server'

const page = {
	pageName: "Название страницы",
	additionalScripts: `
	<!-- Yandex.Metrika counter 1111111111111 -->
	<script type="text/javascript" >
	   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
	   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
	   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
	
	   ym(50173081, "init", {
			clickmap:true,
			trackLinks:true,
			accurateTrackBounce:true
	   });
	</script>
	<noscript><div><img src="https://mc.yandex.ru/watch/50173081" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
	<!-- /Yandex.Metrika counter -->

	<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-86345135-1"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-86345135-1');
	</script>
	`,
	projectFontConfigs: {
		fontFamily: 'Helvetica',
		title: {
			fontSize: '60px',
			fontWeight: 'bold'
		},
		text: {
			fontSize: '16px'
		}
	},
	pageBlocks: [
		{
			blockPath: "headers/Header2/Header2",
			blockIsHidden: false,
			blockConfigs: {
				hiddenOnDevice: [],
				buttonBackground: "#7dca00",
				blockAlign: "center",
				titleFontSize: "300%"
			},
			blockContent: {
				titleText: "Первый",
				descriptionText: "Какой-то текст описывающий свойства продукта или услуги",
				buttonText: "Кнопка"
			}
		},
		{
			blockPath: "headers/Header1/Header1",
			blockIsHidden: false,
			blockConfigs: {
				hiddenOnDevice: [],
				buttonBackground: "#ca4a00",
				blockAlign: "center",
				titleFontSize: "300%"
			},
			blockContent: {
				titleText: "Второй",
				descriptionText: "Какой-то текст описывающий свойства продукта или услуги",
				buttonText: "Кнопка"
			}
		}
	]

}

// const blocks: any = page.pageBlocks.map((i, index) => {
// 	const BlockComponent: ComponentType<any> = dynamic(() => import('../../components/UILibrary/' + i.blockPath))
// 	return (
// 		<BlockComponent
// 			key={index}
// 			blockConfigs={i.blockConfigs}
// 			blockContent={i.blockContent}
// 			blockIsHidden={i.blockIsHidden}
// 		/>
// 	)
// })

// const blocks = () => {
// 	const res = page.pageBlocks.map((i, index) => {
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

// 	return res
// } 

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

// const paths = [
// 	"headers/Header2/Header2",
// 	"headers/Header1/Header1",
// 	"headers/Header2/Header2"
// ]

// const blocks: any = paths.map((path, index) => {
// 	const BlockComponent: ComponentType<any> = dynamic(() => import('../../components/UILibrary/' + path))
// 	return (
// 		<BlockComponent
// 			key={index}
// 		/>
// 	)
// })

const test = [
	{
		blockPath: "headers/Header2/Header2",
		blockIsHidden: false,
		blockConfigs: {
			hiddenOnDevice: [],
			buttonBackground: "#7dca00",
			blockAlign: "center",
			titleFontSize: "300%"
		},
		blockContent: {
			titleText: "Первый",
			descriptionText: "Какой-то текст описывающий свойства продукта или услуги",
			buttonText: "Кнопка"
		}
	},
	{
		blockPath: "headers/Header1/Header1",
		blockIsHidden: false,
		blockConfigs: {
			hiddenOnDevice: [],
			buttonBackground: "#ca4a00",
			blockAlign: "center",
			titleFontSize: "300%"
		},
		blockContent: {
			titleText: "Второй",
			descriptionText: "Какой-то текст описывающий свойства продукта или услуги",
			buttonText: "Кнопка"
		}
	}
]

const test2 = JSON.stringify(test)

const blocks: any[] = JSON.parse(test2)

const blockList: any = blocks.map((i, index) => {
	const BlockComponent: ComponentType<any> = dynamic(() => import('../../components/UILibrary/' + i.blockPath))
	return (
		<BlockComponent
			key={index}
			blockConfigs={i.blockConfigs}
			blockContent={i.blockContent}
			blockIsHidden={i.blockIsHidden}
		/>
	)
})

interface IUserPage {
	pageData: IPageData
	blockList: any
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
}


const UserPage: React.FC<IUserPage> = ({ pageData }) => {

	// const blockList: any = blocks.map((i, index) => {
	// 	const BlockComponent: ComponentType<any> = dynamic(() => import('../../components/UILibrary/' + i.blockPath))
	// 	return (
	// 		<BlockComponent
	// 			key={index}
	// 			blockConfigs={i.blockConfigs}
	// 			blockContent={i.blockContent}
	// 			blockIsHidden={i.blockIsHidden}
	// 		/>
	// 	)
	// })


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

	// const projectId = 'customUserProjectId'
	// const pageId = 'customUserPageId'

	const projectId = '6133aa7fb2ccd13e3c8c5a0e'
	const pageId = '61349d9a9fefec0bc8f0fbd1'

	const res = await fetch(`http://localhost:5000/api/projects/get-page-data/${projectId}/${pageId}`)
	const pageData: IPageData = await res.json()

	return { props: { pageData } }
}

// export const getServerSideProps: GetServerSideProps = async () => {

// 	const res = await fetch('http://localhost:5000/api/projects/get-page-data', {
// 		method: 'POST',
// 		headers: {'Content-Type': 'application/json;charset=utf-8'},
// 		body: JSON.stringify({user: 'Макс'})
// 	})
// 	const pageData = await res.json()

// 	return { props: { pageData } }
// }

export default UserPage