import {
  SiteImageWrapper,
  VisionContainer,
  VisionData,
  VisionWrapper
} from "./styles";


const AboutVision = () => {
  return (
    <VisionWrapper>      
      <VisionContainer>
        <VisionData>
          <h4>Vision</h4>
          <h3>Luxury. Transformed.</h3>
          <p>Cross the line between digital & physical worlds</p>
          <br />
          <p>Collect jewelry in the form of asset backed NFTs</p>
          <br />          
          <p>Empower creative culture</p>
        </VisionData>
      </VisionContainer>
      <SiteImageWrapper>
        <img alt="vision image" src="/images/vision-about1.png" />
      </SiteImageWrapper>
    </VisionWrapper>
  );
};

export default AboutVision;
