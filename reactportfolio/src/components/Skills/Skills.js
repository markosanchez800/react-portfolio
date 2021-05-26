import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';


function Skills(){
    return (
        <Card className="mx-auto" style={{ width: '30rem', backgroundColor: 'rgb(70, 69, 69)'  }}>
        <Card.Title style={{textAlign: "center",fontSize:"30px",color:"rgba(255, 255, 255, 0.637)"}}>Skills & Technologies</Card.Title>
      <Card.Body>
            <div class="container-fluid py-5">
              <ul class="list-group list-group flush" style={{textAlign:"center"}}>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">HTML5</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Cascading Style Sheets (CSS)</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">React Programming</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">MERN</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Bootstrap</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">JavaScript</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Web APIs</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">jQuery</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Server Side APIs</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Insomnia</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">AJAX/Fetch</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">JSON</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">GitHub</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Node.js</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">ES6</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Express.js</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Rest API</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Handlebars Templating</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Heroku</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Express Sessions</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Relational Databases</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">NoSQL Databases</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">MySQL</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Sequelize ORM</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Object Oriented Programming</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Pseudocoding</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Data Structures and Algorithms</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Frontend Development</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Backend Development</li>
                <li class="list-group-item fs-2 py-4 bg-dark text-white">Full Stack Development</li>
                </ul>
            </div>
      </Card.Body>
    </Card>
        )
    }
    
 export default Skills;