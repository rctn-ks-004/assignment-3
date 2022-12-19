import * as React from "react";
import ExperienceCard from "../components/experience-card";
import { PageTitleText, SectionContainer } from "../styles";
import experiences from "../utils/experiences";
export default class ExperiencePage extends React.Component {
  render() {
    return (
      <SectionContainer id="#experience">
        <PageTitleText>Experience</PageTitleText>
        {experiences.map((value, index) => (
          <ExperienceCard key={index} {...value} />
        ))}
      </SectionContainer>
    );
  }
}
