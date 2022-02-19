import {
  AboutMissionContainer,
  AboutMissionData,
  AboutMissionWrapper,
  SiteImageWrapper,
} from './styles'

import React from 'react'

const AboutMission = () => {
  return (
    <AboutMissionWrapper>
      <SiteImageWrapper>
        <img alt="L'Dezen image" src="/images/mission-img1.png" />
      </SiteImageWrapper>
      <AboutMissionContainer>
        <AboutMissionData>
          <h4>Mission</h4>
          <h3>Discovery. Redefined.</h3>
          <p>Curate jewelery from artists around the world</p>
          <br />
          <p>Onboard the next wave of NFT collectors</p>
          <br />
          <p>Transform the traditional shopping experience</p>
        </AboutMissionData>
      </AboutMissionContainer>
    </AboutMissionWrapper>
  )
}

export default AboutMission
