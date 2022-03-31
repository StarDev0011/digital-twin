import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  padding: 4.2rem 1rem;
  background: #000000;
  @media (max-width: 465px) {
    padding: 5rem;
  }
`
export const FooterLogoWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 2.4rem;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: calc(1200px + (100vw - 1200px) / 2 - 1rem);
    @media (max-width: 1200px) {
      width: 100%;
      display: none;
    }
    height: 1px;
    background: #ffffff;
    z-index: 1;
  }
`

export const FooterLogo = styled.h2`
  font-size: 2.8rem;
  font-family: ${(props) => props.theme.fonts.headingFont};
  font-weight: bold;
  color: ${(props) => props.theme.colors.whiteColor};
  background: ${(props) => props.theme.colors.blackColor};
  line-height: 1;
  z-index: 2;
  padding-right: 2.4rem;
  @media (max-width: 465px) {
    color: #ffffff;
    background: #000000;
    font-size: 28px;
    z-index: 0;
  }
`

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.4rem;
  @media (max-width: 465px) {
    display: block;
  }
`
export const FooterCol = styled.div`
  @media (max-width: 465px) {
    margin-top: 30px;
  }
  .siteInfo {
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.bodyFont};
  }
  h3 {
    font-family: ${(props) => props.theme.fonts.bodyFont};
    font-size: 16px;
    color: #ffffff;
    @media (max-width: 465px) {
      margin-bottom: 30px;
    }
  }
  .newsletterInfo {
    font-size: 1.6rem;
    font-family: ${(props) => props.theme.fonts.bodyFont};
    margin-top: 2.8rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #ffffff;
    @media (max-width: 465px) {
      font-size: 16px;
      margin-bottom: 30px;
    }
  }
  .join_us {
    background: #ffffff;
    color: #000000;
    padding: 15px 40px;
    margin-left: 0;
  }
`
export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 2.8rem;
  li {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    a {
      color: ${(props) => props.theme.colors.whiteColor};
      font-family: ${(props) => props.theme.fonts.bodyFont};
      letter-spacing: 0.5px;
      font-size: 1.4rem;
      text-align: center;
      text-transform: capitalize;
      @media (max-width: 465px) {
        font-size: 16px;
      }
    }
  }
`
export const SocialItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  list-style: none;
  margin-top: 12rem;
  @media (max-width: 465px) {
    margin-top: 4rem;
  }

  li {
      margin-right: 10px;
  }
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    a {
      font-size: 3rem;
      color: ${(props) => props.theme.colors.whiteColor};
    }
  }
`

export const CopyrightWrapper = styled.div`
  padding: 3.2rem;
  border-top: 1px solid ${(props) => props.theme.colors.whiteColor};
  background: #000000;
  color: #ffffff;
  ul {
    list-style-type: none;
    display: flex;
  }
  li a {
    color: #ffffff;
  }
  li {
    font-size: 16px;
    text-align: left;
    margin-right: 3rem;
  }
  li:not(:first-child) {
    border-left: 2px solid white;
    padding-left: 3rem;
  }
`
