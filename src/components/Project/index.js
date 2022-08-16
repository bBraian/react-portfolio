import React from 'react';
import * as C from './styles';

function Project({title, description, link, languages}) {
    // const filteredTecnologies = tecnologies.filter(tecc => tecc.id.includes(languages));
console.log(languages)
    return( 
      <C.Project>
          <C.Container>
              <h1>{title}</h1>
              <div>{description}</div>
              <C.See><a rel="noreferrer" href={link} target="_blank" style={{textDecoration: 'none'}}>See</a></C.See>
              {languages.map(tec => {
                return (
                    <div style={{color: 'white'}}>
                        {  tec.name }
                    </div>
                );
              })}
          </C.Container>
      </C.Project>
    );
}

export default Project;