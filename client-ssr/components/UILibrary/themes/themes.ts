import { DefaultTheme } from 'styled-components'

const myTheme: DefaultTheme = {
	media: {
		phone: "(max-width: 576px)",
		tablete: "(max-width: 768px) and (min-width: 576px)",
		pc: "(min-width: 768px)",
		phoneAndTablete: "(max-width: 768px)"
	}
}

export { myTheme }