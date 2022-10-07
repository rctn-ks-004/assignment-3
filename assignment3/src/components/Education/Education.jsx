import React from "react";
import { Header } from "../Header";
import useAnimate from "../Hooks";

const Education = () => {
    const { scrollPercent } = useAnimate(5, 30);
    const onePage =
        document.documentElement.scrollHeight ===
        document.documentElement.clientHeight
            ? true
            : false;

    return (
        <section class="education">
            <Header
                scrollPercent={scrollPercent * 4}
                reversed
                onePage={onePage}
            >
                Education
            </Header>
            <div class="container">
                <div class="content">
                    <h3>SD Plus Bina Pendidikan</h3>
                    <span>2008 - 2014</span>
                </div>
                <div class="content">
                    <h3>SMPIT Nurul Fajri</h3>
                    <span>2014 - 2017</span>
                </div>
                <div class="content">
                    <h3>SMAN 1 Cikarang Utara</h3>
                    <span>2017 - 2020</span>
                </div>
                <div class="content">
                    <div>
                        <h3>Institut Teknologi Sepuluh Nopember</h3>
                        <p>
                            Undergraduate student at Department of Informatics
                        </p>
                    </div>
                    <span>2020 - Present</span>
                </div>
            </div>
        </section>
    );
};

export default Education;
