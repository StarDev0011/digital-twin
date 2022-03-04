import styled from 'styled-components'

export const LuxuryContentWrapper = styled.section`
  padding: 5rem 0;
  @media (max-width: 465px) {
    padding: 5%;
  }
`

export const LuxuryHeading = styled.h2`
  text-align: center;
  font-size: 80px;
  margin-bottom: 40px;
  font-family: ${(props) => props.theme.fonts.headingFont};
  font-weight: bold;
  @media (max-width: 465px) {
    font-size: 30px;
  }
`

export const LuxurySectionWrapper = styled.section`
    .luxury-row {
        grid-auto-flow: column;
        grid-gap: 10px;
        grid-template-areas: "A B"
    "C B";
    @media (min-width: 768px) { 
        display: grid;}
    } 
    }  
    .grid-item-1 {
        grid-area: A;
        background-image: url("/images/phy-Redemption.jpg");
        background-size: cover;
      }
    .grid-item-2 {
        grid-area: B;
        background-image: url("/images/digi-redemption.jpg");
        background-position: center;
        @media (min-width: 768px) { 
        height: 650px;
        }
        @media (max-width: 767px) { 
        background-size: cover;
    }
    }
    .grid-item-3 {
        grid-area: C;
        background: linear-gradient(to right, #f3f7d5 , #f3dcd2, #F3F7D5 );
        background-size: cover;
    }

    .grid-item-1 p, .grid-item-2 p, .grid-item-3 p {
        margin-bottom: 30px;
        font-size: 16px;
        font-family: Assistant;
    }
    .grid-item-1 h2, .grid-item-2 h2, .grid-item-3 h2 {
        font-family: 'Mirador';
        font-size: 36px;
        text-transform: uppercase;
        margin-bottom: 30px;
        font-weight: bold;
        @media (max-width: 767px) { 
            font-size: 26px;    
        }
    }
    .luxury-row a.commo-btn {
        border: 2px solid #333;
        padding: 10px 15px;
        text-transform: uppercase;
        color: #000;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        font-family: 'Mirador';
    }
   .grid-item h2 {
        text-transform: uppercase;
    }
    .grid-item-1, .grid-item-2, .grid-item-3   {
        padding: 40px 40px;
     }
     .grid-item-1 .grid-content {
        width: 300px;
        margin-left: auto;
    }
`

export const LuxuryWrapperMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .redeem-item-one {
    background-color: red;
  }
  .redeem-item-two {
    background-color: blue;
  }
  .redeem-item-three {
    background-color: green;
  }
`
