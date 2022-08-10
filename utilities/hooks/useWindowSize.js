// utils/useWindowSize.js
import React from 'react'

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({})

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  React.useEffect(() => {
    if (!!window) {
      changeWindowSize()
      window.addEventListener('resize', changeWindowSize)
    }
    return () => {
      if (window) {
        window.removeEventListener('resize', changeWindowSize)
      }
    }
  }, [])

  return windowSize
}
