import React, { useEffect, useState } from "react";
import AboutPage from "./AboutPage";
import AwardsPage from "./AwardsPage";
import EducationPage from "./EducationPage";
import ExperiencePage from "./ExperiencePage";
import InterestPage from "./InterestPage";
import SkillsPage from "./SkillsPage";

export default function HomePage() {
  
  return (
    <>
      <AboutPage />
      <ExperiencePage />
      <EducationPage />
      <SkillsPage />
      <InterestPage />
      <AwardsPage />
    </>
  );
}
