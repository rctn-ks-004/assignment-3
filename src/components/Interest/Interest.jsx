import React from "react";
import { Header } from "../Header";
import useAnimate from "../Hooks";
import "./interest.css";

const Interest = () => {
    const { scrollPercent } = useAnimate(62, 90);
    const onePage =
        document.documentElement.scrollHeight ===
        document.documentElement.clientHeight
            ? true
            : false;

    return (
        <section className="interest">
            <Header scrollPercent={scrollPercent - 80 + 20} onePage={onePage}>
                Interest
            </Header>
            <div className="container">
                <div className="wrapper">
                    <div className="card">
                        <h3>Frontend Development</h3>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Deserunt, vel?
                        </div>
                    </div>
                    <div className="card">
                        <h3>Competitive Programming</h3>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Deserunt, vel?
                        </div>
                    </div>
                    <div className="card">
                        <h3>Gaming</h3>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Deserunt, vel?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Interest;
