import styled from 'styled-components'

export const DetailBoxSection = styled.section `
.shipping-detail-row {
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin-bottom: 50px
}
.ship-top-bar {
   text-align: center;
}
.left-bx .form-group {
   display: grid;
   grid-template-columns: 1fr 3fr;
}
.right-bx.w5 {
  margin-left: 20px;
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
.form-group input, .form-group select {
   height: 42px;
   padding: 0 15px;
   border: 1px solid #C4C4C4;
}
h2.title {
   margin-bottom: 30px;
   font-size: 24px;
   margin-top: 0;
   font-family: Mirador;
   font-weight: bold;
}
.order-summary {
   padding: 40px 30px;
   border: 2px solid #c4c4c4;
}
.right-bx {
   margin-left: 4vw;
}
.order-summary select#state {
   border: 1px solid #fff !important;
   border-bottom-color: #C4C4C4 !important;
   padding: 0 0 10px;
   margin-bottom: 15px;
   width: 100%;
}
.order-detail-bx {
   display: grid;
   grid-template-columns: 1fr 1fr;
}
.order-detail-bottom {
   display: grid;
   grid-template-columns: 3fr 1fr;
   align-items: center;
   justify-content: space-between;
   border-top: 1px solid #c4c4c4;
   margin-top: 50px;
   padding-top: 15px;
}
.order-detail-bottom a {
   border: 2px solid #020202;
   background-color: #000;
   padding: 10px 15px;
   text-transform: uppercase;
   color: #fff;
   text-decoration: none;
   font-size: 16px;
   font-weight: 600;
   text-align: center;
}
a.back-btn {
   color: #828282;
   font-size: 14px;
   text-transform: uppercase;
   text-decoration: none;
   text-align: right;
   display: block;
   font-weight: bold;
   font-family: Mirador;
   margin-top: 15px;
}
label {
   color: #000;
   font-size: 16px;
   line-height: 20px;
}
.summary-text h4 {
   font-size: 18px;
   line-height: 24px;
   color: #000000;
}
.order-detail-bottom p {
   text-shadow: #78787878 0px 4px 7px;
   font-size: 14px;
   color: #333;
   padding-right: 15px;
   line-height: 24px;
}
`