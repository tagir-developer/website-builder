import { createGlobalStyle } from 'styled-components'

interface IStyledComponentsGlobal {
	projectTextFontSize?: string
}

export const StyledComponentsGlobal = createGlobalStyle<IStyledComponentsGlobal>` //! Здесь надо вставить настройки из конфига проекта
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html: {
	font-size: ${props => props.projectTextFontSize || "24px"};
}

h1: {
	font-size: 24px;
}
`