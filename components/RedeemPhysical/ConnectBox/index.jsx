import React from 'react'
import { SectionWrapper } from './styles'

const ConnectBox = ({
  balance,
  isWalletConnected,
  title,
  subtitle,
  isErrorMessage,
  isNftPresent,
  setDetail,
}) => {
  return (
    <SectionWrapper>
      <div className="box-head">
        <div>
          <h2>Redeem NFT</h2>
        </div>
        {isWalletConnected ? (
          <div>
            <p>
              Your Balance: <b>{Number(balance).toFixed(3)} ETH</b>
            </p>
          </div>
        ) : null}
      </div>

      <div className="shadow-box">
        {isErrorMessage ? (
          <img src="/images/Icon-cross.png" alt="cross" />
        ) : (
          <img src="/images/Icon-check.png" alt="tick" />
        )}

        <div className="content-wrapper">
          <h3>{title} </h3>
          <p>{subtitle}</p>
        </div>
      </div>
      {isNftPresent ? (
        <div className="shipping_button">
          <a style={{ cursor: 'pointer' }} onClick={() => setDetail(true)}>
            Shipping Details
          </a>
          <p>
            Your ‘Limitless’ NFT will be exchanged for the physical earrings.
          </p>
        </div>
      ) : (
        <div className="shipping_button">
          <a hidden style={{ cursor: 'pointer' }}>
            NFT Not Present
          </a>
          <p>
            Your ‘Limitless’ NFT will be exchanged for the physical earrings.
          </p>
        </div>
      )}
    </SectionWrapper>
  )
}

export default ConnectBox
