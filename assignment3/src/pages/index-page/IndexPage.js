import React from "react";
import { styles } from "./styles"
import { Sidebar } from "../../components/sidebar/Sidebar";
import { About } from "../about/About";
import { Experience } from "../experience/Experience";
import { Education } from "../education/Education";
import { Skills } from "../skills/Skills";
import { Awards } from "../awards/Awards";
import { Interests } from "../interests/Interests";

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className={styles.rowBetween()}>
                <div className={styles.navSpace()}>
                    <Sidebar />
                </div>
                <div className={styles.contentSpace()}>
                    <About />
                    <Experience />
                    <Education />
                    <Skills />
                    <Interests />
                    <Awards />
                </div>
            </div>
        )
    }
}

