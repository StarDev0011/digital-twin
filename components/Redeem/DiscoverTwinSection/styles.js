import styled from 'styled-components'

export const DiscoverTwinSection = styled.section`
    background-color: #333;
    margin-bottom: 20px;
    .discover-row {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 15px;
        align-items: center;
        padding: 50px 50px;
    }
    .discover-row h2 {
        font-size: 36px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 72px;
        font-family: 'Mirador';
    }
    .discover-row p {
        font-size: 16px;
        line-height: 28px;
        color: #fff;
        line-height: 2;
        font-family: Assistant;
    }
    .img-bx img {
        max-width: 150px;
        margin: 0 auto;
        display: block;
    }
`
