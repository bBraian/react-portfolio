import * as C from './styles';
import Project from '../Project';

import { useState, useEffect } from 'react';
import Modal from '../Modal';

import { projects } from '../../data/projects';
import { skills } from '../../data/skills';

function Body() {
    const [modalVisible, setModalVisible] = useState(false);
    const [projectList, setProjectList] = useState([]);
    const [skillsList, setSkillsList] = useState([]);

    useEffect(() => {
        setProjectList(projects);
        setSkillsList(skills);
    }, [])

    return(
        <C.Container>

            { modalVisible ? <Modal onClose={ () => setModalVisible(false) } /> : null }

            <C.AboutMe>
                <C.Title>About<C.Tcolor> Me</C.Tcolor></C.Title>
                <C.TextAbout>
                    <C.Paragraph>I have about than two years of work experience in full-stack development and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.</C.Paragraph>
                    <C.Paragraph>On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills.</C.Paragraph>
                    <C.Paragraph>In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.</C.Paragraph>
                    <C.Paragraph>If you want to know more about my work expirience,<C.TextClickable style={{cursor: 'pointer'}} onClick={() => setModalVisible(true)}> click here.</C.TextClickable> </C.Paragraph>
                    Below is a list of my current technical skills:
                </C.TextAbout>
    
                <C.Tecnologies>
                    {skillsList.map(skill => {
                        return (
                            <C.Tecnology key={skill.id}>
                                <C.TecnologyIcon src={skill.image} title={skill.title} alt={skill.title} />
                            </C.Tecnology>
                        )
                    })}
                </C.Tecnologies>
            </C.AboutMe>
            

            <C.Title>Projects</C.Title>
            <C.ContainerProjects>
                {projectList.map(project => {
                    return (
                        <Project key={project.id} title={project.title} description={project.description} link={project.link} languages={project.tecnologies} image={project.image}></Project>
                    )
                })}
                {/* <Project title="Old Portfolio" description="That's my old portfolio made only with javascript, html and css" link="https://braiann.vercel.app/"></Project>
                <Project title="Todo list" description="Todo is an react-app made with typescript. Is the convencional list of things to do. You can create, and mark as done" link="https://todo-react-list.vercel.app/"></Project>
                <Project title="react-finances" description="This project was made in React during a challenge called '5 Projetos em 5 Dias' by B7Web." link="https://react-finances.vercel.app/"></Project>
                <Project title="Digital-menu" description="This is a project of a digital menu made whith php whitout framework" link="https://bcode.space/"></Project>
                <Project title="Snake97" description="Is a project of the famous and known snake game inspired by the old model made in javascript." link="https://snake97.vercel.app/"></Project>
                <Project title="IMC App" description="This is a project of a IMC calculator made with react-native" link="https://play.google.com/store/apps/details?id=com.calculadora.IMC"></Project> */}
            </C.ContainerProjects>
        </C.Container>
    );
}

export default Body;