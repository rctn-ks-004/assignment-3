import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { getCategories } from './utils/datas/getCategories';

function App() {
  const categories = getCategories();

  return (
    <div className="App">
      <Navbar categories={categories}/>
      <Content categories={categories}/>
    </div>
  );
}

export default App;
