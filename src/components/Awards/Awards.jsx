import React from "react";
import { Header } from "../Header";
import useAnimate from "../Hooks";

const Awards = () => {
    const { scrollPercent } = useAnimate(82, 100);
    const onePage =
        document.documentElement.scrollHeight ===
        document.documentElement.clientHeight
            ? true
            : false;

    return (
        <section class="awards">
            <Header
                scrollPercent={scrollPercent * 1.3}
                reversed
                onePage={onePage}
            >
                Awards
            </Header>
            <div class="container">
                <div class="content">
                    <div>
                        <h3>🏅 HTML dan CSS Dasar</h3>
                        <p>Hacktiv8 Indonesia</p>
                    </div>
                    <span>2022</span>
                </div>
                <div class="content">
                    <div>
                        <h3>🏅 Hasil Maksimal, Usaha Minimal dengan ES6</h3>
                        <p>Hacktiv8 Indonesia</p>
                    </div>
                    <span>2022</span>
                </div>
                <div class="content">
                    <div>
                        <h3>🏅 Styling Komponen React</h3>
                        <p>Hacktiv8 Indonesia</p>
                    </div>
                    <span>2022</span>
                </div>
                <div class="content">
                    <div>
                        <h3>🏅 Fungsi dan Penggunaan React Native</h3>
                        <p>Hacktiv8 Indonesia</p>
                    </div>
                    <span>2022</span>
                </div>
            </div>
        </section>
    );
};

export default Awards;
