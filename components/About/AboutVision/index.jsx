import {
  SiteImageWrapper,
  VisionContainer,
  VisionData,
  VisionWrapper,
} from './styles'
import { useInView } from 'react-intersection-observer'
import { SiteContainer } from '../../../atoms/SiteContainer'

const AboutVision = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  })
  return (
    <SiteContainer>
      <VisionWrapper>
        <VisionContainer ref={ref}>
          <VisionData>
            <h4>Vision</h4>
            <h3 className={inView + '_luxury'}>Luxury. Transformed.</h3>
            <p>Cross the line between digital & physical worlds</p>
            <br />
            <p>Collect jewelry in the form of asset backed NFTs</p>
            <br />
            <p>Empower creative culture</p>
          </VisionData>
        </VisionContainer>
        <SiteImageWrapper>
          <img alt="vision image" src="/images/vision-about1.jpg" />
        </SiteImageWrapper>
      </VisionWrapper>
    </SiteContainer>
  )
}

export default AboutVision
