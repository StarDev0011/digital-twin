import Image from "next/image";
import limitlessimg from "../../../public/images/limitless.png"
import { SiteContainer } from "../../../atoms/SiteContainer";
import React from 'react';
import {
    LimitlessContainer,
    LimitlessData,
    LimitlessWrapper,
    SiteImageWrapper,
    LimitlessButtonContainer
  } from "./styles";

const Limitless = () => {
    return (
        <div>
            <SiteContainer>
                <LimitlessWrapper>
                    <LimitlessContainer>
                        <LimitlessData>
                            <h2>{"Limitless Earings"}</h2>
                            <p>{"The Limitless earrings are a unique,"}</p>
                            <p>{"one-of-a-kind design."}</p>
                            <p>{"Comfortable and Elegant,"}</p>
                            <p>{"Bold Yet"}</p>
                            <p>{"Feminine."}</p>
                            <p>{"Introducing fine jewelery"}</p>
                            <p>{"in its digi-physical form."}</p>
                            <p>{"The first 1/1 NFT by L’Dezen x Payal Shah"}</p>
                            <div className="limitless_icon_txt">
                                <img src = "/images/founder.png" />
                                <p>L’Dezen x Payal Shah</p>
                            </div>
                        </LimitlessData>
                    </LimitlessContainer>
                    <SiteImageWrapper>
                        <Image src={limitlessimg} alt = "" />
                    </SiteImageWrapper>
                </LimitlessWrapper>
                <LimitlessButtonContainer>
                    <a className="auction_btn" href = "/auctions">Enter Auction</a>
                </LimitlessButtonContainer>
            </SiteContainer>
        </div>
    )
}

export default Limitless