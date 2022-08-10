
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import RetrosPage from './components/RetrosPage';
import ShoutOuts from './components/ShoutOuts';
import Icebreakers from './components/Icebreakers';


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/retros" element={<RetrosPage />} />
        </Routes>
        <Routes>
          <Route path="/shout" element={<ShoutOuts />} />
        </Routes>
        <Routes>
          <Route path="/icebreaker" element={<Icebreakers />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
