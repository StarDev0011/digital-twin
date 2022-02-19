import {
  HeaderCenter,
  HeaderTop,
  HeaderWrapper,
  Logo,
  MenuItems,
  SocialItems
} from "./styles";

import Link from "next/link";
import { MenuContainer } from "../../atoms/SiteContainer";
import { menuData } from "../../data/menu";
import { socialData } from "../../data/social";

const Header = () => {
  return (
    <MenuContainer>
      <HeaderWrapper>
        <HeaderTop>
          <div className="social_items">
            <SocialItems>
              {socialData.map((item) => (
                <li key={item.id}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.icon}
                  </a>
                </li>
              ))}
            </SocialItems>
          </div>
          <div className="header_center">
            <HeaderCenter>
              <Logo href="/">Digital Twin</Logo>
              <MenuItems>
                {menuData.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
                <li><a href="https://firebasestorage.googleapis.com/v0/b/bondex-61a7f.appspot.com/o/litepaper.pdf?alt=media&token=61751e5f-eaa0-4957-9b04-0077c30f286d" target="_blank">Press Release</a></li>
              </MenuItems>
            </HeaderCenter>
          </div>
          {/* {router.pathname == "/bidpage"?<div className="connect_wallet">
            <SiteButton>
              <Link href="/">Connect wallet</Link>
            </SiteButton>
          </div>:<></>} */}
        </HeaderTop>
      </HeaderWrapper>
    </MenuContainer>
  );
};

export default Header;
