import styled from "styled-components";
import backgroundImage from '../../images/background.jpg';

export const Container = styled.div`
    width: 100%vw;
    height: 148px;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 0 100px;
    justify-content: space-between;
    text-align: center;
    
    @media(max-width: 800px) {
        padding: 0 22px;
    }

`;

export const Image = styled.div`
    max-width: 90px;
    max-height: 90px;
    border: 2px solid chartreuse;
    border-radius: 5px;
    background-color: white;
    box-sizing: border-box;

    @media(max-width: 800px) {
        max-width: 78px;
        max-height: 78px;
    }
`;

export const Name = styled.span`
    color: white;
    font-size: 35px;
    font-family: cursive;
    margin: 0 25px;
    font-weight: bold;
    

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
