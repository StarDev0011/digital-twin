import styled from 'styled-components'

export const SitePopupWrapper = styled.div`
    display: block;
    max-width: 500px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border: 1px solid rgba(0,0,0,0.05);
    padding: 15px 15px;
    z-index: 99;
    .modal-content {
        max-width: 350px;
        display: flex;
        align-items: center;   
    }
    .modal-content img {
        width: 45px;
        margin-right: 15px;
    }
    .modal-content h4 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;        
        color: #54595E;
    }
    .modal-content p {
        font-size: 14px;
        color: #54595E99;
    }
    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
`