import styled from 'styled-components'

export const FaqContentWrapper = styled.section`
  padding: 5rem 5rem;
  .faq-row-wrapper {
    @media (min-width: 768px) {
      width: 900px;
      margin: 0 auto 50px;
    }
  }
  section.faq-title {
    border-bottom: none !important;
  }
  .row-content-text {
    line-height: 26px;
    margin-bottom: 10px;
  }
  h2 {
    text-align: center;
    display: block;
    width: 100%;
    margin-bottom: 70px !important;
    font-family: 'Mirador';
    font-weight: bold;
    color: #000 !important;
  }
  .row-title-text {
    font-family: Assistant;
    font-weight: bold;
    color: #000;
  }
`
