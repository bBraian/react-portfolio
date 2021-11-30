import styled from "styled-components";
import '../../App.css';

export const Container = styled.div`
    width: 100%vw;
    height: 148px;
    background-image: url(${props => props.theme.colors.background_img});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 0 100px;
    justify-content: space-between;
    text-align: center;
    
    @media(max-width: 800px) {
        padding: 0 42px 0 22px;
    }

`;

export const Image = styled.div`
    max-width: 90px;
    max-height: 90px;
    border: 2px solid ${props => props.theme.colors.secundary};
    border-radius: 5px;
    background-color: ${props => props.theme.colors.background};
    box-sizing: border-box;

    @media(max-width: 800px) {
        max-width: 78px;
        max-height: 78px;
    }
`;

export const Name = styled.span`
    color: ${props => props.theme.colors.text};
    font-size: 45px;
    font-family: 'Roboto', sans-serif;
    margin: 0 25px;
    font-weight: 900;
    

    @media(max-width: 800px) {
        font-size: 22px;
    }
`;

export const Button = styled.div`
    max-width: 35px;
    max-height: 35px;
    cursor: pointer;

    @media(max-width: 800px) {
        max-width: 30x;
        max-height: 30px;
    }
`;
