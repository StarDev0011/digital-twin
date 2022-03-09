import {
  HeaderCenter,
  HeaderTop,
  HeaderWrapper,
  Logo,
  MenuItems,
  SocialItems,
} from './styles'

import Link from 'next/link'
import { MenuContainer } from '../../atoms/SiteContainer'
import { menuData } from '../../data/menu'
import { socialData } from '../../data/social'
import { useState } from 'react'

const Header = () => {
  const [modal, setModal] = useState(false)

  const show = () => setModal(true)
  const hide = () => setModal(false)
  return (
    <>
      <MenuContainer>
        <HeaderWrapper>
          <HeaderTop>
            <div className="logo">
              <img src="/images/logo2.png" />
              <Logo href="/">Digital Twin</Logo>
            </div>
            <div className="header_center">
              <HeaderCenter>
                <MenuItems>
                  {menuData.map((item) => (
                    <li key={item.id}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href="images/press_release.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Press Release
                    </a>
                  </li>
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
        <div className="mobile_nav">
          <div className="mobile_nav_header">
            <h1>Digital Twin</h1>
            <img src="/images/open.png" onClick={show} />
          </div>
          {modal ? (
            <div className="mobile_modal">
              <div className="close_icon">
                <img src="/images/close.png" onClick={hide} />
              </div>

              <div className="nav_links">
                <p>
                  <a href="/">Drop</a>
                </p>
                <p>
                  <a href="/aboutus">About Us</a>
                </p>
                <p>
                  <a href="/marketplace">Marketplace</a>
                </p>
                <p>
                  <a href="/redeem">Redeem</a>
                </p>
                <p>
                  <a href="/images/press_release.pdf" target="_blank">
                    Press Release
                  </a>
                </p>
              </div>
              <div className="social_links">
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
            </div>
          ) : (
            <></>
          )}
        </div>
      </MenuContainer>
    </>
  )
}

export default Header
