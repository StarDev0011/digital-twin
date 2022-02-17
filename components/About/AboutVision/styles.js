import styled from "styled-components";

export const VisionWrapper = styled.div`
  padding: 0;
  display:flex;
  position: relative;
  overflow: hidden;
  margin-top: 0rem;
  @media (max-width: 465px) {
    padding:2%;
    display:block;
    margin-top: 50px;
  }
`;
export const SiteImageWrapper = styled.div`
  width: 50%;
  @media (max-width: 465px) {
    position: relative;
    width:auto;
    height:auto;
  }
  img {
    width: 100%;
  }
`;
export const VisionData = styled.div`
  grid-column: 1/7;

  p {
    font-size: 24px;
    line-height: 2;
    margin-top: 1.5rem;
    @media (max-width: 465px) {
      font-size: 16px;
    }
  }
`;

export const VisionContainer = styled.div`
  display: block;
  width:50%;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 5%;
  padding-right: 5%;
  @media (max-width: 465px) {
    display:block;
    width:100%;
    padding-left: 0%;
    padding-right: 0%;
  }
`;
