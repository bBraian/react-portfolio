import styled from "styled-components";

export const Container = styled.div`
    padding: 28px 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextAbout = styled.span`
    text-align: justify;
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    text-align: center;
    margin: 18px;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;

    @media(max-width: 800px) {
        margin: 20px
    }
`;

export const ContainerProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const AboutMe = styled.div`
    margin: 32px 20px 60px 20px;
    @media(max-width: 800px) {
        margin: 0px 20px 25px 20px;
    }
`;

export const Tcolor = styled.div`
    color: ${props => props.theme.colors.secundary};
    font-size: 50px;
    text-align: center;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
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
    transition: all ease 0.5s;
    &:hover {
        transition: all ease 0.5s;
        transform: scale(1.2);
        margin-top: -10px;
    }
`;

export const Paragraph = styled.p `
    margin: 0 0 10px;
`;

export const TextClickable = styled.span`
    cursor: pointer;
`;

export const TecnologyIcon = styled.img`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
`;

