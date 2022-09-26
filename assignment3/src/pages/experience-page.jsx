import * as React from "react";
import ExperienceCard from "../components/experience-card";
import { PageContainer, PageTitleText } from "../styles";
import experiences from "../utils/experiences";
export default class ExperiencePage extends React.Component {
  render() {
    return (
      <PageContainer id="#experience">
        <PageTitleText>Experience</PageTitleText>
        {experiences.map((value, index) => (
          <ExperienceCard key={index} {...value} />
        ))}
      </PageContainer>
    );
  }
}
