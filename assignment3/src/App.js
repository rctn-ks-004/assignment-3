import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Education from "./components/education/Education";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Education />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
