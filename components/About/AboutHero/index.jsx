import {
  AboutHeroWrapper,
  AboutImageWrapper,
  AboutParagraph,
  AboutParagraph2,
  AboutSubtitle,
  AboutTitle,
} from './styles'

import React from 'react'
import { SiteContainer } from '../../../atoms/SiteContainer'

const AboutHero = () => {
  return (
    <AboutHeroWrapper>
      <SiteContainer>
        <AboutTitle>Luxury. Transformed.</AboutTitle>
        <AboutImageWrapper>
          <img className="about_img" src="./images/about_hero.png" />
        </AboutImageWrapper>
        <AboutSubtitle>
          Digital Twin is a curated marketplace for fine jewelry. Intertwining
          the digital and physical worlds for artists and collectors.
        </AboutSubtitle>
        <AboutParagraph>
          {
            'Our mission is to converge the emerging digital fashion industry with brands that are centered around rare, one of a kind art. Our niche is fine jewelry - one of the most collectable forms of art. At Digital Twin, we transform fine jewelry through curation, story telling and discovery of fine jewelry in its digi-physical form. We are changing the way you can buy, sell, trade, and wear jewelry forever. Join us, and become a part of history, as we transform the meaning of luxury in the digital and physical worlds.'
          }
        </AboutParagraph>
        <AboutParagraph2>
          {
            'When purchasing with Digital Twin, you will aquire a digi-physical experience, meaning the buyer acquires the digital NFT which represents its physical counterpart.'
          }
        </AboutParagraph2>
      </SiteContainer>
    </AboutHeroWrapper>
  )
}

export default AboutHero
