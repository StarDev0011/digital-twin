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
import { useInView } from 'react-intersection-observer'

const HeroSection1 = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  })
  return (
    <HeroSectionWrapper>
      <video autoPlay loop muted id="video_bg">
        <source src="/images/landing1.mp4" type="video/mp4" />
      </video>
      <SiteContainer size="normal">
        <HeroContent>
          <HeroImage>
            <a href='token/0x8aDd76A5c38da958dfFF9A58DdE51798d03C5ef9/1'>
            <video
              // controls="true"
              autoPlay
              loop
              muted
              playsInline
              id="video_bg1"
            >
              <source src="/images/Limitless Earrings.mp4" type="video/mp4" />
            </video>
            </a>
          </HeroImage>
          <HeroData ref={ref}>
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
            <HeroSubtitle className={inView + '_sub'}>Genesis NFT Drop coming this March</HeroSubtitle>
          </HeroData>
        </HeroContent>
      </SiteContainer>
    </HeroSectionWrapper>
  )
}

export default HeroSection1
