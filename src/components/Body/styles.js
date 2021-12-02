import styled from "styled-components";

export const Container = styled.div`
    padding: 28px 38px;
`;

export const TextAbout = styled.span`
    text-align: justify;
    font-family: 'Roboto', sans-serif;
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    text-align: center;
    margin: 18px;
    font-family: 'Roboto', sans-serif;

    @media(max-width: 800px) {
        margin: 20px
    }
`;

export const ContainerProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const AboutMe = styled.div`
    margin: 32px 20px 80px 20px;
    @media(max-width: 800px) {
        margin: 32px 20px 45px 20px;
    }
`;

export const Tcolor = styled.h1`
    color: ${props => props.theme.colors.secundary};
    font-size: 50px;
    text-align: center;
`;

export const Tecnologies = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Tecnology = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 8px;
`;