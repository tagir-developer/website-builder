import React, { useEffect } from "react"
import { useHistory, useLocation, withRouter } from "react-router-dom"

// export default function ScrollToTop(): null {
//   const { pathname } = useLocation()

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [pathname])

//   return null
// }

interface IScrollTo {
  value: number
  dep?: boolean
}

const ScrollTo: React.FC<IScrollTo> = ({ value, dep = false }): null => {

  // const history = useHistory()

  // useEffect(() => {
  //   const unlisten = history.listen(() => {
  //     window.scrollTo(0, value)
  //   });
  //   return () => {
  //     unlisten()
  //   }
  // }, [])

  useEffect(() => {
    if (!dep) {
      console.log('Скролл к цели')
      window.scrollTo(0, value)
    }

  }, [dep])

  return (null)
}

export default ScrollTo;