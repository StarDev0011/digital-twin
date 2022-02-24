import {
  SiteImageWrapper,
  VisionContainer,
  VisionData,
  VisionWrapper,
} from './styles'

import React from 'react'
import { SiteTitle } from '../../../atoms/SiteTitle'
import { SiteContainer } from '../../../atoms/SiteContainer'

const Vision = () => {
  return (
    <SiteContainer>
      <VisionWrapper>
        <VisionContainer>
          <VisionData>
            <SiteTitle align="left">Vision</SiteTitle>
            <p>
              {
                'The perfect gift to commemorate the special women in our lives — partners, mothers, daughters, sisters —representing authenticity, tenacity and love. We believe in jewelry as an expression of self: that it can mean whatever you want; that you can wear it when you want, gift it, celebrate with it, reward yourself with it and keep it forever. We just want to support the entrance of female artists & collectors in the NFT space. Today, only 16% of NFTs in the market trace back to female artists. Let’s change this!'
              }
            </p>
          </VisionData>
        </VisionContainer>
        <SiteImageWrapper>
          <img alt="vision image" src="/images/vision-img1.jpg" />
        </SiteImageWrapper>
      </VisionWrapper>
    </SiteContainer>
  )
}

export default Vision
