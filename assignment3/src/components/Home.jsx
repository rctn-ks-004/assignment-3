import React from "react";
import About from "./About/About";
import Awards from "./Awards/Awards";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Interest from "./Interest/Interest";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div>
            <About />
            <Education />
            <Experience />
            <Skills />
            <Interest />
            <Awards />
        </div>
    );
};

export default Home;
