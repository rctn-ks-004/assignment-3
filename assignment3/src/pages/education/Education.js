import React from "react";
import { styles } from "./styles";
import { EducationCard } from "../../components/education-card/EducationCard";

export class Education extends React.Component {
  render() {
    return (
      <div className={styles.section()} id="education">
        <div className={styles.title()}>Education</div>
        <EducationCard  title={"Computer Science Major"} institute={"Universitas Indonesia"} start={"July 2019"} end={"Present"} summary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum id neque ac sodales. Morbi aliquam eros in lacinia auctor. Suspendisse ex velit, dapibus et lacinia nec, lacinia mollis turpis. Duis ligula sem, convallis eu fermentum eu, mattis at mi. In consectetur, elit eget dapibus commodo, est elit venenatis sapien,"}/>
      </div>
    );
  }
}