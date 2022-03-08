import styled from 'styled-components'

export const BidBoxContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Oswald:wght@300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400&display=swap');
  .plac-bid-bx {
    margin: 0 auto;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 20px 20px;
    z-index: 99;
  }
  .top-bx {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
  .bottom-bx {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    @media (max-width: 767px) {
      display: block !important;
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
    font-weight: 800;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 80px;
    float: right;
  }
  p.live b {
    width: 10px;
    height: 10px;
    background-color: green;
    float: left;
    border-radius: 10px;
    margin-right: 5px;
  }
  p.gray-text {
    font-size: 12px;
    color: #969696;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 500;
  }
  .top-bx {
    margin-bottom: 30px;
  }
  .plac-bid-bx h2 {
    font-size: 22px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    margin: 15px 0;
  }
  .auction-bidder {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    align-items: center;
  }
  .auction_right .price_date_btn .start_date img {
    vertical-align: middle;
    margin-right: 10px;
  }
  .auction-bidder a {
    position: relative;
    display: block;
    margin-right: 15px;
    margin-left: 12px;
    font-size: 15px;
    color: #333;
  }
  .place-bid {
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 20px 100px;
    border-radius: 50px;
    border: none;
    margin: 20px auto;
    cursor: pointer;
    display: block;
  }
  img.links-icon {
    margin-left: 10px;
  }
`
