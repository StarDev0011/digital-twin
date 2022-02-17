import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  min-height: calc(100vh - 155px);
  height: calc(100vh - 155px);

  width: 100%;
  background-image: url("/images/herobg.png");
  background-color: #e3e3e4;
  background-size: cover;
  object-fit: cover;
  @media (max-width: 465px) {
    min-height: 100vh;
    height: 100%;
  }
`;

export const HeroSectionWrapper2 = styled.section`
  min-height: calc(100vh - 155px);
  height: calc(100vh - 155px);

  width: 100%;
  background: transparent;
  background-size: cover;
  object-fit: cover;
  @media (max-width: 465px) {
    min-height: 100vh;
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  align-items: center;
  width: 100%;
  place-items: center;
  height: 100%;
  grid-column-gap: 2rem;
  @media (max-width: 465px) {
    display:block;
  }
`;
export const HeroContent2 = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  align-items: center;
  width: 100%;
  place-items: center;
  height: 100%;
  grid-column-gap: 2rem;
  .content_data {
    padding-top: 50px;
    padding-bottom: 20px;
    .how_btn {
      margin-left: 0px;
    }
  }
  @media (max-width: 465px) {
    display:block;
  }
`;

export const HeroImage = styled.div``;
export const HeroData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 465px) {
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;
    text-align: center;
  }
`;
export const HeroTitle = styled.h2`
  font-size: 54px;
  font-family: ${(props) => props.theme.fonts.headingFont};
  line-height: 1.4;
  letter-spacing: 0px;
  font-weight: bold;
  @media (max-width: 465px) {
    font-size: 36px;
  }
`;

export const HeroTitle2 = styled.h2`
  font-size: 54px;
  font-family: ${(props) => props.theme.fonts.headingFont};
  line-height: 1.4;
  letter-spacing: 0px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 50px;
  @media (max-width: 465px) {
    font-size: 36px;
  }
`;

export const HeroButtonsWrapper = styled.div`
  margin: 4.6rem 0;
  display: flex;
  div {
    &:last-child {
      margin-left: 2rem;
    }
  }
  @media (max-width: 465px) {
    width:100%
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 30px;
  font-family: ${(props) => props.theme.fonts.headingFont};
  line-height: 1.6;
  letter-spacing: 0.5px;
  font-weight: bold;
  @media (max-width: 465px) {
    font-size: 20px;
  }
`;

export const HeroSubtitle2 = styled.p`
  font-size: 30px;
  font-family: ${(props) => props.theme.fonts.headingFont};
  line-height: 1.6;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: #ffffff;
  @media (max-width: 465px) {
    font-size: 20px;
  }
`;
