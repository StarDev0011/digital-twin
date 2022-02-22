import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { SplashWrapper } from './styles'
const Splash = () => {
  const [load, setLoad] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {load ? (
        <SplashWrapper>
          <Image
            width={138}
            height={134}
            src="/images/logo2.png"
            alt="DigitalTwin Logo"
          />
        </SplashWrapper>
      ) : null}
    </>
  )
}

export default Splash
