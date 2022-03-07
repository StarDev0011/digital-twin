import React from "react";
import {SectionWrapper } from "./styles";

const ConnectBox = () => {
    return (        
        <SectionWrapper>
            <h2>Redeem NFT</h2>
            <div className="shadow-box">
                <img src="/images/Icon-check.png" alt="tick" />
                <div className="content-wrapper">
                    <h3>Connect your Wallet to Get Started. </h3>
                    <p>If your wallet containts the ‘Limitless’ Earrings you will be prompted to enter Shipping details to redeem the physical earrings.</p>
                </div>
            </div>
            <div className="shipping_button">
                <a href="javascript:void(0);" >Upload PFP</a>
            </div>
        </SectionWrapper>
    )
}

export default ConnectBox;