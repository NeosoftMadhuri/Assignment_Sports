import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home'
import HeaderPage from './Container/HeaderPage';
import PlayerDetails from './Component/PlayerDetails';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/playerDetails" element={<PlayerDetails/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
