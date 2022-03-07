import ImageSlider from '../ImageSlider'
import { SiteContainer } from '../../../atoms/SiteContainer'
import React from 'react'
import {
  LimitlessContainer,
  LimitlessData,
  LimitlessWrapper,
  SiteImageWrapper,
  LimitlessButtonContainer,
  FaqWrapper,
} from './styles'
import Faq from 'react-faq-component'

const faqData = {
  title: '',
  rows: [
    {
      title: 'Digital',
      content: `        
          <li>3D Rendered Animation</li> 
          <li>Custom Digital Rendering of the ‘Limitless’ Earrings on any PFP NFT you own</li>        
        `,
    },
    {
      title: 'Physical',
      content: `       
          <li>Physical version of the ‘Limitless’ Pair of Earrings, redeemable on digitalxtwin.io</li>
          <li>These earrings are one of a kind and exclusive to the Digital Twin auction</li>
          <li>L’Dezen jewelry is made in 18k Gold with conflict-free diamonds</li>                
        `,
    },
    {
      title: 'Details',
      content: `        
          <li>Diamonds Total Weight: 2.27 carat</li>
          <li>18K Gold, Total Weight: 11.66 grams</li>
          <li>Earrings Length: 5.2cm</li>
          <li>Post fastening for pierced ears</li>
          <li>Minting: This NFT was minted by L’Dezen on Ethereum </li>
          <li>Bonus: Physical redemption includes 10% gift card on a future L’Dezen purchase</li>        
      `,
    },
  ],
}

const faqStyles = {
  // bgColor: 'white',
  titleTextColor: '#333',
  rowTitleColor: '#333',
  rowContentColor: 'grey',
  // arrowColor: "red",
}

const faqConfig = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
}

const Limitless = () => {
  return (
    <div id="limitless">
      <SiteContainer>
        <LimitlessWrapper>
          <LimitlessContainer>
            <LimitlessData>
              <h2>{'Limitless Earrings'}</h2>
              <p>{'Introducing fine jewelry in its digi-physical form.'}</p>
              <p>{'The Limitless earrings are 18K gold diamond,'}</p>
              <p>{'one-of-a-kind design.'}</p>
              <p>{'Comfortable and elegant,'}</p>
              <p>{'Bold, yet feminine.'}</p>
              <div className="limitless_icon_txt">
                <img src="/images/founder.png" />
                <p>{"L'Dezen by Payal Shah"}</p>
              </div>
              <br />
              <FaqWrapper>
                <Faq data={faqData} styles={faqStyles} config={faqConfig} />
              </FaqWrapper>
              <div className="external_links">
                <p>
                  <b>View us on:</b>
                </p>
                <a
                  href="https://etherscan.io/nft/0x8add76a5c38da958dfff9a58dde51798d03c5ef9/1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/etherscan-logo.png"
                    height="60px"
                    width="60px"
                    style={{ padding: '10px' }}
                  />
                </a>
                <a
                  href="https://zora.co/collections/0x8aDd76A5c38da958dfFF9A58DdE51798d03C5ef9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/zora-plain.png"
                    height="60px"
                    width="60px"
                    style={{ padding: '10px' }}
                  />
                </a>
                <a
                  href="https://opensea.io/assets/0x8add76a5c38da958dfff9a58dde51798d03c5ef9/1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/opensea-logo.png"
                    height="60px"
                    width="60px"
                    style={{ padding: '10px' }}
                  />
                </a>
              </div>
            </LimitlessData>
          </LimitlessContainer>
          <SiteImageWrapper>
            <ImageSlider />
            <div className="limitless_icon_txt">
              <img src="/images/founder.png" />
              <p>{"L'Dezen by Payal Shah"}</p>
            </div>
          </SiteImageWrapper>
        </LimitlessWrapper>
        <LimitlessButtonContainer>
          <a
            className="auction_btn"
            href="token/0xD391646321ccf7938821a01d169DeA6922AEDBba/6"
          >
            Enter Auction
          </a>
        </LimitlessButtonContainer>
      </SiteContainer>
    </div>
  )
}

export default Limitless
