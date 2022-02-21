import {
  HeroButtonsWrapper,
  HeroContent,
  HeroData,
  HeroImage,
  HeroSectionWrapper,
  HeroSubtitle,
  HeroTitle,
} from './styles'

import Link from 'next/link'
import React from 'react'
import { SiteButton } from '../../../atoms/SiteButton'
import { SiteContainer } from '../../../atoms/SiteContainer'

const HeroSection1 = () => {
  return (
    <HeroSectionWrapper>
      <video autoPlay loop muted id="video_bg">
        <source src="/images/landing1.mp4" type="video/mp4" />
      </video>
      <SiteContainer size="normal">
        <HeroContent>
          <HeroImage>
            <video autoplay="autoplay" loop="loop" muted defaultMuted playsinline id="video_bg1">
              <source src="/images/Limitless Earrings.mp4" type="video/mp4" />
            </video>
          </HeroImage>
          <HeroData>
            <HeroTitle>
              {"L'Dezen x Digital Twin"}
              <br />
              {'Limited Edition'}
              <br />
              {'Digi-Physical Earrings'}
            </HeroTitle>
            <HeroButtonsWrapper>
              <SiteButton buttonTheme="light" buttonBorder={true}>
                <Link href="/#limitless">View Release</Link>
              </SiteButton>
              <SiteButton buttonTheme="light" buttonBorder={true}>
                <Link href="/#how_it_works">How it Works</Link>
              </SiteButton>
            </HeroButtonsWrapper>
            <HeroSubtitle>Genesis NFT Drop coming this March</HeroSubtitle>
          </HeroData>
        </HeroContent>
      </SiteContainer>
    </HeroSectionWrapper>
  )
}

export default HeroSection1
