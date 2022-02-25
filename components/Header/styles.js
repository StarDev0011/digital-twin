import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  @media (max-width: 465px) {
    display: none;
  }
`
export const HeaderTop = styled.div`
  display:flex;
  justify-content: space-between;
  width: 100%;
  .logo {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      margin-bottom: auto;
      margin-top: auto;
    }
  }
  .header_center {
    margin-bottom: auto;
    margin-top: auto;
    @media (max-width: 465px) {
      margin-left: 0px;
    }
  }
  .connect_wallet {
    position: absolute;
    top: 30px;
    right: 5%;
    @media (max-width: 465px) {
      display: none;
    }
  }
`
export const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.div`
  color: ${(props) => props.theme.colors.blackColor};
  font-family: ${(props) => props.theme.fonts.headingFont};
  letter-spacing: 0.5px;
  font-size: 30px;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: auto;
  margin-top: auto;
`
export const MenuItems = styled.div`
  display: flex;
  list-style: none;
  li {
    &:not(:last-child) {
      margin-right: 3rem;
    }
    a {
      color: ${(props) => props.theme.colors.blackColor};
      font-family: ${(props) => props.theme.fonts.bodyFont};
      font-weight: 400;
      letter-spacing: 0.5px;
      font-size: 18px;
      text-align: center;
      text-transform: uppercase;
      @media (max-width: 465px) {
        font-size: 14px;
      }
    }
  }
`
export const SocialItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;

  li {
    &:not(:last-child) {
      margin-bottom: 0;
    }
    a {
      font-size: 2.2rem;
      color: ${(props) => props.theme.colors.blackColor};
    }
  }
`
