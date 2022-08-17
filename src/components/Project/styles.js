import styled from "styled-components";

export const Project = styled.div`
    width: 30%;
    height: auto;
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
    height: auto;
    border-radius: 0 0 15px 15px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 25px;
`;

export const See = styled.div`
    &:hover{
        cursor: pointer;
    }
    color: ${props => props.theme.colors.text}
`;

export const Tecnology = styled.div`
    color: white;
    width: 38px; 
    height: 38px;
    border: 1px solid ${props => props.theme.colors.secundary}; 
    margin: 0 4px; 
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.2s;
    &:hover {
        transform: scale(1.1);
    }
`;

