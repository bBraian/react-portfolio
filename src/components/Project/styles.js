import styled from "styled-components";

export const Project = styled.div`
    width: 30%;
    height: 250px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 20px 5px;

    @media(max-width: 1024px) {
        width: 47%;
    }

    @media(max-width: 780px) {
        width: 100%;
    }
`;

export const Img = styled.div`
    height: 50%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: auto;
    border-radius: 15px 15px 0 0;
`;