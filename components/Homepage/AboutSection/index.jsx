import {
  AboutSectionColLeft,
  AboutSectionColRight,
  AboutSectionRow,
  AboutSectionWrapper,
} from './styles'

import Image from 'next/image'
import React from 'react'
import { SiteContainer } from '../../../atoms/SiteContainer'
import { SiteTitle } from '../../../atoms/SiteTitle'

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <SiteContainer>
        <AboutSectionRow>
          <AboutSectionColLeft>
            <Image
              src="/images/ldezen-logo.png"
              alt="l'dezen logo"
              height={97}
              width={341}
            />
            <h4>FOUNDER</h4>
            <SiteTitle align="left">PAYAL SHAH</SiteTitle>
            <img
              className="mobile_img"
              src="/images/payal1.png"
              alt="payal shah"
            />
            <p>
              {
                'Inspiration is everywhere. I’m inspired by learning, by experiencing, and by conversations. I’m inspired by my travels; whether it is the afternoon sunset gleaming against the Hong Kong skyline, the Turkish dusk with its paisley patterns in soft light blue shades or rich Indian architecture from centuries—I’m captured by life’s beauties all around! I also take inspiration from business people that are successful in both their field but also in the people game: the way they develop, sustain, enrich and most importantly share their relationship of business success and creativity.'
              }
            </p>
          </AboutSectionColLeft>
          <AboutSectionColRight>
            <Image
              src="/images/payal1.png"
              width={400}
              height={581}
              alt="payal shah"
            />
          </AboutSectionColRight>
        </AboutSectionRow>
      </SiteContainer>
    </AboutSectionWrapper>
  )
}

export default AboutSection
