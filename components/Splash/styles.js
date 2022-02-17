import styled from "styled-components";

export const SplashWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.blackColor};
`;
