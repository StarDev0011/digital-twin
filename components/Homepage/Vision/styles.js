import styled from 'styled-components'

export const VisionWrapper = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 465px) {
    padding: 5% 5%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
  }
`
export const SiteImageWrapper = styled.div`
  width: 50%;
  @media (max-width: 465px) {
    order: 1;
    position: relative;
    width: auto;
    height: auto;
  }
  img {
    width: 100%;
  }
`
export const VisionData = styled.div`
  grid-column: 1/6;
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

export const VisionContainer = styled.div`
  display: block;
  width: 50%;
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 7.5%;
  padding-left: 7.5%;
  @media (max-width: 465px) {
    display: block;
    width: 100%;
    padding: 5%;
    order: 2;
    text-align: center;
  }
`
