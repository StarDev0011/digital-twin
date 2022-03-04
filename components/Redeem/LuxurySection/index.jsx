import React from 'react'
import {
  LuxuryHeading,
  LuxuryContentWrapper,
  // LuxuryWrapperMain,
  // PhysicalRedemptionDiv,
  LuxurySectionWrapper,
} from './styles'
import { SiteContainer } from '../../../atoms/SiteContainer'

const LuxuryContent = () => {
  return (
    <LuxuryContentWrapper>
      <SiteContainer>
        <LuxuryHeading>Luxury. Transformed.</LuxuryHeading>
        <LuxurySectionWrapper>
          <div className="luxury-row">
            <div className="grid-item-1">
              <div className="grid-content">
                <h2>
                  PHYSICAL
                  <br />
                  Redemption
                </h2>
                <p>Wear the ‘Limitless’ Earrings IRL</p>
                <a href="" className="commo-btn">
                  Redeem
                </a>
              </div>
            </div>

            <div className="grid-item-2">
              <div className="grid-content">
                <h2>
                  Digital <br />
                  REDEMPTION
                </h2>
                <p>Choose Your Look</p>

                <a href="" className="commo-btn">
                  Accessorize my PFP
                </a>
              </div>
            </div>

            <div className="grid-item-3">
              <div className="grid-content">
                <h2>Whats Next</h2>
                <p>
                  Missed Our First Drop? Subscribe
                  <br /> to our newsletter to catch the <br />
                  latest updates.
                </p>
                <a
                  href="https://digitaltwin.beehiiv.com/subscribe"
                  className="commo-btn"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </LuxurySectionWrapper>
      </SiteContainer>
    </LuxuryContentWrapper>
  )
}

export default LuxuryContent
