import styled from 'styled-components'

export const AboutInfoWrapper = styled.section`
  padding: 10rem 0;
  margin-top: 50px;
  background: #000000;
  position: relative;
  @media (max-width: 465px) {
    padding: 5% 5% 10%;
    text-align: center;
  }
  :after {
    content: " ";
    position: absolute;
    bottom: -45px;
    border-top: 30px solid black;
    border-right: 60px solid transparent;
    border-left: 60px solid transparent;
    border-bottom: none;
    left: auto;
    right: auto;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
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
  .problem_sub {
    font-family: ${(props) => props.theme.fonts.bodyFont};
    font-size: 16px;
    font-weight: 300;
  }
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
        font-size: 18px;
        width: 93 %;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 2%;
        font-family: ${(props) => props.theme.fonts.bodyFont};
        line-height: 1.8;
        letter-spacing: 0.03em;
        @media (max-width: 465px) {
          width: 85%;
          padding-left: 5%;
          font-size: 18px;
        }
      }
      .problem_icon {
        width: 5%;
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
      font-size: 20px;
      font-weight: 700;
      margin-bottom: auto;
      margin-top: auto;
      font-family: ${(props) => props.theme.fonts.headingFont};
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
      font-family: ${(props) => props.theme.fonts.bodyFont};
      margin-top: 10px;
      line-height: 2;
      letter-spacing: 0.03em;
      @media (max-width: 465px) {
        font-size: 16px; 
      }
    }
  }

  .single_problem {
    margin-top: 30px;
    @media (max-width: 465px) {
      display: none;
    }
    h3 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
      font-family: ${(props) => props.theme.fonts.headingFont};
      @media (max-width: 465px) {
        font-size: 16px;
      }
    }
  }
`
