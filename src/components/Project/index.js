import React from 'react';
import * as C from './styles';
import bg from '../../images/projectBg/bg.png';

function Project({title, description, link, languages}) {

    return( 
        <C.Project>
            <div style={{width: '100%', height: '125px', borderRadius: '15px 15px 0 0', overflow: 'hidden', display: 'flex', justifyContent: 'center'}}>
                <img src={bg} alt="123" style={{width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%'}}></img>
            </div>
            <C.Container>
                <h1>{title}</h1>
                <div style={{margin: '15px 0'}}>{description}</div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column', marginBottom: '15px'}}>
                    <span style={{marginBottom: '12px'}}>Technologies used in this project</span>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        {languages.map(tec => {
                            return (
                                <C.Tecnology>
                                    <img src={tec.icon} title={tec.name} alt={tec.name} style={{width: 'auto', height: 'auto', maxWidth: '26px', maxHeight: '26px'}}></img>
                                </C.Tecnology>
                            );
                        })}
                    </div>
                </div>
                
                <C.See>
                    <a rel="noreferrer" href={link} target="_blank" style={{textDecoration: 'none'}}>See</a>
                </C.See>
                    
            </C.Container>
        </C.Project>
    );
}

export default Project;