import styled from 'styled-components'

export const TriangleSectionWrapper = styled.section`
  div {
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 40px solid #000;
    @media (max-width: 465px) {
      width: 30px;
      height: 30px;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-top: 30px solid #000;
    }
  }
`
