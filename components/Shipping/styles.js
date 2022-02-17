import styled from "styled-components";

export const ShippingWrapper = styled.section`
  padding: 60px 0;
  @media (max-width: 465px) {
    padding:2%;
  }
`;

export const ShippingBody = styled.div`
width:60%;
margin-left: auto;
margin-right: auto;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 70px 0;
text-align:center;
@media (max-width: 465px) {
  width:96%;
}
.contact_us p {
    font-size: 24px;
    @media (max-width: 465px) {
        font-size: 16px;
    }
}
.contact_btn {
    margin-top: 70px;
    a {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.3;
        color: #000000;
        text-decoration-line: underline;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 12px 100px;
        background: #E5E5E5;
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 500px;
        @media (max-width: 465px) {
            font-size: 16px;
            padding: 12px 40px;
        }
    }
}
`;