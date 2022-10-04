import React from "react";
import { Header } from "../Header";
import useAnimate from "../Hooks";
import * as TagCloud from 'TagCloud'
import { useEffect } from "react";

const Skills = () => {
    const { scrollPercent } = useAnimate(60, 80);
    const container = '.tagclouds';
    const skills = [
        'C++', 'C', 'Java', 'Python', 'HTML', 'CSS', 
        'SASS', 'React JS', 'React Native', 'Next JS',
        'JavaScript', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Redux', 'MobX',
        'Adobe Illustrator', 'Adobe Photoshop', 'Sony Vegas Pro'
    ];
    const option = {
        radius: 300,
    };

    useEffect(() => {
        TagCloud(container, skills, option);
        console.log('render');
    }, []);
  
    return (
        <section className="skills">
            <Header
                scrollPercent={scrollPercent === 0 ? 10 : scrollPercent - 60}
            >
                Skills
            </Header>
            <div className="tagclouds" style={{margin: 'auto'}}></div>
        </section>
    );
};

export default Skills;
