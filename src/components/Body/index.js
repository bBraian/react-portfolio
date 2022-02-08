import * as C from './styles';
import Project from '../Project';
import bootstrap from '../../images/linguagens/bootstrap.png';
import corel from '../../images/linguagens/corel.png';
import css from '../../images/linguagens/css.png';
import git from '../../images/linguagens/git.png';
import html from '../../images/linguagens/html.png';
import java from '../../images/linguagens/java.png';
import js from '../../images/linguagens/js.png';
import laravel from '../../images/linguagens/laravel.png';
import mysql from '../../images/linguagens/mysql.png';
import php from '../../images/linguagens/php.png';
import react from '../../images/linguagens/react.png';
import scriptcase from '../../images/linguagens/scriptcase.png';
import trello from '../../images/linguagens/trello.png';
import davinciresolve from '../../images/linguagens/davinciresolve.png';
import { useState } from 'react';
import Modal from '../Modal';

function Body() {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <C.Container>

            { modalVisible ? <Modal onClose={ () => setModalVisible(false) } /> : null }

            <C.AboutMe>
                <C.Title>About<C.Tcolor> Me</C.Tcolor></C.Title>
                <C.TextAbout>
                <p style={{margin: '0 0 10px'}}>I have about than two years of work experience in full-stack development and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.
                </p>
                <p style={{margin: '0 0 10px'}}>
                On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills.
                </p>
                <p style={{margin: '0 0 10px'}}>
                In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                </p>
                <p style={{margin: '0 0 10px'}}>
                If you want to know more about my work expirience,<span style={{cursor: 'pointer'}} onClick={() => setModalVisible(true)}> click here.</span> 
                </p>
                Below is a list of my current technical skills:
                </C.TextAbout>
                <C.Tecnologies>
                    
                        <C.Tecnology>
                            <img src={html} title="html" alt="html" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={css} title="css" alt="css" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={js} title="js" alt="js" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={git} title="git" alt="git" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={php} title="php" alt="php" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={mysql} title="mysql" alt="mysql" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={trello} title="trello" alt="trello" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={java} title="java" alt="java" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={bootstrap} title="bootstrap" alt="bootstrap" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={react} title="react" alt="react" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={laravel} title="laravel" alt="laravel" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={scriptcase} title="scriptcase" alt="scriptcase" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={corel} title="corel" alt="corel" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                        <C.Tecnology>
                            <img src={davinciresolve} title="davinciresolve" alt="davinciresolve" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                        </C.Tecnology>
                    
                </C.Tecnologies>
            </C.AboutMe>
            

            <C.Title>Projects</C.Title>
            <C.ContainerProjects>
                <Project title="ReactFlix" description="A project made with react typescript using styled-components" link="https://react-flix-rho.vercel.app/"></Project>
                <Project title="Old Portfolio" description="That's my old portfolio made only with javascript, html and css" link="https://braiann.vercel.app/"></Project>
                <Project title="Todo list" description="Todo is an react-app made with typescript. Is the convencional list of things to do. You can create, and mark as done" link="https://todo-react-list.vercel.app/"></Project>
                <Project title="react-finances" description="This project was made in React during a challenge called '5 Projetos em 5 Dias' by B7Web." link="https://react-finances.vercel.app/"></Project>
                <Project title="Digital-menu" description="This is a project of a digital menu made whith php whitout framework" link="https://bcode.space/"></Project>
                <Project title="Snake97" description="Is a project of the famous and known snake game inspired by the old model made in javascript." link="https://snake97.vercel.app/"></Project>
                <Project title="IMC App" description="This is a project of a IMC calculator made with react-native" link="https://play.google.com/store/apps/details?id=com.calculadora.IMC"></Project>
            </C.ContainerProjects>
        </C.Container>
    );
}

export default Body;