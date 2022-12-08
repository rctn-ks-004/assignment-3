import * as React from "react";
import { css } from "../../styles/styles";
import About from "../About/About";
import Award from "../Awards/Award";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Interest from "../Interests/Interests";
import Navbar from "../Navbar/Navbar";
import Skill from "../Skills/Skills";
export default function Homepage() {
  return (
    <div className={styles.rowBetween()}>
      <div style={{ width: "20%" }}>
        <Navbar />
      </div>
      <div style={{ width: "80%" }}>
        <About />
        <Experience />
        <Education />
        <Skill />
        <Interest />
        <Award />
      </div>
    </div>
  );
}

const styles = {
  rowBetween: css({
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
  }),
};
