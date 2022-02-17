import {
  RiAuctionLine,
  RiHomeSmileLine,
  RiMoneyDollarCircleLine,
  RiTruckLine
} from "react-icons/ri";

export const process = [
  {
    id: 1,
    title: "Auction",
    paragraph: (
      <p>
        {
          "Participate in Digital Twin's Genesis Drop. A 24-hour auction where the winner will receive the L'Dezen Limitless NFT that is asset backed to its physical counterpart."
        }
      </p>
    ),
    icon: <RiAuctionLine />
  },
  {
    id: 2,
    title: "Digital Ownership",
    paragraph: (
      <p>
        {
          "The owner of the L'Dezen NFT has immediate access to digital utility by trading on the secondary marketplace. If you are an owner of any Profile Picture (PFP) NFTs, we also offer a digital rendering of your earrings to be included on your NFT of choice. Check out what your new avatar could look like here. "
        }
      </p>
    ),
    icon: <RiHomeSmileLine />
  },
  {
    id: 3,
    title: "Distribution",
    paragraph: (
      <p>
        {
          "The L'Dezen Limitless NFT is asset backed. Digital Twin has the item securely stored and insured. To redeem your physical earrings simply burn your NFT and contact our team for shipping details. "
        }
      </p>
    ),
    icon: <RiTruckLine />
  },
  {
    id: 4,
    title: "Physical Ownership",
    paragraph: (
      <p>
        {
          "The owner of the L'Dezen Limitless NFT has the right to redeem the physical earrings. You can show off your unique, authenticated earrings IRL. "
        }
      </p>
    ),
    icon: <RiMoneyDollarCircleLine />
  }
];
