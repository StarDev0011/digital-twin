import styled from 'styled-components'

export const AboutMissionWrapper = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  @media (max-width: 465px) {
<<<<<<< HEAD
    padding: 2%;
    display: block;
=======
    padding: 5%;
    display:block;
>>>>>>> 48073718ed8d7ef88d7c2a8349421d4492a6676c
    margin-top: 50px;
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
`
export const AboutMissionData = styled.div`
  grid-column: 6/-1;
  p {
    font-size: 24px;
    font-family: ${(props) => props.theme.fonts.headingFont};
    line-height: 2;
    margin-top: 1.5rem;
    letter-spacing: 0.03em;
    @media (max-width: 465px) {
      font-size: 18px;
      margin-top:0;
    }
  }
  h4 {
    font-size: 30px;
    line-height: 1.6;
    color: #000000;
    font-family: ${(props) => props.theme.fonts.headingFont};
    @media (max-width: 465px) {
      font-size: 24px;
    }
  }
  h3 {
    font-size: 48px;
    line-height: 1.6;
    color: #000000;
    font-family: ${(props) => props.theme.fonts.headingFont};
    @media (max-width: 465px) {
      font-size: 32px;
    }
  }
`

export const AboutMissionContainer = styled.div`
  display: block;
  width: 50%;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 465px) {
<<<<<<< HEAD
    display: block;
    width: 100%;
    padding-right: 0%;
    padding-left: 0%;
=======
    display:block;
    width:100%;
    padding-right:0%;
    padding-left:0%;
    margin-top: 40px;
>>>>>>> 48073718ed8d7ef88d7c2a8349421d4492a6676c
  }
`
