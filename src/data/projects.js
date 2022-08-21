import react from '../images/linguagens/react.png';
import php from '../images/linguagens/php.png';
import mysql from '../images/linguagens/mysql.png';
import javascript from '../images/linguagens/js.png';
import unisinos from '../images/projectBg/unisinos-grupos.png';
import reactflix from '../images/projectBg/reactflix.png';
import imc from '../images/projectBg/imc.png';

export const projects = [
    {id: 1, title: 'ReactFlix', description: 'A project made with react typescript using styled-components', image: reactflix, link: 'https://react-flix-bbraian.vercel.app/', 
        tecnologies: [
            {id: 1, name: 'ReactJS', icon: react},
        ]
    },
    {id: 2, title: 'IMC App', description: 'This project is a simple IMC calculator app made with React Native', image: imc, link: 'https://todo-react-list.vercel.app/', 
        tecnologies: [
            {id: 3, name: 'ReactJS', icon: react},
        ]
    },
    {id: 3, title: 'Unisinos Groups', description: 'This project is basically a list to store the whatsapp groups of the classes from college', image: unisinos, link: 'https://unisinos-groups.vercel.app/', 
        tecnologies: [
            {id: 3, name: 'ReactJS', icon: react}
        ]
    },
];