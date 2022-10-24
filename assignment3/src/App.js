import { Route, Routes } from 'react-router-dom';
import './App.css';

import Homepage from './pages/HomePage';

function App() {
	return (
		<Routes>
			<Route path="/" exact element={<Homepage />} />
		</Routes>
	);
}

export default App;
