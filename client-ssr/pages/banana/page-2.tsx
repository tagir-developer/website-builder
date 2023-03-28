import React, { ComponentType } from "react"
import dynamic from 'next/dynamic'
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../components/UILibrary/themes/themes"
import MainLayout from "../../components/HOC/MainLayout/MainLayout"
import UserScripts from "../../components/Another/UserScripts/UserScripts"
import { GetServerSideProps } from "next"

const stringData: string = '[{"blockPath":"menu/Menu1/Menu1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"menuColor":"#6dc518","textColor":"#fff","activeItemColor":"#94cb1c","activeItemTextColor":"#f9f9f9"},"blockContent":{"menuItems":[{"title":"Для лица","link":"/orange"},{"title":"Для тела","link":"/orange"},{"title":"Для волос","link":"/orange"},{"title":"Контакты","link":"/orange"}]},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"headers/Header2/Header2","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"blockAlign":"center","buttonBackground":"#7dca00","buttonAnimation":"scale","titleFontSize":"400%","titleColor":"#007719"},"blockContent":{"titleText":"Вкусные бананы","descriptionText":"Натуральная косметика позволяет защитить кожу лица и тела от пересыхания, значительно улучшить ее состояние, избавиться от многочисленных проблем, всегда выглядеть безукоризненно и при этом не навредить собственному организму.","buttonText":"Купить","backgroundImage":"http://localhost:5000/images/user-project-files/orange/2021-09-21T12-39-56.000Z-cosmetic-1798154_1920.jpg"},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"content/Content1/Content1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"blockAlign":"center","backgroundColor":"#ffffff","titleColor":"#3b7d02","textColor":"#434343"},"blockContent":{"titleText":"О бренде","contentText":"Фактически натуральная косметика — это косметика, в составе которой используются компоненты естественного (природного) происхождения. Это могут быть эфирные масла (вытяжки из растений), морская соль, даже куриный жир (но чаще, например, пчелиный воск) — все то, что не было синтезировано в лабораториях. Проблема в том, что термин «натуральная косметика» фактически никак не регулируется. Это значит, что помимо натуральных в составе могут присутствовать и синтетические компоненты, причем их не обязательно будет меньше — никаких правил о процентном соотношении нет."},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"content/Content1/Content1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"blockAlign":"center","backgroundColor":"#dafbbb","titleColor":"#3b7d02","textColor":"#434343"},"blockContent":{"titleText":"Что такое органическая косметика","contentText":"Термин «органический» относится в первую очередь к тому, в каких условиях были выращены упакованные в баночку ингредиенты. Никаких пестицидов и химических удобрений в случае с растениями и никаких антибиотиков и гормонов роста, если речь идет о продуктах животного происхождения. Но и здесь маркировка «органический» не означает, что продукт органический на 100%. К счастью, эта косметика сертифицируется: разные сертификаты подтверждают разное количество органических компонентов в составе. Например, Cosmos и FI-Natura требуют, чтобы 95% ингредиентов были органического происхождения. FI-Natura также подразумевает, что остальные 5% в составе — это натуральные (не синтетические) ингредиенты. Кроме того, часто, чтобы получить такой сертификат, косметика не должна тестироваться на животных и включать в состав противоречивые химические вещества, парабены и фталаты, а также синтетические красители или ароматизаторы. Другие маркировки, которыми может быть отмечена синтетическая косметика: BDIH, ECOCERT, DEMETER, ICADA, NSF и USDA."},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"content/Content1/Content1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"blockAlign":"center","backgroundColor":"#ffffff","titleColor":"#3b7d02","textColor":"#434343"},"blockContent":{"titleText":"Широкий выбор новинок для вас","contentText":"Интернет-магазин натуральной косметики — это разнообразие средств по уходу за волосами и телом, лицом, лучшие гели, шампуни и дезодоранты для мужчин и женщин, полностью безопасная продукция для самых маленьких. Мы смогли собрать в одном каталоге биокосметики товары известных производителей, брендов, которые успели завоевать доверие покупателей не только в нашей стране, но также в других странах на всех континентах. Вся продукция прошла необходимые испытания."},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"form/Form1/Form1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"backgroundColor":"#ffffff","formColor":"#fff","titleColor":"#528503","titleSize":"200%","buttonBackground":"#73af15","buttonAnimation":"scale","buttonTextColor":"#fff"},"blockContent":{"titleText":"Получить консультацию!","firstInputText":"Введите имя","secondInputText":"Введите телефон","buttonText":"Позвоните мне","formName":"Форма блока с id:6149d226cc05f506c8ac0204"},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"content/Content1/Content1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"blockAlign":"flex-end","backgroundColor":"#224603","titleColor":"#ccefb5","textColor":"#fff"},"blockContent":{"titleText":"Контакты","contentText":"Email: natural@mail.ru"},"projectId":"6422cd99b670c3341ca28bce"}]'
const pageBlocks: IPageBlock[] = JSON.parse(stringData)

const blockList: any = pageBlocks.map((i, index) => {
	const BlockComponent: ComponentType<any> = dynamic(() => import('../../components/UILibrary/' + i.blockPath))
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

	const projectId = '6422cd99b670c3341ca28bce'
	const pageId = '6422d03fc48ca2190024b7b0'

	const res = await fetch(`http://localhost:5000/api/projects/get-page-data/${projectId}/${pageId}`)
	const pageData = await res.json()

	return { props: { pageData } }
}

export default UserPage