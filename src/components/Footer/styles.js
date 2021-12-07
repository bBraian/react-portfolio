import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.colors.primary};
    border-top: 1px solid ${props => props.theme.colors.secundary};
    padding: 0 30px;
`;