import React from "react";
import { Header } from "../Header";
import useAnimate from "../Hooks";
import "./interest.css";

const Interest = () => {
    const { scrollPercent } = useAnimate(80, 100);

    return (
        <section className="interest">
            <Header
                scrollPercent={scrollPercent === 0 ? 10 : scrollPercent - 60}
            >
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
