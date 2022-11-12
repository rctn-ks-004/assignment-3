import React from "react";
import ricky from "../../assets/images/pp_square.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <img src={ricky} alt="ricky" />
        <div className="col-2">
          <p>Hi There!</p>
          <span className="line"></span>
          <p>
            Hi, welcome to my portfolio's profile. My name is Ricky T and you can call me Ricky. I'm a senior active collager majoring in Informatics. I was born in Jambi and right now i'm be interested in studying web development. I also
            like to learn something new and keep up with some technological developments information such as gadgets and automotive.
          </p>
          <a href="https://github.com/Rickyyte">
            <button className="button">Know me more</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
