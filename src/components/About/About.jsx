import React from "react";
import photo from "../../assets/foto.jpg";
import { Header } from "../Header";
import useAnimate from "../Hooks";
import "./about.css";

const About = () => {
    const { scrollPercent } = useAnimate(0, 5);
    const onePage =
        document.documentElement.scrollHeight ===
        document.documentElement.clientHeight
            ? true
            : false;

    return (
        <section className="about">
            <Header
                scrollPercent={!scrollPercent ? 10 : scrollPercent * 5}
                onePage={onePage}
            >
                About Me
            </Header>
            <div className="about__container">
                <div class="desc">
                    My name is Mochamad Revanza Kurniawan. I was born in Bandung
                    on 10th June 2002 but lived in Bekasi. I'm an ISTP so i'm on
                    introvert side. People with ISTP personalities enjoy having
                    time to think alone and are fiercely independent. But i can
                    work either individually or in a group. ISTPs also love
                    action, new experiences, hands-on activities, and the
                    freedom to work at their own pace. I didn't have much
                    experience right now but i'm willing to learn and try
                </div>
                <div className="photo">
                    <img src={photo} alt="foto" />
                </div>
            </div>
        </section>
    );
};

export default About;
