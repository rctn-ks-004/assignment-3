import * as React from "react";
import SkillCard from "../components/skill-card";
import { PageTitleText, SectionContainer } from "../styles";
import skills from "../utils/skills";

export default class SkillstPage extends React.Component {
  render() {
    return (
      <SectionContainer id="#skills">
        <PageTitleText>Skills</PageTitleText>
        {skills.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </SectionContainer>
    );
  }
}
