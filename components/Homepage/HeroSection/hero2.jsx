import {
  HeroButtonsWrapper,
  HeroContent2,
  HeroImage,
  HeroSubtitle2,
  HeroTitle2,
  HeroSectionWrapper2,
} from './styles'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SiteButton } from '../../../atoms/SiteButton'
import { SiteContainer } from '../../../atoms/SiteContainer'
import { useInView } from 'react-intersection-observer'

const HeroSection2 = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  })
  return (
    <HeroSectionWrapper2>
      {/* <video autoPlay loop muted id="video_bg">
        <source src="/images/landing.mp4" type="video/mp4" />
      </video> */}
      <SiteContainer size="normal">
        <HeroContent2>
          <div className="content_data" ref={ref}>
            <HeroTitle2>{'Digital Twin'}</HeroTitle2>
            <HeroSubtitle2 className={inView + '_sub2'}>
              Luxury. Transformed.
            </HeroSubtitle2>
            <HeroButtonsWrapper>
              <SiteButton buttonTheme="light" className="how_btn">
                <Link href="/#how_it_works">How it Works</Link>
              </SiteButton>
            </HeroButtonsWrapper>
            <HeroSubtitle2 className={inView + '_sub2'}>
              Genesis NFT Drop coming this March
            </HeroSubtitle2>
          </div>
          <HeroImage>
            <Image
              src="/images/splashlogo.png"
              alt="L'Dezen x Digital Twin Limited Edition Digi-Physical Earrings"
              width="526"
              height="534"
            />
          </HeroImage>
        </HeroContent2>
      </SiteContainer>
    </HeroSectionWrapper2>
  )
}

export default HeroSection2
