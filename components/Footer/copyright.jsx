import { CopyrightWrapper } from './styles'
import React from 'react'
import { SiteContainer } from '../../atoms/SiteContainer'
import Link from 'next/link'

const Copyright = () => {
  return (
    <CopyrightWrapper>
      <SiteContainer>
        {/* <p>© 2022 Digital Twin Labs LLC.</p> */}
        <ul>
          <li>
            <p>© 2022 Digital Twin Labs LLC.</p>
          </li>
          <li>
            <Link href="/terms">Terms & Conditions</Link>
          </li>
          <li>
            <Link href="/policy">Privacy Policy</Link>
          </li>
        </ul>
      </SiteContainer>
    </CopyrightWrapper>
  )
}

export default Copyright
