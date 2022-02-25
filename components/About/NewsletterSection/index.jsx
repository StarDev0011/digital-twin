import {
  NewsletterButton,
  NewsletterSectionWrapper,
} from './styles'

import React from 'react'
import { SiteContainer } from '../../../atoms/SiteContainer'
import { useInView } from 'react-intersection-observer'

const NewsletterSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  })
  return (
    <NewsletterSectionWrapper>
      <SiteContainer>
        <NewsletterButton ref={ref}>
          <a href="#" className={inView + '_nevermiss'}>Join Us</a>
        </NewsletterButton>
        <p>Subscribe for the latest news, drops, {'&'} collectibles.</p>
      </SiteContainer>
    </NewsletterSectionWrapper>
  )
}

export default NewsletterSection
