import React, { ComponentType } from "react"
import dynamic from 'next/dynamic'
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../components/UILibrary/themes/themes"
import MainLayout from "../../components/HOC/MainLayout/MainLayout"
import Script from 'next/script'
import UserScripts from "../../components/Another/UserScripts/UserScripts"

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

const testStr: string = `
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

<script async src="aSAsASasAS">
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/50173081" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<script>Проверка регулярки</script>
asd
<script ыва выа  src="https://www.googletagmanager.com/gtag/js?id=UA-86345135-1"></script>
<image async src="https://www.googletagmanager.com/gtag/js?id=UA-86345135-1"></script>
<image src="https://www.googletagmanager.com/gtag/js?id=UA-86345135-1"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-86345135-1"></script>
	sdfsdf
	<script>поп
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	
	gtag('config', 'UA-86345135-1');
</script>
asdasd

asdasdasd
   <script src="https://www.googletagmanager.com/gtag/js?id=UA-86345135-1"></script>
asdasdasd

`

// const testStr: string = `

// <script>Проверка регулярки</script>
// `

const blocks: any = page.pageBlocks.map((i, index) => {
	const BlockComponent: ComponentType<any> = dynamic(() => import('../../components/UILibrary/' + i.blockPath))

	// const arr: RegExpMatchArray | null = testStr.match(/(?<=<script.*>).+(?=<\/script>)/gm)
	// const arr: RegExpMatchArray | null = testStr.match(/Про/g)

	// console.log(arr)

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

				{/* <UserScripts scripts={page.additionalScripts} /> */}
				<UserScripts scripts={testStr} />

				<div className="wrapper-test">
					<ThemeProvider theme={myTheme}>
						{blocks}
					</ThemeProvider>
				</div>
				{/* <Script
					dangerouslySetInnerHTML={{
						__html: `
						console.log('Test 777');
						`
					}}
				/> */}
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