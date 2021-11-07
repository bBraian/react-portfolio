import * as C from './styles';
import Project from '../Project';

function Body() {
    return(
        <C.Container>
            <C.TextAbout>
                Meu nome é Braian, tenho 19 anos, nasci em Porto Alegre no dia 18/10/2001. Atualmente moro em Brochier, onde cursei todo o ensino fundamental e médio. 
                Curso Análise e Desenvolvimento de Sistemas na UNISINOS - São Leopoldo. Faço curso de inglês há 3 anos na Wizard - Salvador do sul. 
                Atualmente trabalho na empresa Openfy - Sistemas de eventos como Programador PHP júnior onde desenvolvo com HTML, CSS, Javascript, PHP e MySQL. 
                Gosto e me proponho sempre a aprender mais, quando o assunto é novas tecnologias, a motivação é ainda maior. 
                Estou atualmente fazendo cursos de desenvolvimento Full Stack onde vejo todas as linguagens que trabalho e algumas outras tecnologias e frameworks como NodeJS e React.
            </C.TextAbout>
            <C.Title>Projetos</C.Title>
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