import styled from "styled-components";

export const HowItWorksWrapper = styled.section`
  padding: 12rem 0;
  @media (max-width: 465px) {
    padding: 10% 2%;
  }
`;
export const HowItWorksData = styled.ul`
  list-style: none;
  display: grid;
  margin-top: 9.2rem;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 6rem;
  @media (max-width: 465px) {
    display: block;
  }
`;
export const HowItWorksItem = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 465px) {
    margin-bottom: 20px;
  }
  &:first-child {
    grid-column: 1/9;
    grid-row: 1/2;
  }
  &:nth-child(2) {
    grid-column: 5/-1;
    grid-row: 2/3;
  }
  &:nth-child(3) {
    grid-column: 1/9;
    grid-row: 3/4;
  }
  &:last-child {
    grid-column: 5/-1;
    grid-row: 4/5;
  }
  .iconWrapper {
    min-width: 10rem;
    width: 10rem;
    height: 10rem;
    margin-right: 2.2rem;
    background: ${(props) => props.theme.colors.blackColor};
    border-radius: 100rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme.colors.whiteColor};
      font-size: 5rem;
    }
  }
  .processData {
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 2.4rem;
      font-family: ${(props) => props.theme.fonts.headingFont};
      font-weight: bold;
      letter-spacing: 0.5px;
    }
    p {
      font-size: 20px;
      @media (max-width: 465px) {
        font-size: 16px;
      }
      line-height: 1.8;
      margin-top: 1rem;
      letter-spacing: 0.5px;
    }
  }
`;
