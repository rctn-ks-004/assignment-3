import {Routes, Route} from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import Awards from './pages/Awards';

function App() {
  return (
    <div className="Navigation">
      <Navigation/>
      <div className='Pages'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='experience' element={<Experience/>}/>
          <Route path='skills' element={<Skills/>}/>
          <Route path='interest' element={<Interest/>}/>
          <Route path='awards' element={<Awards/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
