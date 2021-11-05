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
    padding: 0 32px;
    justify-content: space-between;
    text-align: center;
`;

export const Image = styled.div`
    max-width: 90px;
    max-height: 90px;
    border: 2px solid chartreuse;
    border-radius: 5px;
    background-color: white;
    box-sizing: border-box;
`;

export const Name = styled.span`
    color: white;
    font-size: 28px;
    font-family: cursive;
    margin: 0 25px;
    font-weight: bold;
`;

export const Button = styled.div`
    max-width: 35px;
    max-height: 35px;
    cursor: pointer;
`;
