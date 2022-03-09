import styled from 'styled-components'

export const FileUploadWrapper = styled.section`
  .container {
    
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
    height: 100%;
  }
  .shipping-detail-row {
    margin-bottom: 50px;
    @media (max-width: 767px) {
      padding: 5%;
    }
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  .ship-top-bar {
    text-align: center;
  }
  .left-bx .form-group {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 3fr;
    }
  }

  .p-4 {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .form-group label b {
    color: red;
  }
  .form-group {
    margin-bottom: 20px;
  }
  .form-group input,
  .form-group select {
    height: 42px;
    padding: 0 15px;
    border: 1px solid #c4c4c4;
    font-size: 15px;
    color: #333;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .ship-top-bar p:first-child {
    font-size: 14px;
    margin: 15px 0 30px;
    color: #828282;
  }
  .ship-top-bar p:last-child {
    font-size: 16px;
    color: #000;
    margin-top: 15px;
  }
  h2.title {
    margin-bottom: 30px;
    font-size: 24px;
    margin-top: 0;
    font-weight: bold;
  }
  .order-summary {
    padding: 40px 30px;
    border: 2px solid #c4c4c4;
  }
  .right-bx {
    @media (min-width: 768px) {
    margin-left: 4vw;
    }
  }
  .summary-text p b {
    color: #000;
  }
  .summary-text p {
    font-size: 14px;
    text-transform: uppercase;
    color: #bfbfbf;
  }
  .order-summary select#state {
    border: 1px solid #fff !important;
    border-bottom-color: #c4c4c4 !important;
    padding: 0 0 10px;
    margin-bottom: 15px;
    width: 100%;
    font-size: 16px;
  }
  .order-detail-bx {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 767px) {
      .summary-text {
        margin-top: 20px;
      }
    }
  }
  .order-detail-bottom {
    display: grid;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #c4c4c4;
    margin-top: 50px;
    padding-top: 15px;
  }
  .order-detail-bottom a {
    border: 2px solid #020202;
    background-color: #000;
    padding: 15px 15px;
    text-transform: uppercase;
    color: #fff;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.5px;
    min-width: 150px;
  }
  a.back-btn {
    color: #828282;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    text-align: right;
    display: block;
    font-weight: 500;
    font-family: 'Oswald', sans-serif;
    margin-top: 30px;
    letter-spacing: 0.5px;
  }
  .shipping-form label {
    color: #3f3f3f;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    @media (max-width: 767px) {
      margin-bottom: 15px;
      float: left;
    }
  }
  .summary-text h4 {
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 15px;
  }

  .v-hide {
    visibility: hidden;
  }
  .choose-file-box {
    width: 100%;
    height: 410px;
    padding: 0 0;
    background: url('/images/drag-area.png');
    background-repeat: no-repeat;
    background-position: top 70px right 0;
    border-radius: 20px;
    @media (max-width: 767px) {
      background-position: center;
      background-size: contain;
    }
  }
  span.for-border {
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    width: 100%;
    display: block;
    padding: 15px 15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .choose-file-box h2 {
    background-color: #000;
    color: #fff;
    max-width: 150px;
    text-align: center;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    padding: 15px 15px;
  }
  aside ul li {
    font-size: 18px;
    list-style: none;
    @media (max-width: 767px) {
      position: relative;
      bottom: 30px;
      left: 30px;
    }
  }
`
