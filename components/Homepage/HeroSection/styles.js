import styled from 'styled-components'

export const HeroSectionWrapper = styled.section`
  min-height: calc(100vh - 125px);
  height: calc(100vh - 125px);

  width: 100%;
  background: transparent;
  background-size: cover;
  object-fit: cover;
  #video_bg {
    @media (max-width: 465px) {
      display: none;
    }
  }
  @media (max-width: 465px) {
    min-height: 100vh;
    height: 100%;
    background-image: url('/images/landing1_mob.png');
    background-position: center;
  }
`

export const HeroSectionWrapper2 = styled.section`
  min-height: calc(100vh - 125px);
  height: calc(100vh - 125px);

  width: 100%;
  background: black;
  background-size: cover;
  object-fit: cover;
  #video_bg {
    @media (max-width: 465px) {
      display: none;
    }
  }
  @media (max-width: 465px) {
    min-height: 100vh;
    height: 100%;
    background-image: url('/images/landing_mob.png');
  }
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  align-items: center;
  width: 100%;
  place-items: center;
  height: 100%;
  grid-column-gap: 2rem;
  @media (max-width: 465px) {
    display: block;
  }
`
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
    @media (max-width: 465px) {
      width: 100%;
      order: 2;
    }
    .true_sub2 {
      animation: fadeIn 3s;
      animation-delay: 0.3s;
    }
    .how_btn {
      margin-left: 0px;
    }
  }
  @media (max-width: 465px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;
    text-align: center;
  }
`

export const HeroImage = styled.div`
  width: 500px;
  @media (max-width: 465px) {
    width: 90%;
    margin: auto;
    padding-top: 5%;
  }
  #video_bg1 {
    width: 100%;
    background: #6b6aa5;
    border-radius: 8px;
    box-shadow: 0px 0px 24px 13px #6b6aa5;
  }
  #video_bg1: hover {
    transform: scale(1.1);
  }
`
export const HeroData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .true_sub {
    animation: fadeIn 3s;
    animation-delay: 0.3s;
  }
  @media (max-width: 465px) {
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;
    text-align: center;
    display: block;
  }
`
export const HeroTitle = styled.h2`
  font-size: 40px;
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts.headingFont};
  line-height: 1.2;
  letter-spacing: 0px;
  font-weight: bold;
  @media (max-width: 465px) {
    font-size: 36px;
    margin-bottom: 50px;
    margin-top: 10px;
  }
`

export const HeroTitle2 = styled.h2`
  font-size: 40px;
  font-family: ${(props) => props.theme.fonts.headingFont};
  line-height: 1.4;
  letter-spacing: 0px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 50px;
  @media (max-width: 465px) {
    font-size: 36px;
  }
`

export const HeroButtonsWrapper = styled.div`
  margin: 4.6rem 0;
  display: flex;
  .how_btn {
    width: 100%;
  }
  div {
    @media (max-width: 465px) {
      width: 50%;
    }
    a {
      padding: 1rem 4rem;
    }
    &:last-child {
      margin-left: 2rem;
      @media (max-width: 465px) {
        margin-left: 0px;
        margin-top: 0px;
      }
    }
  }
  @media (max-width: 465px) {
    width: 100%;
    display: flex;
  }
`

export const HeroSubtitle = styled.p`
  font-size: 30px;
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts.bodyFont};
  line-height: 1.4;
  letter-spacing: 0.5px;
  font-weight: 600;
  @media (max-width: 465px) {
    font-size: 18px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const HeroSubtitle2 = styled.p`
  font-size: 30px;
  font-family: ${(props) => props.theme.fonts.bodyFont};
  line-height: 1.6;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: #ffffff;
  @media (max-width: 465px) {
    font-size: 18px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
`
