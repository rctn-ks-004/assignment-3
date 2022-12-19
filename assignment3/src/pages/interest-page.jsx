import * as React from "react";
import InterestCard from "../components/interest-card";
import { PageTitleText, SectionContainer } from "../styles";

export default class InterestPage extends React.Component {
  render() {
    return (
      <SectionContainer id="#interests">
        <PageTitleText>Interests</PageTitleText>
        <InterestCard />
      </SectionContainer>
    );
  }
}
