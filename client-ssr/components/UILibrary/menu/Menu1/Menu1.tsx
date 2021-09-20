import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { BasicComponent } from '../../commonStyledComponents/BasicComponent/BasicComponent'
import { ICommonBlockProps } from '../../commonStyledComponents/commonTypes'
import { StyledFlex } from '../../commonStyledComponents/StyledFlex/StyledFlex'
import { StyledOverlay } from '../../commonStyledComponents/StyledOverlay/StyledOverlay'
import { IMenu1Configs, IMenu1Content, IMenuBar, IMenuBarItem, IShowHideMenuBtn } from './types/menu1types'

const StyledMenu1 = styled(BasicComponent) <any>`
	width: 100%;
	${props => !props.hideBlock && css<any>`
 		height: 250px;
		display: flex;
		align-items: center;
		background-color: rgb(231, 239, 246);
		fill: rgb(209, 225, 237);
		background-size: 185px 185px;
		background-repeat: repeat;
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' fill-opacity='1' style='enable-background:new 0 0 500 500'%3E%3Cstyle%3E .st2{fill:rgb(209, 225, 237)} %3C/style%3E%3Cg style='display:none'%3E%3Cpath style='display:inline;fill:%23414042' d='M-8.3-5.7h520.7V511H-8.3z' id='Layer_2'/%3E%3C/g%3E%3Cg id='Layer_1'%3E%3Cpath transform='rotate(-45.001 0 .055)' class='st2' d='M-453.7-3.7h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 31.25 31.306)' class='st2' d='M-422.5 27.6H485v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 62.5 62.556)' class='st2' d='M-391.2 58.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 93.75 93.807)' class='st2' d='M-360 90.1h907.5v7.5H-360z'/%3E%3Cpath transform='rotate(-45.001 125 125.057)' class='st2' d='M-328.7 121.3h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 156.249 156.308)' class='st2' d='M-297.5 152.6H610v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 187.499 187.558)' class='st2' d='M-266.2 183.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 218.749 218.809)' class='st2' d='M-235 215.1h907.5v7.5H-235z'/%3E%3Cpath transform='rotate(-45.001 249.998 250.06)' class='st2' d='M-203.7 246.3h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 281.248 281.31)' class='st2' d='M-172.5 277.6H735v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 312.498 312.56)' class='st2' d='M-141.2 308.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 343.748 343.81)' class='st2' d='M-110 340.1h907.5v7.5H-110z'/%3E%3Cpath transform='rotate(-45.001 374.997 375.061)' class='st2' d='M-78.7 371.3h907.5v7.5H-78.7z'/%3E%3Cpath transform='rotate(-45.001 406.247 406.312)' class='st2' d='M-47.5 402.6H860v7.5H-47.5z'/%3E%3Cpath transform='rotate(-45.001 437.497 437.562)' class='st2' d='M-16.2 433.8h907.5v7.5H-16.2z'/%3E%3Cpath transform='rotate(-45.001 468.747 468.813)' class='st2' d='M15 465.1h907.5v7.5H15z'/%3E%3Cpath transform='rotate(-45.001 499.997 500.064)' class='st2' d='M46.3 496.3h907.5v7.5H46.3z'/%3E%3C/g%3E%3C/svg%3E");
 	`}	
	position: relative;
	box-sizing: border-box;
	font-size: 1em;

	@media ${props => props.theme.media.phone} {
		font-size: 0.8em;
	}

	@media ${props => props.theme.media.tablete} {
		font-size: 0.9em;
	}

`

const MenuBar = styled.div<IMenuBar>`
	position: relative;
	width: 100%;
	height: 60px;	
	background: ${props => props.menuColor};
	color: ${props => props.textColor};

	@media ${props => props.theme.media.phone} {
		font-size: 0.8em;
	}

	@media ${props => props.theme.media.tablete} {
		font-size: 0.9em;
	}

`

const ItemsPCWrapper = styled.div<any>`
	@media ${props => props.theme.media.phone} {
		display: none;
	}

	@media ${props => props.theme.media.tablete} {
		display: none;
	}
`

const ItemsMobileWrapper = styled.div<any>`
	@media ${props => props.theme.media.pc} {
		display: none;
	}

`

const ShowHideMenuBtn = styled.div<IShowHideMenuBtn>`
	position: absolute;
	box-sizing: border-box;
	top: 0;
	right: 5px;
	width: 60px;
	height: 60px;
	color: ${props => props.textColor};
	font-size: 35px;
	text-align: center;
	padding-top: 12px;
`

const MenuItem = styled.a<IMenuBarItem>`
	display: block;
	text-decoration: none;
	box-sizing: border-box;
	overflow: hidden;
	min-width: 200px;
	max-width: 300px;
	height: 60px;
	text-align: center;
	line-height: 60px;
	padding: 0 15px;
	color: ${props => props.textColor};
	&:hover {
		color: ${props => props.activeItemTextColor};
		background: ${props => props.activeItemColor};
	}
`

const DropDownList = styled.div<any>`
	position: absolute;
	top: 60px;
	width: 100%;
	background: white;
	transition: all 0.5s ease-in-out;
	${props => props.showList && css<any>`
 		transform: scaleY(1);
		transform-origin: top;
 	`}
	 ${props => !props.showList && css<any>`
	 	transform: scaleY(0);
		 transform-origin: top;
 	`}		
`

const DropDownMenuItem = styled.a<any>`
	display: block;
	width: 100%;
	height: 60px;
	text-align: center;
	line-height: 60px;
	color: black;
	text-decoration: none;
	font-size: 140%;
	border-bottom: 2px solid #e4e4e4;
`

interface IMenu1 extends ICommonBlockProps {
	blockConfigs: IMenu1Configs
	blockContent: IMenu1Content
}

const Menu1: React.FC<IMenu1> = ({ blockConfigs, blockContent, blockIsHidden, hideBlock = false }) => {

	const [isOpen, setIsOpem] = useState(false)

	return (
		<StyledMenu1
			blockIsHidden={blockIsHidden}
			devices={blockConfigs.hiddenOnDevice}
			hideBlock={hideBlock}
		>
			<StyledOverlay
				devices={blockConfigs.hiddenOnDevice}
				blockIsHidden={blockIsHidden}
			/>
			<MenuBar
				menuColor={blockConfigs.menuColor}
				textColor={blockConfigs.textColor}
			>
				<ItemsPCWrapper>
					<StyledFlex
						direction={"row"}
						align={"center"}
						justify={"space-around"}
					>
						{!!blockContent.menuItems.length
							? blockContent.menuItems.map((i, index) => {
								return (
									<MenuItem
										key={index}
										href={i.link}
										textColor={blockConfigs.textColor}
										activeItemColor={blockConfigs.activeItemColor}
										activeItemTextColor={blockConfigs.activeItemTextColor}
									>
										{i.title}
									</MenuItem>
								)
							})
							: null
						}
					</StyledFlex>
				</ItemsPCWrapper>
				<ItemsMobileWrapper>
					<ShowHideMenuBtn
						onClick={() => setIsOpem(prev => !prev)}
						textColor={blockConfigs.textColor}
					>
						{isOpen ? <span className="icon-close-menu" /> : <span className="icon-show-menu" />}
					</ShowHideMenuBtn>
					<DropDownList showList={isOpen}>
						{!!blockContent.menuItems.length
							? blockContent.menuItems.map((i, index) => {
								return (
									<DropDownMenuItem
										key={index}
										href={i.link}
										activeItemColor={blockConfigs.activeItemColor}
										activeItemTextColor={blockConfigs.activeItemTextColor}
									>
										{i.title}
									</DropDownMenuItem>
								)
							})
							: null
						}
					</DropDownList>
				</ItemsMobileWrapper>
			</MenuBar>
		</StyledMenu1>
	)
}

export default Menu1