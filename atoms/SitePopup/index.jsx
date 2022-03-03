import React, { useState } from "react";
import { SitePopupWrapper } from "./styles";

const SitePopup = () => {      
    return (        
        <SitePopupWrapper>
            <span className="close"><img src="/images/Icon-close.png" /></span>
            <div className="modal-content">
                <img src="/images/Icon-check.png" />
                <div style={{'text-align': 'left'}}>
                    <h4>Error.</h4>
                    <p>Your bid must be higher.</p>
                </div>
            </div>
        </SitePopupWrapper>
    )
}

export default SitePopup;