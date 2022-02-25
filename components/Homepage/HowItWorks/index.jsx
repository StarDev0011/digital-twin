import { HowItWorksData, HowItWorksItem, HowItWorksWrapper } from './styles'

import React from 'react'
import { SiteContainer } from '../../../atoms/SiteContainer'
import { SiteTitle } from '../../../atoms/SiteTitle'
import { process } from '../../../data/process'

const HowItWorks = () => {
  return (
    <HowItWorksWrapper id="how_it_works">
      <SiteContainer>
        <SiteTitle>How it works</SiteTitle>
        <HowItWorksData>
          {process.map((item) => (
            <HowItWorksItem key={item.id}>
              <div className="iconWrapper">{item.icon}</div>
              <div className="processData">
                <h3>
                  {item.title}
                </h3>
                <p>{item.paragraph}</p>
              </div>
            </HowItWorksItem>
          ))}
        </HowItWorksData>
      </SiteContainer>
    </HowItWorksWrapper>
  )
}

export default HowItWorks
