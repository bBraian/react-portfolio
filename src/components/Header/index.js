import * as C from './styles';
import fotoPerfil from '../../images/braian.png';
import { FcSettings } from 'react-icons/fc';

function Header() {
    return (
      <C.Container>
        <C.Image>
          <img src={fotoPerfil} style={{width: '100%', height: '100%'}} />
        </C.Image>
        <C.Name>Braian Viacava de Ávila</C.Name> 
        <C.Button><FcSettings  size={{size: '1'}} /></C.Button>
      </C.Container>
    );
  }
  
  export default Header;