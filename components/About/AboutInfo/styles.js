import styled from 'styled-components'

export const AboutInfoWrapper = styled.section`
  padding: 10rem 0;
  margin-top: 50px;
  background: #000000;
  @media (max-width: 465px) {
    padding: 5%;
    text-align: center;
  }
`

export const AboutInfoTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  letter-spacing: 0.03em;
  font-family: ${(props) => props.theme.fonts.headingFont};
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 100px;
  @media (max-width: 465px) {
    font-size: 24px;
    margin-bottom: 50px;
    text-align: center;
  }
`
export const AboutInfoItems = styled.div`
  div {
    color: #ffffff;
    .true_icon_text {
      margin-bottom: 0;
      display: flex;
      animation-name: floating;
      animation-duration: 3s;
      animation-timing-function: ease-in-out;
      .problem_txt {
        font-size: 24px;
        width: 90%;
        margin-top: auto;
        margin-bottom: auto;
        font-family: ${(props) => props.theme.fonts.headingFont};
        line-height: 1.8;
        @media (max-width: 465px) {
          width: 85%;
          padding-left: 5%;
          font-size: 18px;
        }
      }
      .problem_icon {
        width: 10%;
        @media (max-width: 465px) {
          width: 15%;
        }
      }
    }

    &:nth-child(2) .true_icon_text {
      animation-duration: 4s;
    }

    &:nth-child(3) .true_icon_text {
      animation-duration: 5s;
    }
  }
  .single_problem_mob {
    display: none;
    @media (max-width: 465px) {
      display: block;
      margin-top: 30px;
    }
    h3 {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: auto;
      margin-top: auto;
      font-family: ${(props) => props.theme.fonts.headingFont};
      font-style: italic;
    }
    .problem_icon {
      width: 15%;
      margin-left: auto;
      margin-right: auto;
    }
    .mob_icon_text {
      display: block;
    }
    .problem_txt {
      font-size: 18px;
      font-family: ${(props) => props.theme.fonts.headingFont};
      margin-top: 10px;
      line-height: 2;
    }
  }

  .single_problem {
    margin-top: 30px;
    @media (max-width: 465px) {
      display: none;
    }
    h3 {
      font-size: 35px;
      font-weight: 400;
      margin-bottom: 20px;
      font-family: ${(props) => props.theme.fonts.headingFont};
      font-style: italic;
      @media (max-width: 465px) {
        font-size: 28px;
      }
    }
  }
`
