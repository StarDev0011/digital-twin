import styled from 'styled-components'

export const RoadmapData = styled.div`
  margin-top: 9.2rem;
`
export const RoadmapItem = styled.div`
  list-style: none;
  .processData {
    display: flex;
    flex-direction: column;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    @media (max-width: 480px) {
      width: 100%;
      padding: 5%;
      margin-bottom: 30px;
    }

    h1 {
      font-family: ${(props) => props.theme.fonts.headingFont};
      font-size: 30px;
      width: 40px;
      height: 40px;
      background: black;
      border-radius: 50%;
      color: #ffffff;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
      text-align: center;
      margin-top: -20px;
      z-index: 2;
      @media (max-width: 465px) {
        margin-left: 0;
      }
    }
    h3 {
      font-size: 20px;
      font-family: ${(props) => props.theme.fonts.headingFont};
      font-weight: bold;
      letter-spacing: 0.5px;
      padding: 0 50px;
      @media (max-width: 480px) {
        font-size: 24px;
        padding: 0px;
      }
      a {
        color: #000000;
        text-decoration: underline;
      }
    }
    p {
      font-size: 18px;
      font-family: ${(props) => props.theme.fonts.bodyFont};
      @media (max-width: 465px) {
        font-size: 18px;
        padding: 0px;
      }
      line-height: 1.8;
      margin-top: 1rem;
      letter-spacing: 0.5px;
      padding-left: 25px;
      padding-right: 25px;
      padding-bottom: 25px;
    }
  }
  &:first-child .processData::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    width: 50%;
    height: 100%;
    border: dotted;
    border-right: none;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    z-index: -1;
    @media (max-width: 465px) {
      position: relative;
      display: none;
    }
  }
  &:first-child .true_roadmap_item {
    animation-name: floating;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    @media (max-width: 465px) {
      animation-name: none;
    }
  }
  &:nth-child(2) .processData::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    border: dotted;
    border-left: none;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    z-index: -1;
    @media (max-width: 465px) {
      position: relative;
      display: none;
    }
  }
  &:nth-child(2) .true_roadmap_item {
    animation-name: floating1;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    text-align: right;
    @media (max-width: 465px) {
      text-align: left;
      animation-name: none;
    }
  }
  &:nth-child(3) .processData::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    width: 50%;
    height: 100%;
    border: dotted;
    border-right: none;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    z-index: -1;
    @media (max-width: 465px) {
      position: relative;
      display: none;
    }
  }
  &:nth-child(3) .true_roadmap_item {
    animation-name: floating;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    @media (max-width: 465px) {
      animation-name: none;
    }
  }
  &:nth-child(4) .true_roadmap_item {
    animation-name: floating1;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    text-align: right;
    @media (max-width: 465px) {
      text-align: left;
      animation-name: none;
    }
  }
`
