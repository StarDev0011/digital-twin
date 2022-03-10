import styled from 'styled-components'

export const AboutHeroWrapper = styled.section`
  padding: 10rem 0;
  @media (max-width: 465px) {
    padding: 5%;
  }
`

export const AboutImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;
  @media (max-width: 465px) {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  img {
    width: 100%;
  }
`

export const AboutTitle = styled.h2`
  text-align: center;
  font-size: 80px;
  font-family: ${(props) => props.theme.fonts.headingFont};
  font-weight: bold;
  @media (max-width: 465px) {
    font-size: 30px;
  }
`
export const AboutSubtitle = styled.h4`
  text-align: left;
  font-size: 4rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-family: ${(props) => props.theme.fonts.headingFont};
  font-weight: bold;
  @media (max-width: 465px) {
    width: 100%;
    font-size: 18px;
    text-align: center;
    line-height: 2;
  }
`
export const AboutParagraph = styled.p`
  font-size: 18px;
  text-align: left;
  font-family: ${(props) => props.theme.fonts.bodyFont};
  margin-top: 2.4rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  @media (max-width: 465px) {
    font-size: 16px;
    width: 100%;
    text-align: center;
  }
`
export const AboutParagraph2 = styled.p`
  font-size: 18px;
  text-align: left;
  font-family: ${(props) => props.theme.fonts.bodyFont};
  margin-top: 2.4rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  font-weight: 700;
  @media (max-width: 465px) {
    font-size: 16px;
    width: 100%;
    text-align: center;
  }
`
export const AboutVideoWrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 50px;
  width: 100%;
  height: 550px;
  @media (max-width: 465px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`
