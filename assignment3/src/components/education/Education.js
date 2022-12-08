import React from 'react';
import './Education.css';
import umn from '../../assets/images/udn.jpg';

const Education = () => {
  return (
    <div className="education" id="education">
      <div className="container">
        <div className="col-2">
          <img src={umn} alt="umn" width="570" height="320" />
        </div>
        <div className="col-1">
          <p>My Campus</p>
          <p>
            I started my career as an informatics student in 2019 in Universitas
            Dian Nuswantoro
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
