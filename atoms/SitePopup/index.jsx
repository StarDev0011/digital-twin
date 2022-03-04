import React from "react";
import { SitePopupWrapper } from "./styles";

export const SitePopup = (props) => {    
    return (        
        <SitePopupWrapper display={props.display}>
            <span className="close" onClick={props.hidePopup}><img src="/images/Icon-close.png" /></span>
            <div className="modal-content">
                {(props.data.type === 'success') ? (<img src="/images/Icon-check.png" />) : ''}
                {(props.data.type === 'error') ? (<img src="/images/Icon-cross.png" />) : ''}
                <div className="pop-msg">
                    <h4>{props.data.title}</h4>
                    <p>{props.data.message}</p>
                </div>
            </div>
        </SitePopupWrapper>
    )
}