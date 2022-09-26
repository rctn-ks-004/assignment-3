import * as React from "react";
import AboutCard from "../components/about-card";
import { PageContainer } from "../styles";
import about from "../utils/about";

export default class AboutPage extends React.Component {
  render() {
    return (
      <PageContainer id="#about" name="about">
        <AboutCard {...about} />
      </PageContainer>
    );
  }
}
