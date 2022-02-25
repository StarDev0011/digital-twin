import { SiteButton } from '../../../atoms/SiteButton'
import styled from 'styled-components'

export const NewsletterSectionWrapper = styled.section`
  position: relative;
  text-align: center;
  @media (max-width: 465px) {
    padding-bottom: 10rem;
    padding-top: 5rem;
  }
  p {
    font-family: ${(props) => props.theme.fonts.bodyFont};
    font-size: 18px;
    margin-top: 3.6rem;
    margin-bottom: 10rem;
    @media (max-width: 465px) {
      margin-bottom: 3.6rem;
    }
  }
`
export const NewsletterTitle = styled.div`
  position: relative;
  &::before {
    content: '';
    top: 50%;
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors.blackColor};
    left: 0;
    z-index: 4;
  }
  h3 {
    text-align: center;
    z-index: 5;
    width: max-content;
    margin: 0 auto;
    padding: 0 1rem;
    background: ${(props) => props.theme.colors.whiteColor};
    position: relative;
    font-size: 2.4rem;
    font-family: ${(props) => props.theme.fonts.headingFont};
    @media (max-width: 465px) {
      font-size: 24px;
    }
  }
`
export const NewsletterButton = styled(SiteButton)`
  margin: 10rem 0 0 0;
  width: 100%;
  text-align: center;
  a {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
    padding: 1.4rem 8rem;
  }
  a:hover {
    box-shadow: 0 1rem 1rem -2px rgb(0 0 0 / 50%);
    transition: box-shadow 0.5s;
  }
  .true_nevermiss {
    animation: fadeIn 3s;
  }
`
