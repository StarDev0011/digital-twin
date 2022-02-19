import styled from "styled-components";

export const AboutSectionWrapper = styled.div`
  padding: 9.6rem 0;
  margin-top: 50px;
`;
export const AboutSectionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  @media (max-width: 465px) {
    display:block;
  }
`;
export const AboutSectionColLeft = styled.div`
  grid-column: 1/7;
  span {
    left: -2rem;
  }
  h4 {
    font-size: 1.8rem;
    font-family: ${(props) => props.theme.fonts.headingFont};
    font-weight: bold;
    margin-top: 2.4rem;
    letter-spacing: 0.5px;
  }
  p {
    font-size: 22px;
    font-family: ${(props) => props.theme.fonts.headingFont};
    @media (max-width: 465px) {
      font-size: 16px;
    }
    line-height: 1.8;
    margin-top: 2.4rem;
    letter-spacing: 0.5px;
  }
  @media (max-width: 465px) {
    width:96%;
    padding-left:2%;
    text-align:center;
    margin-bottom: 30px;
  }
`;
export const AboutSectionColRight = styled.div`
  grid-column: 7/-1;
  text-align: right;
  @media (max-width: 465px) {
    width:96%;
    padding-left:2%;
  }
`;
