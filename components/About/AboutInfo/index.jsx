import { AboutInfoItems, AboutInfoTitle, AboutInfoWrapper } from './styles'

import React from 'react'
import { SiteContainer } from '../../../atoms/SiteContainer'
import { problemData } from '../../../data/problem'
import { useInView } from 'react-intersection-observer'

const AboutInfo = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  })
  return (
    <AboutInfoWrapper>
      <SiteContainer ref={ref}>
        <AboutInfoTitle>
          The Problem <br />
          <p className="problem_sub">
            Collecting {'&'} trading fine jewlery was hard. Until now.
          </p>
        </AboutInfoTitle>

        <AboutInfoItems>
          {problemData.map((item) => (
            <div key={item.id}>
              <div className="single_problem">
                <h3>{item.title}</h3>
                <div className={inView + '_icon_text'}>
                  <div className="problem_icon">{item.icon}</div>
                  <p className="problem_txt">{item.paragraph}</p>
                </div>
              </div>
              <div className="single_problem_mob">
                <div className="mob_icon_text">
                  <div className="problem_icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                </div>
                <p className="problem_txt">{item.paragraph}</p>
              </div>
            </div>
          ))}
        </AboutInfoItems>
      </SiteContainer>
    </AboutInfoWrapper>
  )
}

export default AboutInfo
