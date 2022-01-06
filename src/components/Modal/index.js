import * as C from './styles';
import React from 'react';

function Modal ({ id = 'modal', onClose = () => {}} ) {
    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    return (
        <C.Container id={id} onClick={handleOutsideClick}>
            <C.Modal>
            What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </C.Modal>
        </C.Container>
        
    );
}

export default Modal;