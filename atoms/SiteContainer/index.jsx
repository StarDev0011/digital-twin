import styled from 'styled-components'

export const SiteContainer = styled.div.attrs((props) => ({
  size: props.size || 'normal',
}))`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`

export const MenuContainer = styled.div.attrs((props) => ({
  size: props.size || 'normal',
}))`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
`
