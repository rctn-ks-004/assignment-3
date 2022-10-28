import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import Awards from './pages/Awards';
import Education from './pages/Education';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education /> } />
          <Route path='/skills' element={<Skills />} />
          <Route path='/interest' element={<Interest />} />
          <Route path='/awards' element={<Awards />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App;
