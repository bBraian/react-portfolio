import React from 'react';
import * as C from './styles';

function Project({title, description, link, languages}) {

    return( 
      <C.Project>
          <C.Container>
              <h1>{title}</h1>
              <div>{description}</div>
              <C.See><a rel="noreferrer" href={link} target="_blank" style={{textDecoration: 'none'}}>See</a></C.See>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column'}}>
                <span style={{marginBottom: '8px'}}>Technologies used in this project</span>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {languages.map(tec => {
                        return (
                            <C.Tecnology>
                                <img src={tec.icon} alt={tec.name} style={{width: 'auto', height: 'auto', maxWidth: '26px', maxHeight: '26px'}}></img>
                            </C.Tecnology>
                        );
                    })}
                </div>
                    
              </div>
                
          </C.Container>
      </C.Project>
    );
}

export default Project;