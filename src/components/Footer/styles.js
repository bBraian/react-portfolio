import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.colors.primary};
    border-top: 1px solid ${props => props.theme.colors.secundary};
`;