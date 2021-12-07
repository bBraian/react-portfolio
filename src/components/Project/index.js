import * as C from './styles';

function Project({title, description, link}) {

    return( 
      <C.Project>
          <C.Container>
              <h1>{title}</h1>
              <div>{description}</div>
              <C.See><a rel="noreferrer" href={link} target="_blank" style={{textDecoration: 'none'}}>See</a></C.See>
          </C.Container>
      </C.Project>
    );
}

export default Project;