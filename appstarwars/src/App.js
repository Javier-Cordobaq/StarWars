import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import DetailFilm from './components/DetailFilm/DetailFilm';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/detail/:_id' element={<DetailFilm/>} />
      </Routes>
    </div>
  );
}

export default App;
