import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    display flex;
    z-index: 9999;
    top: 5%;
    border-radius: 15px;
    width: 80%;
    max-width: 700px;
    height: 90%;
    border: 1px solid ${props => props.theme.colors.secundary};
    background-color: ${props => props.theme.colors.primary};
    display: ${props => props.display};
`

export const Container = styled.div`
    z-index: 999;
    display: flex;
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #000000c7;
    align-items: center;
    justify-content: center;
`