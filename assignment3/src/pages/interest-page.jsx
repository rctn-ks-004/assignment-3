import * as React from "react";
import InterestCard from "../components/interest-card";
import { PageContainer, PageTitleText } from "../styles";

export default class InterestPage extends React.Component {
  render() {
    return (
      <PageContainer id="#interests">
        <PageTitleText>Interests</PageTitleText>
        <InterestCard />
      </PageContainer>
    );
  }
}
