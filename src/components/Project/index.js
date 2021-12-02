import * as C from './styles';

function Project({title, description, see}) {
    return(
        <C.Project>
            <C.Container>
                <h1>{title}</h1>
                <div>{description}</div>
                <div>{see}</div>
            </C.Container>
        </C.Project>
    );
}

export default Project;