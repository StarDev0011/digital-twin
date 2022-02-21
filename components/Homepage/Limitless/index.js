import Image from 'next/image'
import limitlessimg from '../../../public/images/limitless.png'
import { SiteContainer } from '../../../atoms/SiteContainer'
import React from 'react'
import {
  LimitlessContainer,
  LimitlessData,
  LimitlessWrapper,
  SiteImageWrapper,
  LimitlessButtonContainer,
} from './styles'

const Limitless = () => {
  return (
    <div id="limitless">
      <SiteContainer>
        <LimitlessWrapper>
          <LimitlessContainer>
            <LimitlessData>
              <h2>{'Limitless Earrings'}</h2>
              <p>{'Introducing fine jewelry'}</p>
              <p>{'in its digi-physical form:'}</p>
              <p>{'The Limitless earrings are'}</p>
              <p>{'18K gold diamond,'}</p>
              <p>{'one-of-a-kind design.'}</p>
              <p>{'Comfortable and elegant,'}</p>
              <p>{'Bold, yet feminine.'}</p>
              <div className="limitless_icon_txt">
                <img src="/images/founder.png" />
                <p>{"L'Dezen by Payal Shah"}</p>
              </div>
            </LimitlessData>
          </LimitlessContainer>
          <SiteImageWrapper>
            <Image src={limitlessimg} alt="" />
            <div className="limitless_icon_txt">
              <img src="/images/founder.png" />
              <p>{"L'Dezen by Payal Shah"}</p>
            </div>
          </SiteImageWrapper>
        </LimitlessWrapper>
        <LimitlessButtonContainer>
          <a
            className="auction_btn"
            href="token/0x8aDd76A5c38da958dfFF9A58DdE51798d03C5ef9/1"
          >
            Enter Auction
          </a>
        </LimitlessButtonContainer>
      </SiteContainer>
    </div>
  )
}

export default Limitless
