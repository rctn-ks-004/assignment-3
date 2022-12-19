import * as React from "react";
import AboutCard from "../components/about-card";
import { SectionContainer } from "../styles";
import about from "../utils/about";

export default class AboutPage extends React.Component {
  render() {
    return (
      <SectionContainer id="#about" name="about">
        <AboutCard {...about} />
      </SectionContainer>
    );
  }
}
