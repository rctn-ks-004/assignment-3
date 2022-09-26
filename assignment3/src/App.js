import { Route, Routes } from 'react-router-dom';
import './App.css';

import Homepage from './pages/HomePage';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" exact element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
