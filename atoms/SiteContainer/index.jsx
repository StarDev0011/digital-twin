import styled from 'styled-components'

export const SiteContainer = styled.div.attrs((props) => ({
  size: props.size || 'normal',
}))`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  .roadmap_title {
    text-align: center;
    @media (max-width: 465px) {
      text-align: left;
      padding: 0 5%;
      line-height: 1;
    }
  }
`

export const MenuContainer = styled.div.attrs((props) => ({
  size: props.size || 'normal',
}))`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  .mobile_nav {
    display: none;
    @media (max-width: 465px) {
      display: block;
    }
    .mobile_nav_header {
      display: flex;
      padding: 20px 24px;
      justify-content: space-between;
      h1 {
        font-size: 16px;
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 700;
      }
    }
    .mobile_modal {
      background: #000000;
      width: 35%;
      position: absolute;
      top: 0;
      z-index: 9999;
      right: 0;
      padding: 15px;
      border-radius: 30px 0 0 30px;
      .close_icon {
        width: 100%;
        text-align: right;
      }
      .nav_links a {
        color: #ffffff;
        font-size: 16px;
        font-family: ${(props) => props.theme.fonts.headingFont};
      }
      .nav_links p {
        margin-top: 16px;
      }
      .social_links {
        margin-top: 20px;
        a {
          color: #ffffff;
        }
        li {
          margin-top: 10px;
        }
      }
    }
  }
`
