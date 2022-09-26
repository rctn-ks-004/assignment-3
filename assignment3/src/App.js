import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Awards from './pages/Awards';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import styles from './components/app-style';


function App(){
  return(
    <div className='mainPage' style={styles.mainPages}>
      <Navbar></Navbar>
      <div style={styles.rightPages} >
      <Routes>
        <Route path ="/" element={<About/>}></Route>
        <Route path ="/about" element={<About/>}></Route>
        <Route path ="/awards" element={<Awards/>}></Route>
        <Route path ="/experiences" element={<Experiences/>}></Route>
        <Route path ="/interest" element={<Interest/>}></Route>
        <Route path ="/skills" element={<Skills/>}></Route>
      </Routes>
      </div>
      
    </div>
    
  )
}

export default App;
