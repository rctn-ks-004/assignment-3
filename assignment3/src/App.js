import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
