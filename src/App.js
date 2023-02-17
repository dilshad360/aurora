import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Result from './pages/Result';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/results' element={<Result/>} />
      <Route path='*' element={<Home />}/>
    </Routes>
    </div>
  );
}

export default App;
