import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Interest from './components/Interest/Interest';
import Awards from './components/Awards/Awards';
import Experience from './components/Experience/Experience';


function App() {
  return (
      <div className="App">
          <Navbar />
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/interest" element={<Interest />} />
                  <Route path="/awards" element={<Awards />} />
              </Routes>
          </main>
      </div>
  );
}

export default App;
