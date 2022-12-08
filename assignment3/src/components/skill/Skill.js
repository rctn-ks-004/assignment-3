import React from 'react';
import './Skill.css';

const Skill = () => {
  return (
    <div className="skill" id="skill">
      <div className="container">
        <h2>My Skills</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <i class="fab fa-html5" />
            <span>HTML</span>
          </div>
          <div className="card">
            <i class="fa-brands fa-css3"></i>
            <span>CSS</span>
          </div>
          <div className="card">
            <i class="fa-brands fa-js"></i>
            <span>Javascript</span>
          </div>
          <div className="card">
            <i class="fab fa-react"></i>
            <span>React</span>
          </div>
          <div className="card">
            <i class="fa-brands fa-figma"></i>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
