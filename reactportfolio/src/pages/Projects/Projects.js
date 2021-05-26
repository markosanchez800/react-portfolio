import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../projects.json';

const Projects = () => {
    return (
        <div>
            <div className="projtitle" style={{ marginTop:"20px", marginBottom:"20px", fontSize:"50px", color:"white", textShadow: "0 6px 6px black, 0 6px 6px white", textAlign: "center"}}><h1>Projects</h1></div>
        {
        projects.map(project =>
            <ProjectCard
                photo={project.photo}
                name={project.name}
                description={project.description}
                repolink={project.repolink}
                deplink={project.deplink}
            />
        )
    }
        </div >
    )
}

export default Projects;