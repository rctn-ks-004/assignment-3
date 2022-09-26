import { Route, Routes } from "react-router-dom";
import AsideNav from "./components/aside-nav";
import AboutPage from "./pages/about-page";
import EducationPage from "./pages/education-page";
import ExperiencePage from "./pages/experience-page";
import InterestPage from "./pages/interest-page";
import { AppContainer } from "./styles";
import "./styles.css";

function App() {
  return (
    <AppContainer className="App" id="containerElement">
      <AsideNav />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/interests" element={<InterestPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
