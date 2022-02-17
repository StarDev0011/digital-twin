import {
  NewsletterButton,
  NewsletterSectionWrapper,
  NewsletterTitle
} from "./styles";

import React from "react";
import { SiteContainer } from "../../../atoms/SiteContainer";

const NewsletterSection = () => {
  return (
    <NewsletterSectionWrapper>
      <NewsletterTitle>
        <h3>Never miss a drop.</h3>
      </NewsletterTitle>

      <SiteContainer>
        <NewsletterButton>
          <a href="#">Join Us</a>
        </NewsletterButton>
        <p>Subscribe for the latest news, drops, {"&"} collectibles.</p>
      </SiteContainer>
    </NewsletterSectionWrapper>
  );
};

export default NewsletterSection;
