import React from 'react'
import { SiteContainer } from '../../../atoms/SiteContainer'
import { DiscoverTwinSection } from './styles'

const DiscoverTwinContent = () => {
  return (
    <SiteContainer>
      <DiscoverTwinSection>
        <div className="discover-row">
          <div className="discover-inner">
            <h2>discover your digital twin.</h2>
            <p>
              At Digital Twin, we transform fine jewelry through curation, story
              telling and discovery of fine jewelry in its digi-physical form.
            </p>
          </div>

          <div className="img-bx">
            <img src="/images/discover-section.png" />
          </div>
        </div>
      </DiscoverTwinSection>
    </SiteContainer>
  )
}

export default DiscoverTwinContent
