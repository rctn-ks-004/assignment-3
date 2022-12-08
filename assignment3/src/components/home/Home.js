import React from 'react';
import Azwan from '../../assets/images/profil-pp.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="col-2">
          <p className="whit">Hi There!</p>
          <span className="line"></span>
          <p>
            Hi, welcome to my portfolio's profile. My name is Azwan Nurfadhillah
            and you can call me Azwan. I'm a student of Informatics
            Enggineering. I was born in Riau and right now i'm be interested in
            studying web development. I also like to learn something new and
            keep up with some technological and art.
          </p>
          <a href="https://github.com/AzwanNF">
            <button className="button">Know me more</button>
          </a>
        </div>
        <img src={Azwan} alt="Azwan" />
      </div>
    </div>
  );
};

export default Home;
