import * as C from './styles';
import React from 'react';

function Modal ({ id = 'modal', onClose = () => {}} ) {
    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    return (
        <C.Container id={id} onClick={handleOutsideClick}>
            <C.Modal>
            In the beguinig of my carrer as developer I worked in a company called Openfy. The software we were developing was a virtual events and courses platform. In this company I learned how to work with PHP, Javascript and Scriptcase framework. In about 2 months I was developing new features, was solving bugs and problems, making calls with clients and managing issues. I had the possibility of growth a lot while working there, my logic, tecnical skills and maturity have consolidated a lot in this period. So in about 10 months with my exponential growth I was invited to work in other company called Happy Saúde. The Openfy company didn't want to loose me because they knew about my potencial but they were a small company, so they can't pay too much money for the employes. So I decided to start working at Happy Saúde company. The software we develop is a technological health manager that helps the pacients of our clients to explain how it works. In datacode company, first I made the website of the company based on a template. I worked with front end (HTML, CSS and JS) and backend only to send email to contact or submir resume with PHP Mailer. After this project, the boss asked me to make a project of stock controll of the items of the company. In this project I made a simple frontend with bootstrap 5 and a CRUD in backend with PHP. Then, I started searching for an API to send messages on Whatsapp. We choose the WhatsApp Business API. So I made an aplication who send, receive and update message status by the webhook with this WhatsApp Business API. I also have made an chat application to answare messages who wasn't registered on our database. This project I used websocket for a better experience.
            </C.Modal>
        </C.Container>
        
    );
}

export default Modal;