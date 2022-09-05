import react from '../images/linguagens/react.png';
import php from '../images/linguagens/php.png';
import mysql from '../images/linguagens/mysql.png';
import javascript from '../images/linguagens/js.png';
import unisinos from '../images/projectBg/unisinos-grupos.png';
import reactflix from '../images/projectBg/reactflix.png';
import imc from '../images/projectBg/imc.png';
import digitalmenu from '../images/projectBg/digitalmenu.png';
import cupguesses from '../images/projectBg/cup-guesses.png';

export const projects = [
    {id: 1, title: 'Digital Menu', description: 'This project is basically a digital menu where you can choose what you want and order it directly on whatsapp', image: digitalmenu, link: 'https://digital-menu-bbraian.vercel.app/', projectStatus: 'in progress',
        tecnologies: [
            {id: 3, name: 'ReactJS', icon: react}
        ]
    },
    {id: 2, title: 'Cup Guesses', description: 'This project is a platform to bet in the results of the world cup 2022 with a players score rank', image: cupguesses, link: '', projectStatus: 'in progress',
        tecnologies: [
            {id: 3, name: 'ReactJS', icon: react}
        ]
    },
    {id: 3, title: 'Unisinos Groups', description: 'This project is basically a list to store the whatsapp groups of the classes from college', image: unisinos, link: 'https://unisinos-groups.vercel.app/', projectStatus: '', 
        tecnologies: [
            {id: 3, name: 'ReactJS', icon: react}
        ]
    },
    {id: 4, title: 'ReactFlix', description: 'A project made with react typescript using styled-components', image: reactflix, link: 'https://react-flix-bbraian.vercel.app/',  projectStatus: '',
        tecnologies: [
            {id: 1, name: 'ReactJS', icon: react},
        ]
    },
    {id: 5, title: 'Todo list', description: 'Todo is an react-app made with typescript. Is the convencional list of things to do. You can create, and mark as done', image: imc, link: 'https://todo-react-list.vercel.app/', projectStatus: '',
        tecnologies: [
            {id: 3, name: 'ReactJS', icon: react},
        ]
    },
];
