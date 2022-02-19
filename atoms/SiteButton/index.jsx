import styled from 'styled-components'

export const SiteButton = styled.div.attrs((props) => ({
  buttonTheme: props.buttonTheme || 'dark',
  buttonBorder: props.buttonBorder || false,
}))`
  a {
    background: ${(props) =>
      props.buttonTheme === 'light'
        ? props.theme.colors.whiteColor
        : props.theme.colors.blackColor};
    color: ${(props) =>
      props.buttonTheme === 'light'
        ? props.theme.colors.blackColor
        : props.theme.colors.whiteColor};

    font-family: ${(props) => props.theme.fonts.headingFont};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.4rem 3.2rem;
    text-align: center;
    font-size: 1.6rem;
    border-radius: 50rem;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    width: max-content;
    transition: all 0.5s;
    line-height: 1.4;
    border: ${(props) =>
      props.buttonBorder &&
      `1px solid 
      ${props.theme.colors.blackColor}`};

    &:hover,
    &:active,
    &:focus {
      transition: all 0.5s;
      background: ${(props) => props.theme.colors.blackColor};
      color: ${(props) => props.theme.colors.whiteColor};
    }
    @media (max-width: 465px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (max-width: 465px) {
    width: 50%;
  }
`
