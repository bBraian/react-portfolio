import * as C from './styles';
import marketlist from '../../images/marketlist.jpg';

function Project() {
    return(
        <C.Project>
            <C.Img style={{backgroundImage: `linear-gradient(to bottom, transparent 8%, #fff 87%), url(${marketlist})`}} />
            
            
        </C.Project>
    );
}

export default Project;