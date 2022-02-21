import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  padding: 4.2rem 1rem;
  @media (max-width: 465px) {
    background: #000000;
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
    width: calc(1400px + (100vw - 1400px) / 2 - 1rem);
    @media (max-width: 1400px) {
      width: 100%;
    }
    height: 1px;
    background: ${(props) => props.theme.colors.blackColor};
    z-index: 3;
  }
`

export const FooterLogo = styled.h2`
  font-size: 2.8rem;
  font-family: ${(props) => props.theme.fonts.headingFont};
  font-weight: bold;
  color: ${(props) => props.theme.colors.blackColor};
  background: ${(props) => props.theme.colors.whiteColor};
  line-height: 1;
  z-index: 5;
  padding-right: 2.4rem;
  @media (max-width: 465px) {
    color: #ffffff;
    background: #000000;
    font-size: 28px;
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
    font-family: ${(props) => props.theme.fonts.headingFont};
    @media (max-width: 465px) {
      color: #ffffff;
    }
  }
  h3 {
    font-family: ${(props) => props.theme.fonts.headingFont};
    font-size: 2rem;
    @media (max-width: 465px) {
      color: #ffffff;
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
  .newsletterInfo {
    font-size: 1.6rem;
    font-family: ${(props) => props.theme.fonts.headingFont};
    margin-top: 2.8rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    @media (max-width: 465px) {
      color: #ffffff;
      font-size: 16px;
      margin-bottom: 30px;
    }
  }
  .join_us {
    @media (max-width: 465px) {
      background: #ffffff;
      color: #000000;
      padding: 15px 40px;
      margin-left: 0;
    }
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
      color: ${(props) => props.theme.colors.blackColor};
      font-family: ${(props) => props.theme.fonts.headingFont};
      letter-spacing: 0.5px;
      font-size: 1.4rem;
      text-align: center;
      text-transform: capitalize;
      @media (max-width: 465px) {
        color: #ffffff;
        font-size: 16px;
      }
    }
  }
`
export const SocialItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  margin-top: 4rem;
  @media (max-width: 465px) {
    flex-direction: row;
  }

  li {
    @media (max-width: 465px) {
      margin-right: 10px;
    }
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    a {
      font-size: 3rem;
      color: ${(props) => props.theme.colors.blackColor};
      @media (max-width: 465px) {
        color: #ffffff;
      }
    }
  }
`

export const CopyrightWrapper = styled.div`
  padding: 3.2rem;
  border-top: 1px solid ${(props) => props.theme.colors.blackColor};
  @media (max-width: 465px) {
    background: #000000;
  }
  p {
    font-size: 16px;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.headingFont};
    @media (max-width: 465px) {
      color: #ffffff;
    }
  }
`
