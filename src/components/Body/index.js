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

function Body() {
    return(
        <C.Container>

        <C.AboutMe>
            <C.Title>About<C.Tcolor> Me</C.Tcolor></C.Title>
            <C.TextAbout>
            <p style={{margin: '0 0 10px'}}>I have about than two years of work experience in full-stack development and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.
</p>
<p style={{margin: '0 0 10px'}}>
On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills .
</p>
<p style={{margin: '0 0 10px'}}>
In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
</p>
Below is a list of my current technical skills:
            </C.TextAbout>
            <C.Tecnologies>
                
                    <C.Tecnology>
                        <img src={html} title="html" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={css} title="css" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={js} title="js" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={git} title="git" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={php} title="php" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={mysql} title="mysql" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={trello} title="trello" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={java} title="java" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={bootstrap} title="bootstrap" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={react} title="react" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={laravel} title="laravel" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={scriptcase} title="scriptcase" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={corel} title="corel" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                
            </C.Tecnologies>
        </C.AboutMe>
            

            <C.Title>Projects</C.Title>
            <C.ContainerProjects>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </C.ContainerProjects>
        </C.Container>
    );
}

export default Body;