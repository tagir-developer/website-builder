import React, { ComponentType } from "react"
import dynamic from 'next/dynamic'
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../components/UILibrary/themes/themes"
import MainLayout from "../../components/HOC/MainLayout/MainLayout"

const page = {
	pageName: "О нас",
	additionalScripts: "<script>Какой-то скрипт</script>",
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

const blocks: any = page.pageBlocks.map((i, index) => {
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

const UserPage = () => {
	return (
		<>
			<MainLayout title={page.pageName}>
				<div className="wrapper-test">
					<ThemeProvider theme={myTheme}>
						{blocks}
					</ThemeProvider>
				</div>
			</MainLayout>

			<style jsx>{`
				.wrapper-test {
					font-family: ${page.projectFontConfigs.fontFamily};
					font-size: ${page.projectFontConfigs.text.fontSize};
				}
				h1, h2, h3, h4, h5 {
					font-weight: ${page.projectFontConfigs.title.fontWeight};
				}
				h1 {
					font-size: ${page.projectFontConfigs.title.fontSize};
					color: red;
				}
				h2 {
					font-size: ${(parseInt(page.projectFontConfigs.title.fontSize) * 0.8) + 'px'};
				}
				h3 {
					font-size: ${(parseInt(page.projectFontConfigs.title.fontSize) * 0.6) + 'px'};
				}
				h4 {
					font-size: ${(parseInt(page.projectFontConfigs.title.fontSize) * 0.4) + 'px'};
				}
				h5 {
					font-size: ${(parseInt(page.projectFontConfigs.title.fontSize) * 0.3) + 'px'};
				}
			`}</style>
		</>
	)
}

export default UserPage