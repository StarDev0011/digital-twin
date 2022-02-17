import { CopyrightWrapper } from "./styles";
import React from "react";
import { SiteContainer } from "../../atoms/SiteContainer";

const Copyright = () => {
  return (
    <CopyrightWrapper>
      <SiteContainer>
        <p>© 2022 Digital Twin Labs LLC.</p>
      </SiteContainer>
    </CopyrightWrapper>
  );
};

export default Copyright;
