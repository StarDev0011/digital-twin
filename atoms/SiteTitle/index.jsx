import styled from 'styled-components'

export const SiteTitle = styled.h2.attrs((props) => ({
  align: props.align || 'center',
}))`
  font-size: 54px;
  font-family: ${(props) => props.theme.fonts.headingFont};
  text-align: ${(props) => props.align};
  font-weight: bold;
  @media (max-width: 465px) {
    font-size: 36px;
  }
`
