import * as C from './styles';
import marketlist from '../../images/marketlist.jpg';

function Project() {
    return(
        <C.Project>
            <C.Img style={{backgroundImage: `linear-gradient(to bottom, transparent 8%, #fff 87%), url(${marketlist})`}} />
            <C.Description>
                <C.ProjectTitle>Título</C.ProjectTitle>
                <C.About>bQuests é um projeto desenvolvido durante um curso de Javascript estudatre Javascript HTML e CSS. Se trata de um jogo de perguntas com contador de acertos.</C.About>
                <C.Visit>Visite</C.Visit>
            </C.Description>
            
        </C.Project>
    );
}

export default Project;