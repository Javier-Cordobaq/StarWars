import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import DetailFilm from './components/DetailFilm/DetailFilm';
import DetailCharacter from './components/DetailCharacter/DetailCharacter';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/starwars' element={<LandingPage/>} />
        <Route path='/detail/:_id' element={<DetailFilm/>} />
        <Route path='/detailc/:_id' element={<DetailCharacter/>} />
      </Routes>
    </div>
  );
}

export default App;
