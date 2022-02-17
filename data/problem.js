

import { BsZoomOut } from "react-icons/bs";
import authentication from "../img/authentication.png"
import counterfeit from "../img/counterfeit.png"
import tradeability from "../img/tradeability.png"
import Image from "next/image";

export const problemData = [
  {
    id: 1,
    title: "Counterfeit",
    paragraph: (
      <p>
        {
          "NFTs are limited and unique, well poised to eliminate the likelihood of counterfeit products."
        }
      </p>
    ),
    icon: <Image src = {counterfeit} alt = "counterfeit" />
  },
  {
    id: 2,
    title: "Authentication",
    paragraph: (
      <p>
        {
          "NFTs are governed by smart contracts and powered using blockchain technology, enabling brands and buyers to track ownership at every point of sale."
        }
      </p>
    ),
    icon: <Image src = {authentication} alt = "authentication" />
  },
  {
    id: 3,
    title: "Tradeability",
    paragraph: (
      <p>
        {
          "Collectors can easily trade their NFTs at any time. Brands can also earn in perpetuity with royalties off secondary sales."
        }
      </p>
    ),
    icon: <Image src = {tradeability} alt = "tradeability" />
  }
];
