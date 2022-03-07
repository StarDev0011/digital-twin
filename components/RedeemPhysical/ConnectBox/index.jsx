import React from "react";
import { SectionWrapper } from "./styles";

const ConnectBox = () => {
    return (
        
            <SectionWrapper>                
                <div className="box-head">
                    <div><h2>Redeem NFT</h2></div>
                    <div><p>Your Balance: <b>2.454 ETH</b></p></div>
                </div>
                <div className="shadow-box">
                    <img src="/images/Icon-check.png" alt="tick" />
                    <div className="content-wrapper">
                        <h3>Connect your Wallet to Get Started. </h3>
                        <p>If your wallet containts the ‘Limitless’ Earrings you will be prompted to enter Shipping details to redeem the physical earrings.</p>
                    </div>
                </div>
                <div className="shipping_button">
                    <a href="javascript:void(0);" >Shipping Details</a>
                    <p>Your ‘Limitless’ NFT will be exchanged for the physical earrings.</p>
                </div>
            </SectionWrapper>
                
        
    )
}

export default ConnectBox;