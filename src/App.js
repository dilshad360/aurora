import './App.css';
import GroupRanking from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<GroupRanking/>} />
    </Routes>
    </div>
  );
}

export default App;
