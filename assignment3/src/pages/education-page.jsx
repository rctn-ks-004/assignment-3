import * as React from "react";
import EducationCard from "../components/education-card";
import { PageContainer, PageTitleText } from "../styles";
import educations from "../utils/educations";

export default class EducationPage extends React.Component {
  render() {
    return (
      <PageContainer id="#education">
        <PageTitleText>Education</PageTitleText>
        {educations.map((value, index) => (
          <EducationCard key={index} {...value} />
        ))}
      </PageContainer>
    );
  }
}
