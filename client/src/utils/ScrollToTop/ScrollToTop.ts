import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop(): null {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// const ScrollToTop: React.FC = (): null => {

//   const history = useHistory()

//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0)
//     });
//     return () => {
//       unlisten()
//     }
//   }, [])

//   return (null)
// }

// export default ScrollToTop