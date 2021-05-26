import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';

function ContactSheet(){
    return (
        <Card className="mx-auto" style={{ width: '42rem', backgroundColor: 'rgb(70, 69, 69)'  }}>
            <Card.Title style={{textAlign: "center",fontSize:"30px",color:"rgba(255, 255, 255, 0.637)"}}>Contact Me!</Card.Title>
      <Card.Body>
        <a href="https://github.com/markosanchez800"><Card.Img className="linkphoto" src="./images/gitty.png" /></a>
        <a href="https://www.linkedin.com/in/marko-sanchez-800/"><Card.Img className="linkphoto" src="./images/linky.png" /></a>
        <a href="mailto:markosanchez800@gmail.com"><Card.Img className="linkphoto" src="./images/gmalll.png" /></a>
        <a href="/Resume.pdf"><Button className="butoon" variant="danger">Download My Resume Here</Button></a>
      </Card.Body>
    </Card>
        )
    }
    
 export default ContactSheet;