import styled from 'styled-components'

export const SiteModalWrapper = styled.div.attrs((props) => ({
  display: props.display,
}))`
  display: ${(props) => props.display};
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 20px 20px;
  z-index: 99;
  @media screen and (max-width: 767px) {
    margin: 15px 15px;
  }
  .modal-content {
    max-width: 90%;
    text-align: center;
    padding-top: 15px;
    margin: 30px auto 15px;
  }
  .pop-msg {
    text-align: center;
  }
  .modal-content img {
    width: 45px;
    margin-right: 15px;
  }
  .modal-content h4 {
    font-size: 20px;
    font-weight: bold;
    margin: 15px 0;
    color: #54595e;
  }
  .modal-content p {
    font-size: 15px;
    color: #54595e99;
    margin-bottom: 15px;
  }
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  button.home-redirect {
    background-color: #4f4f4f;
    color: #fff;
    font-size: 15px;
    padding: 10px 15px;
    border: 2px solid #4f4f4f;
    width: 90%;
    border-radius: 5px;
    margin-top: 10px;
  }
`
