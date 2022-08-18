import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    font-family: 'Rajdhani', sans-serif;;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.colors.primary};
    border-top: 1px solid ${props => props.theme.colors.secundary};
    padding: 0 50px;
`;