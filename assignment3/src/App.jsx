import {Route, Routes} from 'react-router-dom'
import { Sidebar } from "./component"
import { About, Awards, Education, Experience, Home, Interest, Skill } from './page'


function App() {

  return (
    <div className='bg-slate-400' >
       <Sidebar/>
      <div className='ml-96'>
        <Home/>
      {/* <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/awards' element={<Awards/>} />
            <Route path='/education' element={<Education/>} />
            <Route path='/experience' element={<Experience/>} />
            <Route path='/interest' element={<Interest/>} />
            <Route path='/skills' element={<Skill/>} />
        </Routes> */}
      </div>
    </div>
  )
}

export default App
