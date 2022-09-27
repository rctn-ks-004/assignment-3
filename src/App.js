import React,{useState} from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AboutCompanyPage from "./pages/AboutCompanyPage";
import Members from "./pages/Members";
import Member from "./pages/Member";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import InterestPage from "./pages/InterestPage";
import AwardsPage from "./pages/AwardsPage";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className="page">
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />}>
            <Route path="about-company" element={<AboutCompanyPage />} />
          </Route>
          <Route path="/members" element={<Members />}>
            <Route path=":member" element={<Member />} />
          </Route> */}

          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/interest" element={<InterestPage />} />
          <Route path="/awards" element={<AwardsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
