import react from '../images/linguagens/react.png';
import php from '../images/linguagens/php.png';
import mysql from '../images/linguagens/mysql.png';
import javascript from '../images/linguagens/js.png';
import bg from '../images/projectBg/bg.png';

export const projects = [
    {id: 1, title: 'ReactFlix', description: 'A project made with react typescript using styled-components', image: bg, link: 'https://react-flix-bbraian.vercel.app/', 
        tecnologies: [
            {id: 1, name: 'ReactJS', icon: react},
            {id: 2, name: 'NodeJS', icon: javascript},
        ]
    },
    {id: 2, title: 'Todo list', description: 'Todo is an react-app made with typescript. Is the convencional list of things to do. You can create, and mark as done', image: bg, link: 'https://todo-react-list.vercel.app/', 
        tecnologies: [
            {id: 3, name: 'PHP', icon: php},
            {id: 4, name: 'MySQL', icon: mysql}
        ]
    },
    {id: 3, title: 'Unisinos Groups', description: 'This project is basically a list to store the whatsapp groups of the classes from college', image: bg, link: 'https://unisinos-groups.vercel.app/', 
        tecnologies: [
            {id: 3, name: 'ReactJS', icon: react}
        ]
    },
];