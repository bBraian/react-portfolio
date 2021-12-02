import styled from "styled-components";

export const Project = styled.div`
    width: 30%;
    min-height: 320px;
    border: 1px solid ${props => props.theme.colors.secundary};
    border-radius: 15px;
    margin: 20px;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0 15px 15px ${props => props.theme.colors.shaddow};
    transform: scale(0.98);
    transition: all ease 0.2s;

    @media(max-width: 1024px) {
        width: 47%;
    }

    @media(max-width: 780px) {
        width: 100%;
        margin: 20px 0px;
        max-height: 230px;
    }

    &:hover{
        transform: scale(1);
    }
`;

export const Img = styled.div`
    height: 50%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: auto;
    border-radius: 15px 15px 0 0;
`;

