import React from 'react'
import { SectionWrapper } from './styles'

const ConnectBox = ({balance,isWalletConnected,title,subtitle,isErrorMessage,isNftPresent,setDetail}) => {
  return (
    <SectionWrapper>
      <div className="box-head">
        <div>
          <h2>Redeem NFT</h2>
        </div>
        {
          isWalletConnected ? 
              <div>
                <p>
                  Your Balance: <b>{balance} ETH</b>
                </p>
            </div> :
        null
        }
       
      </div>

      <div className="shadow-box">
        {
          isErrorMessage ?
          <img src="/images/Icon-cross.png" alt="cross" />:
          <img src="/images/Icon-check.png" alt="tick" />
        }
        
        <div className="content-wrapper">
          <h3>{title} </h3>
          <p>
            {subtitle}
          </p>
        </div>
      </div>
      {
        isNftPresent ?
        <div className="shipping_button">
          <a href="javascript:void(0);" onClick={()=> setDetail(true)}>Shipping Details</a>
          <p>Your ‘Limitless’ NFT will be exchanged for the physical earrings.</p>
        </div> :
        <div className="shipping_button">
        <a href="javascript:void(0);" hidden>NFT Not Present</a>
        <p>Your ‘Limitless’ NFT will be exchanged for the physical earrings.</p>
      </div> 
      }
      
    </SectionWrapper>
  )
}

export default ConnectBox
