import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about-page";
import EducationPage from "./pages/education-page";
import ExperiencePage from "./pages/experience-page";
import InterestPage from "./pages/interest-page";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/interests" element={<InterestPage />} />
      </Routes>
    </div>
  );
}

export default App;
