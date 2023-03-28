import React, { ComponentType } from "react"
import dynamic from 'next/dynamic'
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../components/UILibrary/themes/themes"
import MainLayout from "../../components/HOC/MainLayout/MainLayout"
import UserScripts from "../../components/Another/UserScripts/UserScripts"
import { GetServerSideProps } from "next"

const stringData: string = '[{"blockPath":"menu/Menu1/Menu1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"menuColor":"#1c2a45","textColor":"#fff","activeItemColor":"#2f4671","activeItemTextColor":"#ffffff"},"blockContent":{"menuItems":[{"title":"О бананах","link":"/banana/page-2"}]},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"headers/Header2/Header2","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"blockAlign":"flex-start","buttonBackground":"#9b2eff","buttonAnimation":"shake","titleFontSize":"400%","titleColor":"#1c2a45"},"blockContent":{"titleText":"Продаем бананы!!!!!!!!!!","descriptionText":"Специализируемся на сложных коммерческих спорах в интересах крупного и среднего бизнеса, а также на банкротстве юридических лиц","buttonText":"Купить бананы","backgroundImage":"http://localhost:5000/images/user-project-files/lawyer/2021-09-21T07-38-26.620Z-gavel-3577255_1920.jpg"},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"content/Content1/Content1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"blockAlign":"center","backgroundColor":"#1c2a45","titleColor":"#ffffff","textColor":"#fff"},"blockContent":{"titleText":"О компании","contentText":"Специализируемся на сложных коммерческих спорах в интересах крупного и среднего бизнеса. За годы практики сумма защищенных активов превысила 4 млрд рублей.\\n\\nСреди наших клиентов присутствуют как крупные компании, уже зарекомендовавшие себя в своих отраслях, так и сравнительно \\"молодые\\" предприятия, только начинающие свое развитие. Индивидуальный подход к каждому проекту, с учетом актуальных идей и тенденций, помогает нам не только выигрывать судебные дела, но и формировать судебную практику.\\n\\nПрозрачная схема работы, понятная система расчетов, полная конфиденциальность – лишь малая часть преимуществ, которые Вы безусловно оцените, работая с нами.\\n\\nМы создаем компанию, которая не только совершает прорыв на рынке юридических услуг, но и вносит вклад в процветание бизнеса в России."},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"content/Content1/Content1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"blockAlign":"flex-start","backgroundColor":"#dedede","titleColor":"#232222","textColor":"#252424"},"blockContent":{"titleText":"Специализация","contentText":"Мы не хватаемся за все подряд, а концентрируемся на том, что у нас получается лучше, чем у других"},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"content/Content1/Content1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"blockAlign":"flex-end","backgroundColor":"#b7b7b7","titleColor":"#232222","textColor":"#252424"},"blockContent":{"titleText":"Опыт и квалификация","contentText":"5 лет обширной практики, более 150 выигранных дел, и мы не собираемся останавливаться на достигнутом"},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"content/Content1/Content1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"blockAlign":"flex-start","backgroundColor":"#dedede","titleColor":"#232222","textColor":"#252424"},"blockContent":{"titleText":"Комплексная экспертиза","contentText":"Наша команда обладает полным спектром компетенций, необходимых для защиты наших клиентов"},"projectId":"6422cd99b670c3341ca28bce"},{"blockPath":"form/Form1/Form1","blockIsHidden":false,"blockConfigs":{"hiddenOnDevice":[],"backgroundColor":"#1c2a45","formColor":"#fff","titleColor":"#fff","titleSize":"200%","buttonBackground":"#ff8300","buttonAnimation":"scale","buttonTextColor":"#fff"},"blockContent":{"titleText":"Оставьте заявку на консультацию","firstInputText":"Введите имя","secondInputText":"Введите телефон","buttonText":"Получить консультацию","formName":"Форма блока с id:6149911ecc05f506c8abffb6"},"projectId":"6422cd99b670c3341ca28bce"}]'
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
	const pageId = '6422cdb0b670c3341ca28bd4'

	const res = await fetch(`http://localhost:5000/api/projects/get-page-data/${projectId}/${pageId}`)
	const pageData = await res.json()

	return { props: { pageData } }
}

export default UserPage