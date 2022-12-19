import * as React from "react";
import EducationCard from "../components/education-card";
import { PageTitleText, SectionContainer } from "../styles";
import awards from "../utils/awards";

export default class AwardsPage extends React.Component {
  render() {
    return (
      <SectionContainer id="#awards">
        <PageTitleText>Awards and Certificate</PageTitleText>
        {awards.map((award) => (
          <EducationCard {...award} />
        ))}
      </SectionContainer>
    );
  }
}
