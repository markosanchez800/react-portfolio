import React from 'react';
import './style.css';

function Header(props){
    return (
        <div className='jumbotron'>
            <ul>
            <div className='title'>Marko Sanchez</div>
            <img className='titlepic' alt="title pic" src="./images/compsci.png"></img>
            <div className='subtitle'>Web Developer</div>
            </ul>
        </div>
    );
}

export default Header;