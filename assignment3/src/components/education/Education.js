import React from "react";
import "./Education.css";
import umn from "../../assets/images/umn.jpg";

const Education = () => {
  return (
    <div className="education" id="education">
      <div className="container">
        <div className="col-1">
          <p>Multimedia Nusantara University</p>
          <p>I started my career as an informatics student in 2019 and it is currently my third year on campus from the time this portfolio was created</p>
        </div>
        <div className="col-2">
          <img src={umn} alt="umn" width="570" height="320" />
        </div>
      </div>
    </div>
  );
};

export default Education;
