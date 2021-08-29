import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      phone: string
      tablete: string
      pc: string
    }
  }
}