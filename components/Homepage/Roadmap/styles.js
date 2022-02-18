import styled from "styled-components";

export const RoadmapData = styled.div`
  margin-top: 9.2rem;
`;
export const RoadmapItem = styled.div`
  list-style: none;
  .processData {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    position:relative;
    @media (max-width: 480px) {
        width: 96%;
        padding: 2%;
      }
      
    h1 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-size:45px;
        width: 60px;
        height: 60px;
        background: black;
        border-radius: 50%;
        color: #ffffff;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        text-align:center;
        margin-top: -30px;
        z-index: 2;
    }
    h3 {
      font-size: 24px;
      font-family: ${(props) => props.theme.fonts.headingFont};
      font-weight: bold;
      letter-spacing: 0.5px;
      padding: 0 50px;      
      @media (max-width: 480px) {
        font-size: 18px;
      }
    }
    p {
      font-size: 22px;
      font-family: ${(props) => props.theme.fonts.headingFont};
      @media (max-width: 465px) {
        font-size: 16px;
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
  }
  &:first-child .roadmap_item {
    animation-name: floating;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
  }
  &:nth-child(2) .processData::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left:50%;
    width: 50%;
    height: 100%;
    border: dotted;
    border-left: none;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    z-index: -1;
  }
  &:nth-child(2) .roadmap_item {
    animation-name: floating1;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    text-align:right;
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
  }
  &:nth-child(3) .roadmap_item {
    animation-name: floating;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
  }
  &:nth-child(4) .roadmap_item {
    animation-name: floating1;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    text-align: right;
  }
`;