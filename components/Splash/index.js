import Image from "next/image";
import React from "react";
import { SplashWrapper } from "./styles";
const Splash = ({ loading }) => {
  return (
    <SplashWrapper>
      <Image
        width={138}
        height={114}
        src="/images/logo.png"
        alt="digitaltwin"
      />
    </SplashWrapper>
  );
};

export default Splash;
