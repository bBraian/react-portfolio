import styled from "styled-components";

export const Container = styled.div`
    padding: 28px 38px;
`;

export const TextAbout = styled.span`
    display: flex;
    text-align: justify;
    font-family: 'Roboto', sans-serif;
`;

export const Title = styled.h1`
    font-size: 50px;
    text-align: center;
    margin: 18px;
    font-family: 'Roboto', sans-serif;

    @media(max-width: 800px) {
        margin: 8px;
        margin-bottom: 20px;
    }
`;

export const ContainerProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;