import React from "react";
import { styles } from "./styles"
import { ExperienceCard } from "../../components/experience-card/ExperienceCard";

export class Experience extends React.Component {
  render() {
    return (
      <div className={styles.section()} id="experience">
        <div className={styles.title()}>Experience</div>
        <ExperienceCard  position={"Software Engineer Intern"} company={"Vena Energy"} start={"26 June 2022"} end={"Present"} summary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum id neque ac sodales. Morbi aliquam eros in lacinia auctor. Suspendisse ex velit, dapibus et lacinia nec, lacinia mollis turpis. Duis ligula sem, convallis eu fermentum eu, mattis at mi. In consectetur, elit eget dapibus commodo, est elit venenatis sapien,"}/>
        <ExperienceCard  position={"Discrete Mathematics Teaching Assistant 2"} company={"Universitas Indonesia"} start={"1 January 2022"} end={"1 May 2022"} summary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum id neque ac sodales. Morbi aliquam eros in lacinia auctor. Suspendisse ex velit, dapibus et lacinia nec, lacinia mollis turpis. Duis ligula sem, convallis eu fermentum eu, mattis at mi. In consectetur, elit eget dapibus commodo, est elit venenatis sapien,"}/>
        <ExperienceCard  position={"Discrete Mathematics Teaching Assistant 1"} company={"Universitas Indonesia"} start={"1 May 2021"} end={"1 December 2021"} summary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum id neque ac sodales. Morbi aliquam eros in lacinia auctor. Suspendisse ex velit, dapibus et lacinia nec, lacinia mollis turpis. Duis ligula sem, convallis eu fermentum eu, mattis at mi. In consectetur, elit eget dapibus commodo, est elit venenatis sapien,"}/>
      </div>
    );
  }
}