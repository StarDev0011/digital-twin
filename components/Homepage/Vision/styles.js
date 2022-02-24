import styled from 'styled-components'

export const VisionWrapper = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 465px) {
    padding: 0%;
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

  p {
    font-size: 22px;
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
  padding-right: 4.5%;
  @media (max-width: 465px) {
    display: block;
    width: 100%;
    padding: 5%;
    order: 2;
  }
`
