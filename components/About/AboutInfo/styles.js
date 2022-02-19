import styled from "styled-components";

export const AboutInfoWrapper = styled.section`
  padding: 10rem 0;
  margin-top: 50px;
  @media (max-width: 465px) {
    padding:2%;
  }
`;

export const AboutInfoTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  letter-spacing: 0.03em;
  font-family: ${(props) => props.theme.fonts.headingFont};
  line-height: 1.6;
  margin-bottom:100px;
  @media (max-width: 465px) {
    font-size: 28px;
    margin-bottom: 50px;
  }
`;
export const AboutInfoItems = styled.div`
  .single_problem {
    margin-top:30px;
    h3 {
      font-size:35px;
      font-weight: 400;
      margin-bottom: 20px;
      font-family: ${(props) => props.theme.fonts.headingFont};
      font-style: italic;
      @media (max-width: 465px) {
        font-size:28px;
      }
    }
    .true_icon_text{
      margin-bottom:0;
        display:flex;
        animation-name: floating;
        animation-duration: 4s;
        animation-timing-function: ease-in-out;
        .problem_txt {
          font-size: 24px;
          width: 90%;
          margin-top: auto;
          margin-bottom: auto;
          font-family: ${(props) => props.theme.fonts.headingFont};
          line-height: 1.8;
          @media (max-width: 465px) {
            width:85%;
            padding-left:5%;
            font-size:18px;
          }
        }
        .problem_icon {
          width: 10%;
          @media (max-width: 465px) {
            width:15%;
          }
        }
    }
  }

`;