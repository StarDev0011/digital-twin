import styled from 'styled-components'

export const DiscoverTwinSection = styled.section `
    background: linear-gradient(to right,#000000 ,#111212,#111212,rgb(0 0 0 / 78%) );   
    margin-bottom: 20px;
    .discover-row {
        grid-template-columns: 2fr 1fr;
        column-gap: 15px;
        align-items: center;
        padding: 50px 50px;
        @media (min-width: 768px) { 
            display: grid;
        }
        @media (max-width: 767px) {
            padding: 10% 5%;
        }
    }
    .discover-row h2 {
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        font-family: 'Mirador';
        @media (max-width: 767px) {
            margin-bottom: 20px; 
            font-size: 26px;
            line-height: 32px;
        }
        @media (min-width: 768px) {
            line-height: 72px;
            font-size: 36px; 
            display: inline-block;                                                               
        }
    }       
    .discover-row p {
        font-size: 16px;
        line-height: 28px;
        color: #fff;
        line-height: 2;
        font-family: Assistant;
    }
    @media (min-width: 768px) {
      line-height: 72px;
      font-size: 36px;
      display: inline-block;
      padding-right: 20px;
      border-width: 1px 1px 0px 0px;
      border-color: white;
      border-style: solid;
    }
    .discover-inner {
        @media (max-width: 767px) {        
         br { display: none; }   
        }
    }  
`
