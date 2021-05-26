import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';

function AboutMe() {
    return (
    <Card className="mx-auto" style={{ width: '55rem', backgroundColor: 'rgb(70, 69, 69)'}}>
  <Card.Body>
    <Card.Title className="words2">About Me</Card.Title>
    <Card.Text className="words1">
            My name is Marko Sanchez and I'm a Web Developer and lifelong student living in the Bay Area. I've been working, 
            gaining knowledge, and learning for a couple years now and I'm hoping to pursue a job in web-development or cybersecurity.
            I am currently a student of the UC Berkeley Coding Bootcamp Program and will begin my job hunt after the course is completed.
    </Card.Text>
  </Card.Body>
</Card>
    )
   
}

export default AboutMe;