import * as React from "react";
import AsideNav from "../components/aside-nav";
import { PageContainer, RowContainer } from "../styles";
import AboutPage from "./about-page";
import AwardsPage from "./awards-page";
import EducationPage from "./education-page";
import ExperiencePage from "./experience-page";
import InterestPage from "./interest-page";
import SkillstPage from "./skills-page";
export default class Homepage extends React.Component {
  render() {
    return (
      <RowContainer>
        <AsideNav />
        <PageContainer>
          <AboutPage />
          <ExperiencePage />
          <EducationPage />
          <SkillstPage />
          <InterestPage />
          <AwardsPage />
        </PageContainer>
      </RowContainer>
    );
  }
}
