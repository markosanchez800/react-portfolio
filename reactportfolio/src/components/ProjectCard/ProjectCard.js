import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';

function ProjectCard(props) {
    return (
    <Card className="mx-auto" style={{ width: '42rem', backgroundColor: 'rgb(70, 69, 69)'  }}>
  <Card.Img variant="top" src={props.photo} />
  <Card.Body>
    <Card.Title className="words">{props.name}</Card.Title>
    <Card.Text className="words">{props.description}</Card.Text>
    <a href={props.repolink}><Button className="butoon" variant="danger">GitHub Repo 🐱</Button></a>
    <a href={props.deplink}><Button className="butoon" variant="danger">Deployed App 💻</Button></a>
  </Card.Body>
</Card>
    )
   
}

export default ProjectCard;