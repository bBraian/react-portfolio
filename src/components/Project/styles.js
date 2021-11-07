import styled from "styled-components";

export const Project = styled.div`
    width: 30%;
    height: 250px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 20px;

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

export const Description = styled.div`
    margin-top: -25%;
    padding: 0 10px;
    display flex;
    flex-direction: column;

    @media(max-width: 1024px) {
        margin-top: -25%;
    }

    @media(max-width: 780px) {
        margin-top: -50%;
    }
`;

export const ProjectTitle = styled.h2`
    text-align: center;
    justify-content: center;
`;

export const About = styled.span`
`;

export const Visit = styled.span`
    align-self: flex-end;
    cursor: pointer;
    transition: 0.3s;
    :hover {
        margin-right: 9px;
    }
`;