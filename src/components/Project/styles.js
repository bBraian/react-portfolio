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
        h1{
            text-decoration: underline ${props => props.theme.colors.secundary};
            transition: all ease 0.5s;
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0 25px;
`;

export const See = styled.div`
    &:hover{
        cursor: pointer;
    }
    color: ${props => props.theme.colors.text}

`;

