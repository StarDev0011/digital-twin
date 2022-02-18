import {
  HeroButtonsWrapper,
  HeroContent,
  HeroData,
  HeroImage,
  HeroSectionWrapper,
  HeroSubtitle,
  HeroTitle
} from "./styles";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiteButton } from "../../../atoms/SiteButton";
import { SiteContainer } from "../../../atoms/SiteContainer";

const HeroSection1 = () => {
  return (
    <HeroSectionWrapper>
      <SiteContainer size="normal">
        <HeroContent>
          <HeroImage>
            <Image
              src="/images/earrings.png"
              alt="L'Dezen x Digital Twin Limited Edition Digi-Physical Earrings"
              width="526"
              height="534"
            />
          </HeroImage>
          <HeroData>
            <HeroTitle>
              {
                "L'Dezen x Digital Twin"
              }
              <br />
              {
                "Limited Edition"
              }
              <br />
              {
                "Digi-Physical Earrings"
              }
            </HeroTitle>
            <HeroButtonsWrapper>
              <SiteButton buttonTheme="light" buttonBorder={true}>
                <Link href="/#limitless">View Release</Link>
              </SiteButton>
              <SiteButton buttonTheme="light" buttonBorder={true}>
                <Link href="/#how_it_works">How it Works</Link>
              </SiteButton>
            </HeroButtonsWrapper>
            <HeroSubtitle>Genesis NFT Drop coming this March</HeroSubtitle>
          </HeroData>
        </HeroContent>
      </SiteContainer>
    </HeroSectionWrapper>
  );
};

export default HeroSection1;
