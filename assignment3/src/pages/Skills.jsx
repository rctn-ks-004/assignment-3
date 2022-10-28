import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import '../style/Skills.css'

const Skills = () => {
    return (
        <div className="title">
            <h1>Skills</h1>

            <div className="icons">
            <FontAwesomeIcon icon={faCheckCircle}/> HTML <br />
            <br />
            <FontAwesomeIcon icon={faCheckCircle}/> CSS <br />
            <br />
            <FontAwesomeIcon icon={faCheckCircle}/> C++ <br /> 
            <br />
            <FontAwesomeIcon icon={faCheckCircle}/> Java <br />  
            </div>
            
        </div>
    )
}

export default Skills;