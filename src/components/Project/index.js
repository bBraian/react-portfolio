import React from 'react';
import * as C from './styles';

function Project({title, description, link, languages, image}) {

    return( 
        <C.Project>
            <C.BoxProjectImage>
                <C.ProjectImage src={image} alt="123"></C.ProjectImage>
            </C.BoxProjectImage>
            <C.Container>
                <C.ProjectTitle>{title}</C.ProjectTitle>
                <C.ProjectDescription>{description}</C.ProjectDescription>
                <C.TecnologiesBox>
                    <C.TecnologiesText>Technologies used in this project</C.TecnologiesText>
                    <C.FlexRow>
                        {languages.map(tec => {
                            return (
                                <C.Tecnology key={tec.id}>
                                    <C.TecnologyImage src={tec.icon} title={tec.name} alt={tec.name}></C.TecnologyImage>
                                </C.Tecnology>
                            );
                        })}
                    </C.FlexRow>
                </C.TecnologiesBox>
                
                <C.See>
                    <C.ProjectLink rel="noreferrer" href={link} target="_blank">See Project</C.ProjectLink>
                </C.See>
                    
            </C.Container>
        </C.Project>
    );
}

export default Project;