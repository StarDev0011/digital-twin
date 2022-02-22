import styled from 'styled-components'

export const AboutSectionWrapper = styled.div`
  padding: 9.6rem 0;
  margin-top: 50px;
  @media (max-width: 465px) {
    margin-top: 0px;
  }
`
export const AboutSectionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  @media (max-width: 465px) {
    display: block;
  }
`
export const AboutSectionColLeft = styled.div`
  grid-column: 1/7;
  div {
    left: -2.5rem;
    @media (max-width: 465px) {
      left: -0;
      width: 100%;
    }
  }
  h4 {
    font-size: 1.8rem;
    font-family: ${(props) => props.theme.fonts.headingFont};
    font-weight: bold;
    margin-top: 2.4rem;
    letter-spacing: 0.5px;
    @media (max-width: 465px) {
      font-size: 16px;
      margin-top: 0;
      text-align: center;
    }
  }
  h2 {
    @media (max-width: 465px) {
      text-align: center;
    }
  }
  p {
    font-size: 22px;
    font-family: ${(props) => props.theme.fonts.headingFont};
    @media (max-width: 465px) {
      font-size: 18px;
      margin-top: 40px;
    }
    line-height: 1.8;
    margin-top: 2.4rem;
    letter-spacing: 0.5px;
  }
  .mobile_img {
    display: none;
    @media (max-width: 465px) {
      display: block;
      width: 100%;
      margin-top: 50px;
    }
  }
  @media (max-width: 465px) {
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    margin-bottom: 30px;
  }
`
export const AboutSectionColRight = styled.div`
  grid-column: 7/-1;
  text-align: right;
  @media (max-width: 465px) {
    width: 96%;
    padding-left: 2%;
    display: none;
  }
`
