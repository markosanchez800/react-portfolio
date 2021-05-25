import React from 'react';
import './style.css';

function ProjectCard(props) {
    return (
        <div className="card">
            <div className='img-container'>
                <img alt={props.name} src={props.photo} />
            </div>
            <ul>
                <li>{props.name}</li>
                <li>{props.description}</li>
                <a href={props.repolink}><li><button>GitHub Repo</button></li></a>
                <a href={props.deplink}><li><button>Deployed App</button></li></a>
            </ul>
        </div>
    )
}

export default ProjectCard;