import { MarketPlaceData, MarketplaceContentWrapper } from "./styles";

import React from "react";
import { SiteContainer } from "../../atoms/SiteContainer";

const MarketplaceContent = () => {
  return (
    <MarketplaceContentWrapper>
      <SiteContainer>
        <MarketPlaceData>
          <h2>Marketplace</h2>
          <p>Coming Soon</p>
        </MarketPlaceData>
      </SiteContainer>
    </MarketplaceContentWrapper>
  );
};

export default MarketplaceContent;
