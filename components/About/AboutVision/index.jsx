import {
  SiteImageWrapper,
  VisionContainer,
  VisionData,
  VisionWrapper
} from "./styles";

import Image from "next/image";
import React from "react";
import { SiteContainer } from "../../../atoms/SiteContainer";
import { SiteTitle } from "../../../atoms/SiteTitle";

const AboutVision = () => {
  return (
    <VisionWrapper>      
      <VisionContainer>
        <VisionData>
          <SiteTitle align="left">Vision</SiteTitle>
          <p>Collect jewelry in the form of asset backed NFTs</p>
          <br />
          <p>Cross the line between digital & physical worlds</p>
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
