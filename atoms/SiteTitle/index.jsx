import styled from 'styled-components'

export const SiteTitle = styled.h2.attrs((props) => ({
  align: 'left',
}))`
  font-size: 40px;
  font-family: ${(props) => props.theme.fonts.headingFont};
  text-align: ${(props) => props.align};
  font-weight: bold;
  @media (max-width: 465px) {
    font-size: 36px;
    line-height: 1.6;
  }
`
