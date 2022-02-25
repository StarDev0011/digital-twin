import styled from 'styled-components'

export const AboutMissionWrapper = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  @media (max-width: 465px) {
    padding: 5%;
    display: block;
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
    font-size: 18px;
    font-family: ${(props) => props.theme.fonts.bodyFont};
    line-height: 2;
    margin-top: 1.5rem;
    letter-spacing: 0.03em;
    @media (max-width: 465px) {
      font-size: 18px;
      margin-top: 0;
    }
  }
  h4 {
    font-size: 20px;
    line-height: 1.6;
    color: #000000;
    font-family: ${(props) => props.theme.fonts.bodyFont};
    @media (max-width: 465px) {
      font-size: 16px;
    }
  }
  h3 {
    font-size: 30px;
    line-height: 1.6;
    color: #000000;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fonts.headingFont};
    @media (max-width: 465px) {
      font-size: 32px;
    }
  }
  .true_discover {
    animation: fadeIn 2s;
  }
`

export const AboutMissionContainer = styled.div`
  display: block;
  width: 50%;
  padding-left: 7.5%;
  padding-right: 7.5%;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 465px) {
    display: block;
    width: 100%;
    padding-right: 0%;
    padding-left: 0%;
    margin-top: 40px;
    text-align: center;
  }
`
