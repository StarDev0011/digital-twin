import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-size: 16px;
  background: #000000;
  color: #ffffff;
  border: none;
  padding: 20px 75px;
  border-radius: 500px;
  font-weight: 700;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 15vh;
    right: 80px;
  }
  @media screen and (max-width: 767px) {
    margin: 20px auto;
    display: block;
    width: 80%;
    padding-top: 14px;
    padding-bottom: 14px;
  }
  @media screen and (max-width: 465px) {
    .connect_button {
      position: relative;
      top: auto;
      right: auto;
      background: #ffffff;
      color: #000000;
      border: solid 1px;
      padding: 10px 20px;
    }
  }
`
