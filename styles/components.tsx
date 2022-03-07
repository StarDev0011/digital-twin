import styled from 'styled-components'

export const PageWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: var(--content-width-md);
  position: relative;
  padding: var(--space-sm) var(--space-sm) var(--space-lg);
  padding-bottom: 100px;
  .auction_body {
    display: flex;
    width: 100%;
    @media (max-width: 465px) {
      display: flex;
      flex-wrap: wrap;
      padding: 3%;
    }
  }
  .auction_left {
    width: 53%;
    margin-right: 2%;
    @media (max-width: 465px) {
      width: 98%;
      margin-left: 1%;
      margin-right: 1%;
      order: 2;
      margin-top: 50px;
    }
    .curator {
      color: #969696;
      font-family: ${(props) => props.theme.fonts.bodyFont};
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    div {
      @media (max-width: 465px) {
        justify-content: center;
      }
      span {
        font-size: 16px;
        color: #000000;
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 700;
        @media (max-width: 465px) {
          font-size: 18px;
        }
      }
    }
    .auction_desc h2 {
      font-size: 34px;
      font-family: ${(props) => props.theme.fonts.headingFont};
      line-height: 1.25;
      font-weight: 400;
      margin: 30px 0;
    }
    .auction_desc p {
      font-size: 16px;
      line-height: 2;
      font-family: ${(props) => props.theme.fonts.bodyFont};
    }
    .limitless_icon_txt {
      border: solid 1px rgba(0, 0, 0, 0.25);
      width: fit-content;
      display: flex;
      padding: 5px;
      border-radius: 500px;
      p {
        font-size: 1.8rem;
        font-weight: 600;
        margin-left: 10px;
        margin-right: 100px;
        margin-top: auto;
        margin-bottom: auto;
        font-family: ${(props) => props.theme.fonts.bodyFont};
      }
    }
    .minter p {
      font-size: 12px;
      color: #969696;
      margin-top: 80px;
      font-family: ${(props) => props.theme.fonts.bodyFont};
    }
    .minter .minter_detail {
      width: fit-content;
      display: flex;
      padding: 5px;
      border-radius: 500px;
      margin-top: 15px;
      p {
        font-size: 1.8rem;
        font-family: ${(props) => props.theme.fonts.bodyFont};
        font-weight: 400;
        margin-left: 10px;
        margin-right: 20px;
        margin-top: auto;
        margin-bottom: auto;
        color: #000000;
      }
    }
    .net_details {
      padding: 20px;
      margin-top: 100px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      .net_title {
        font-size: 12px;
        color: #969696;
        margin-bottom: 30px;
        font-family: ${(props) => props.theme.fonts.bodyFont};
      }
      .detail_item {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .net_left p {
          font-size: 12px;
          font-family: ${(props) => props.theme.fonts.bodyFont};
          color: #000000;
          font-weight: 600;
          line-height: 16px;
        }
        .net_right {
          display: flex;
          img {
            height: fit-content;
            margin-left: 10px;
            cursor: pointer;
          }
          p {
            font-size: 12px;
            font-family: ${(props) => props.theme.fonts.bodyFont};
          }
        }
      }
      .refresh {
        display: flex;
        justify-content: space-between;
        border-top: solid 1px #f4f4f4;
        margin-top: 30px;
        padding-top: 30px;
        .refresh_meta {
          font-size: 12px;
          font-family: ${(props) => props.theme.fonts.bodyFont};
          color: #000000;
          font-weight: 700;
        }
        .updated_mins {
          font-size: 12px;
          font-family: ${(props) => props.theme.fonts.bodyFont};
          font-weight: 400;
          color: #969696;
        }
      }
    }
  }
  .auction_right {
    width: 43%;
    margin-left: 2%;
    @media (max-width: 465px) {
      width: 98%;
      margin-left: 1%;
      margin-right: 1%;
    }
    .price_date_btn {
      padding: 20px 30px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      margin-bottom: 80px;
      @media (max-width: 465px) {
        border: none;
        box-shadow: none;
        text-align: center;
      }
      .reserve_price {
        margin-bottom: 40px;
        @media (min-width: 768px) {
          display: flex;
          justify-content: space-between;
        }
      }
      .reserve_price p {
        font-family: ${(props) => props.theme.fonts.bodyFont};
        font-size: 12px;
        color: #969696;
        margin-bottom: 10px;
        margin-top: 10px;
      }
      .reserve_price h2 {
        font-size: 24px;
        font-family: ${(props) => props.theme.fonts.bodyFont};
        @media (max-width: 465px) {
          font-size: 28px;
        }
      }
      .start_date {
        @media (min-width: 768px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      }
      .start_date img {
        vertical-align: middle;
        margin-right: 10px;
      }
      .start_date p {
        font-size: 12px;
        font-family: ${(props) => props.theme.fonts.bodyFont};
        color: #969696;
        margin-bottom: 10px;
      }
      .start_date h2 {
        font-size: 18px;
        font-family: ${(props) => props.theme.fonts.bodyFont};
        margin-bottom: 30px;
        @media (max-width: 465px) {
          font-size: 28px;
        }
      }
      .bid_btn {
        text-align: center;
        font-family: ${(props) => props.theme.fonts.bodyFont};
      }
    }
    .history_detail {
      margin: 0 auto;
      background-color: #fff;
      box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      padding: 20px 20px;
      z-index: 99;
      div {
        border: none !important;
      }
      .zora-fullPageHistoryItemDescription {
        font-size: 16px;
        color: #000000;
        font-family: ${(props) => props.theme.fonts.bodyFont};
      }
      time {
        font-size: 16px;
        color: #969696;
      }
    }
  }
  p.live {
    background-color: #e3f4ee;
    text-align: center;
    font-size: 18px !important;
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 5px;
    color: #408f68 !important;
    font-weight: bold;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      max-width: 100px;
      margin: 0 auto;
      text-align: center;
      justify-content: center;
    }
  }
  p.live b {
    width: 10px;
    height: 10px;
    background-color: green;
    float: left;
    border-radius: 10px;
    margin-right: 5px;
  }
  p.complete {
    background-color: #c5c3c3;
    text-align: center;
    font-size: 15px !important;
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 5px;
    color: #ffffff !important;
    font-weight: bold;
  }
  .auction-bidder a {
    position: relative;
    display: block;
  }
  .auction-bidder a {
    position: relative;
    display: block;
    margin-right: 15px;
  }
  .auction-bidder {
    display: flex;
    flex-direction: row;
    @media (max-width: 767px) {
      justify-content: center;
      align-items: center;
    }
  }
  .auction-bidder a:after {
    border-radius: 4px;
    padding: 4px;
    opacity: 0.8;
    background-repeat: no-repeat;
    background-position: center center;
    top: 2px;
    z-index: 10;
    right: -25px;
    transition: opacity 0.4s ease-in 0s;
    content: ' ';
    width: 14px;
    height: 14px;
    position: absolute;
    background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Earrow-top-right%3C%2Ftitle%3E%3Cg%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-width%3D%222%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%3E%3Cline%20fill%3D%22none%22%20stroke-miterlimit%3D%2210%22%20x1%3D%222%22%20y1%3D%2222%22%20x2%3D%2222%22%20y2%3D%222%22%20stroke-linecap%3D%22butt%22%3E%3C%2Fline%3E%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20points%3D%2212%2C2%2022%2C2%2022%2C12%20%22%3E%3C%2Fpolyline%3E%3C%2Fg%3E%3C%2Fsvg%3E);
  }
  .history_detail h5 {
    font-size: 14px;
    color: #969696;
    margin: 5px 0 20px;
  }
  .history_detail_bx {
    grid-gap: 15px;
    display: grid;
    grid-template-columns: 1fr 10fr;
    margin-bottom: 15px;
  }
  p.bidder_name {
    font-size: 16px;
    margin-bottom: 5px;
    color: #000;
  }
  .history_detail_bx .date {
    color: #969696;
    font-size: 14px;
  }
  .history_detail_bx img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50px;
  }
`
