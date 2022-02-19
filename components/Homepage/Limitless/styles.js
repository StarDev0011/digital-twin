import styled from 'styled-components'

export const LimitlessWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 10rem;
  position: relative;
  overflow: hidden;
  display: flex;
  @media (max-width: 465px) {
    padding: 2%;
    display: block;
  }
`
export const SiteImageWrapper = styled.div`
  width: 50%;
  @media (max-width: 465px) {
    position: relative;
    width: auto;
    height: auto;
  }
  img {
    width: 100%;
    height: 100%;
  }
  /* div {
    transform: rotate(-69deg);
  } */
`
export const LimitlessData = styled.div`
  h2 {
    font-size: 54px;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.headingFont};
    line-height: 1.25;
    margin-bottom: 30px;
    @media (max-width: 465px) {
      font-size: 36px;
    }
  }
  p {
    font-size: 24px;
    line-height: 2;
    font-family: ${(props) => props.theme.fonts.headingFont};
    @media (max-width: 465px) {
      font-size: 16px;
    }
  }
  .limitless_icon_txt {
    border: solid 1px rgba(0, 0, 0, 0.25);
    width: fit-content;
    display: flex;
    padding: 5px;
    border-radius: 500px;
    margin-top: 30px;
    p {
      font-size: 18px;
      font-weight: 600;
      margin-left: 10px;
      margin-right: 30px;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`

export const LimitlessContainer = styled.div`
  display: block;
  width: 50%;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 465px) {
    display: block;
    width: 100%;
    padding-right: 0%;
  }
`

export const LimitlessButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  @media (max-width: 465px) {
    margin-top: 20%;
  }
  .auction_btn {
    background: black;
    font-family: ${(props) => props.theme.fonts.headingFont};
    color: white;
    font-size: 1.6rem;
    padding: 20px 100px;
    border-radius: 500px;
  }
`
