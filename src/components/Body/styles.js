import styled from "styled-components";

export const Container = styled.div`
    padding: 28px 38px;
`;

export const TextAbout = styled.span`
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
`;

export const Title = styled.h1`
    font-size: 50px;
    text-align: center;
    margin: 18px;

    @media(max-width: 800px) {
        margin: 8px;
        margin-bottom: 18px;
    }
`;

export const ContainerProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Project = styled.div`
    width: 30%;
    height: 100px;
    background-color: red;
    border: 1px solid black;

    @media(max-width: 1024px) {
        width: 47%;
    }

    @media(max-width: 780px) {
        width: 100%;
    }

    
`;