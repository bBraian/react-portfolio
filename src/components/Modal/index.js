import * as C from './styles';
import React from 'react';

function Modal ({ id = 'modal', onClose = () => {}} ) {
    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    return (
        <C.Container id={id} onClick={handleOutsideClick}>
            <C.Modal>
            </C.Modal>
        </C.Container>
        
    );
}

export default Modal;