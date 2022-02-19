import {
  LDezenContainer,
  LDezenData,
  LDezenWrapper,
  SiteImageWrapper,
} from './styles'

import React from 'react'
import { SiteTitle } from '../../../atoms/SiteTitle'

const LDezen = () => {
  return (
    <LDezenWrapper>
      <SiteImageWrapper>
        <img alt="L'Dezen image" src="/images/ldezen-img1.png" />
      </SiteImageWrapper>
      <LDezenContainer>
        <LDezenData>
          <SiteTitle align="left">{"L'Dezen"}</SiteTitle>
          <p>
            {
              "L' Dezen was founded in 2011 by Payal Shah with the idea of creating head turning but functional fine jewelry. Everything that L’ Dezen creates, from 18-K hand-made rose-cut diamond earrings to statement flower ‘Violetta’ rings, is thoughtfully designed and grounded with the idea of one-of-a-kind as well as light weight designs - simply wearable luxury. Elegant, sculptural pieces can be worn on their own or mixed together: bold bracelets all hand-crafted in their factories located in China, Hong Kong and India. The newest L’Dezen ‘Enamelled by Me’ plays with accents of bold bright coloured enamel coated over 18k gold and encrusted with diamonds for a modern twist giving a fine line between glamour and playfulness with a timeless formula."
            }
          </p>
        </LDezenData>
      </LDezenContainer>
    </LDezenWrapper>
  )
}

export default LDezen
