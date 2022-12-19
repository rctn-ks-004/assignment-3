import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import "./styles.css";

function App() {
  return (
    <div className="App" id="containerElement">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
