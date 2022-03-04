import styled from 'styled-components'

export const DiscoverTwinSection = styled.section`
  background-color: #333;
  margin-bottom: 20px;
  .discover-row {
    grid-template-columns: 2fr 1fr;
    column-gap: 15px;
    align-items: center;
    padding: 50px 50px;
    @media (min-width: 768px) {
      display: grid;
    }
  }
  .discover-row h2 {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Mirador';
    @media (max-width: 767px) {
      margin-bottom: 20px;
      font-size: 26px;
    }
    @media (min-width: 768px) {
      line-height: 72px;
      font-size: 36px;
      display: inline-block;
      padding-right: 20px;
      border-width: 1px 1px 0px 0px;
      border-color: white;
      border-style: solid;
    }
  }
  .discover-row p {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    line-height: 2;
    font-family: Assistant;
  }
  .img-bx img {
    max-width: 150px;
    margin: 0 auto;
    display: block;
    @media (max-width: 767px) {
      margin-top: 30px;
    }
  }
  .discover-inner {
    @media (min-width: 768px) {
      width: 605px;
    }
  }
`
