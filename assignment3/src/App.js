// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Template } from './component/template';
import { About } from "./pages/about";
import { Start } from "./pages/start";
import { Awward } from "./pages/awward";
import { Exper } from "./pages/exper";
import { Skill } from "./pages/skill";
import { Interest } from "./pages/interest";
import { Home } from './pages/home';
import './style/style.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/temp' element={<Template />} >
        <Route path='/temp/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skill' element={<Skill />} />
        <Route path='interest' element={<Interest />} />
        <Route path='awward' element={<Awward />} />
        <Route path='exper' element={<Exper />} />
      </Route>
    </Routes>
  );
}

export default App;
