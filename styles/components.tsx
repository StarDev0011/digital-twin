import styled from 'styled-components'

export const PageWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: var(--content-width-md);
  position: relative;
  padding:
    var(--space-sm)
    var(--space-sm)
    var(--space-lg);
  .auction_body {
    display:flex;
    width:100%;
    @media (max-width: 465px) {
      display:block;
      padding: 3%;
    }
  }
  .auction_left {
    width:53%;
    margin-right: 2%;
    @media (max-width: 465px) {
      width: 98%;
      margin-left: 1%;
      margin-right: 1%;
    }
    .auction_desc h2 {
      font-size: 5.4em;
      font-family: ${(props) => props.theme.fonts.headingFont};
      line-height: 1.25;
      font-weight: 400;
      margin: 30px 0;
    }
    .auction_desc p {
      font-size: 1.6em;
      line-height: 2;
      font-family: ${(props) => props.theme.fonts.headingFont};
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
          margin-right:100px;
          margin-top: auto;
          margin-bottom: auto;
          font-family: ${(props) => props.theme.fonts.bodyFont}
      }
    }
    .minter p {
      font-size: 12px;
      color: #969696;
      margin-top: 80px;
      font-family: ${(props) => props.theme.fonts.bodyFont}
    }
    .minter .minter_detail {
      width: fit-content;
      display: flex;
      padding: 5px;
      border-radius: 500px;
      margin-top: 15px;
      p {
          font-size: 1.8rem;
          font-family: ${(props) => props.theme.fonts.bodyFont}
          font-weight: 400;
          margin-left: 10px;
          margin-right:100px;
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
        font-family: ${(props) => props.theme.fonts.bodyFont}
      }
      .detail_item {
        display:flex;
        justify-content: space-between;
        margin-top: 20px;
        .net_left p {
          font-size: 12px;
          font-family: ${(props) => props.theme.fonts.bodyFont}
          color: #000000;
          font-weight: 600;
          line-height: 16px;
        }
        .net_right {
          display: flex;
          img {
            height: fit-content;
            margin-left: 10px;
          }
          p {
            font-size: 12px;
            font-family: ${(props) => props.theme.fonts.bodyFont}
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
          font-family: ${(props) => props.theme.fonts.bodyFont}
          color: #000000;
          font-weight: 700;
        }
        .updated_mins {
          font-size: 12px;
          font-family: ${(props) => props.theme.fonts.bodyFont}
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
      .reserve_price p {
        font-family: ${(props) => props.theme.fonts.bodyFont}
        font-size: 12px;
        color: #969696;
        margin-bottom: 10px;
      }
      .reserve_price h2 {
        font-size: 24px;
        font-family: ${(props) => props.theme.fonts.bodyFont}
        margin-bottom: 50px;
      }
      .start_date p {
        font-size: 12px;
        font-family: ${(props) => props.theme.fonts.bodyFont}
        color: #969696;
        margin-bottom: 10px;
      }
      .start_date h2 {
        font-size: 18px;
        font-family: ${(props) => props.theme.fonts.bodyFont}
        margin-bottom: 30px;
      }
      .bid_btn {
        text-align:center;
        font-family: ${(props) => props.theme.fonts.bodyFont}
      }
    }
    .history {
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      padding: 20px;
      p {
        font-size: 12px;
        font-family: ${(props) => props.theme.fonts.bodyFont}
        color: #969696;
        margin-bottom: 20px;
      }
      .history_detail {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        border-radius: 500px;
        margin-top: 15px;
        p {
            font-size: 12px;
            font-family: ${(props) => props.theme.fonts.bodyFont}
            font-weight: 400;
            margin-left: 10px;
            margin-top: auto;
            margin-bottom: auto;
            color: #000000;
        }
        .img_with_txt {
          display:flex;
        }
        .eth_usd {
          text-align:right;
          .eth {
            font-size: 12px;
            font-family: ${(props) => props.theme.fonts.bodyFont}
            color: #000000;
            line-height: 1.4;
          }
          .usd {
            font-size: 10px;
            font-family: ${(props) => props.theme.fonts.bodyFont}
            color: $969696;
            line-height: 1.4;
          }
        }
      }
    }   
  }
`