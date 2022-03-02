import React, {useEffect, useState} from 'react'
import { SiteContainer } from '../../../atoms/SiteContainer'
import { FaqContentWrapper } from './styles';
import Faq from "react-faq-component"

const data = {
  title: "FAQ?",
  rows: [
      {
          title: "What is Digital Twin?",
          content: `Digital twin by definition means a physical object or system that shares its data with the digital copy. At Digital Twin, we are looking to bridge the physical and digital worlds through fine-jewelry, one of the most collectable forms of art. We highlight unique one of a kind jewelers around the world and bring them onto the blockchain.`,
      },
      {
          title: "How do I Redeem the physical ‘Limitless’ Earrings?",
          content:
              "You can redeem your physical earrings on our website by connecting your wallet to prove ownership of the ‘Limitless’ NFT. The NFT will then be redeemed for the physical asset and shipped to your home address.",
      },
      {
          title: "How can I accessorize a PFP?",
          content: `You can accessorize any PFP NFT you own if you are a holder of the ‘Limitless’ earring NFT. Simply connect your wallet to prove ownership and provide a standard media file of your PFP.  Check out what your new avatar could look like here.`,
      },
      {
          title: "What fees will I pay?",
          content: "For our Genesis drop we are covering all gas fees incurred by the winning bidder. If the NFT holder redeems the physical earrings we also cover shipping fees.",
      },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#333",
  rowTitleColor: "#333",
  rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};


const FaqContent = () => {

  return (
    <SiteContainer>
      <FaqContentWrapper>
        <Faq
            data={data}
            styles={styles}
            config={config}
        />
      </FaqContentWrapper>
      
    </SiteContainer>
  )
}

export default FaqContent;
