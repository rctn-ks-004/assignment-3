import React from "react";
import { Header } from "../Header";
import useAnimate from "../Hooks";
import "./skills.css";

const Skills = () => {
  const { scrollPercent } = useAnimate(60, 100);
  
    return (
        <section className="skills">
            <Header
                scrollPercent={scrollPercent === 0 ? 10 : scrollPercent - 60}
            >
                Experience
            </Header>
            <div className="skills__container">
                <h2>C++</h2>
                <h2>C</h2>
                <h2>Java</h2>
                <h2>Python</h2>
                <h2>HTML</h2>
                <h2>CSS</h2>
                <h2>SASS</h2>
                <h2>Adobe Illustrator</h2>
                <h2>Adobe Photoshop</h2>
                <h2>Sony Vegas Pro</h2>
                <h2>React JS</h2>
                <h2>React Native</h2>
                <h2>Tailwind CSS</h2>
                <h2>Redux</h2>
                <h2>Javascript</h2>
                <h2>Typescript</h2>
                <h2>MobX</h2>
            </div>
        </section>
    );
};

export default Skills;
