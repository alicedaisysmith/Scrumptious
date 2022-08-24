
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// React Router DOM enables you to implement dynamic routing in a web app.
import RetrosPage from './components/RetrosPage';
import ShoutOuts from './components/ShoutOuts';
import Icebreakers from './components/Icebreakers';
import Footer from './components/Section/Footer';


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        {/* Header and footer are placed here as they are present 
        on all pages and don't need to be rerendered everytime we change page */}
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
        <Footer />
      </div>
    </Router>


  );
}

export default App;
