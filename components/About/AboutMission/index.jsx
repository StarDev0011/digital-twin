import {
  AboutMissionContainer,
  AboutMissionData,
  AboutMissionWrapper,
  SiteImageWrapper,
} from './styles'

import React from 'react'
import { useInView } from 'react-intersection-observer'
import { SiteContainer } from '../../../atoms/SiteContainer'

const AboutMission = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  })

  return (
    <SiteContainer>
      <AboutMissionWrapper>
        <SiteImageWrapper>
          <img alt="L'Dezen image" src="/images/mission-img1.jpg" />
        </SiteImageWrapper>
        <AboutMissionContainer ref={ref}>
          <AboutMissionData>
            <h4>Mission</h4>
            <h3 className={inView + '_discover'}>Discovery. Redefined.</h3>
            <p>Curate jewelery from artists around the world</p>
            <br />
            <p>Onboard the next wave of digi-physical NFT collectors</p>
            <br />
            <p>Transform the shopping experience from Web 2.0 to Web 3.0</p>
          </AboutMissionData>
        </AboutMissionContainer>
      </AboutMissionWrapper>
    </SiteContainer>
  )
}

export default AboutMission
