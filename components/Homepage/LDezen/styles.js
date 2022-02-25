import styled from 'styled-components'

export const LDezenWrapper = styled.div`
  padding: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  @media (max-width: 465px) {
    padding: 0%;
    display: block;
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
    height: auto;
  }
  /* div {
    transform: rotate(-69deg);
  } */
`
export const LDezenData = styled.div`
  grid-column: 7/-1;
  h2 {
    @media (max-width: 465px) {
      text-align: center;
    }
  }
  p {
    font-size: 16px;
    font-family: ${(props) => props.theme.fonts.bodyFont};
    @media (max-width: 465px) {
      font-size: 16px;
    }
    line-height: 1.8;
    margin-top: 1.5rem;
  }
`

export const LDezenContainer = styled.div`
  display: block;
  width: 50%;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 7.5%;
  padding-right: 7.5%;
  @media (max-width: 465px) {
    display: block;
    width: 100%;
    padding: 5%;
    text-align: center;
  }
`
