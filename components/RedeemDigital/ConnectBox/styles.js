import styled from 'styled-components'

export const ContentWrapper = styled.section`
  padding: 5rem 0;
  @media (max-width: 465px) {
    padding: 5%;
  }
`

export const SectionWrapper = styled.section`
  max-width: 720px;
  background: #ffffff;
  margin: 100px auto;
  padding: 45px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 30%) 0px 5px 10px;
  border-radius: 5px;
  @media (max-width: 767px) {
    padding: 20px 20px;
    max-width: 100%;
    border-radius: 5px;
    margin: 50px 15px;
  } 
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-transform: capitalize;
    @media (min-width: 768px) {
      line-height: 33px;
      margin-bottom: 40px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  .box-head {
    display: flex;
    justify-content: space-between;
  }
  .box-head p {
    font-size: 18px;
    line-height: 24px;
  }
  .shadow-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 36px 40px;
    gap: 20px;
    max-width: 630px;
    background: #ffffff;
    border-radius: 8px;
    @media (min-width: 768px) {
      border: 1px solid #dee2e6;
      box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);
    }
    @media (max-width: 767px) {
      flex-direction: column;
      text-align: center;
      padding: 36px 0px;
    }
  }
  .content-wrapper h3 {
    font-style: normal;
    font-weight: 600;
    color: #54595e;
    margin: 0 0 8px;
    font-size: 20px;
    line-height: 24px;
  }
  .content-wrapper p {
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(84, 89, 94, 0.6);
  }
  .shipping_button a {
    background: #000000;
    max-width: 450px;
    border-radius: 500px;
    display: block;
    text-align: center;
    padding: 16px;
    margin: 65px auto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-decoration: none;
    color: #fff;
    @media (max-width: 767px) {
      margin: 0px auto 30px;
      font-size: 16px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .shipping_button p {
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    text-transform: capitalize;
    color: #000000;
    @media (max-width: 767px) {
      font-size: 14px; 
    }    
  }
`
