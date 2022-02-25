import styled from 'styled-components'

export const MarketplaceContentWrapper = styled.section`
  min-height: calc(100vh - 155px);
  height: calc(100vh - 155px);
  background: ${(props) => props.theme.colors.blackColor};
  width: 100%;
  h2 {
    font-size: 40px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.whiteColor};
    font-family: ${(props) => props.theme.fonts.headingFont};
  }
  p {
    font-size: 2.4rem;
    color: ${(props) => props.theme.colors.whiteColor};
    font-family: ${(props) => props.theme.fonts.bodyFont};
    margin-top: 4rem;
  }
`

export const MarketPlaceData = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
