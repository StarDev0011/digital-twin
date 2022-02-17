import {
  FooterCol,
  FooterLogo,
  FooterLogoWrapper,
  FooterRow,
  FooterWrapper,
  MenuItems,
  SocialItems
} from "./styles";

import Copyright from "./copyright";
import Link from "next/link";
import { SiteButton } from "../../atoms/SiteButton";
import { MenuContainer } from "../../atoms/SiteContainer";
import { footermenuData } from "../../data/footer_menu";
import { socialData } from "../../data/social";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <MenuContainer size="normal">
          <FooterLogoWrapper>
            <FooterLogo>Digital Twin</FooterLogo>
          </FooterLogoWrapper>
          <FooterRow>
            <FooterCol>
              <p className="siteInfo">
                A curated marketplace for luxury transformed.
              </p>
              <SocialItems>
                {socialData.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.icon}
                    </a>
                  </li>
                ))}
              </SocialItems>
            </FooterCol>
            <FooterCol>
              <h3>Navigation</h3>
              <MenuItems>
                {footermenuData.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </MenuItems>
            </FooterCol>
            <FooterCol>
              <h3>Newsletter</h3>
              <p className="newsletterInfo">
                Join our mailing list to stay in the loop on your upcoming NFT
                drops,weekly news and more.
              </p>
              <SiteButton>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://digitaltwin.beehiiv.com/subscribe"
                >
                  Join
                </a>
              </SiteButton>
            </FooterCol>
          </FooterRow>
        </MenuContainer>
      </FooterWrapper>
      <Copyright />
    </>
  );
};

export default Footer;
