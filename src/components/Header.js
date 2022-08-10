
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div className='header'>
        <Link to="/">Home</Link>
        <Link to="/retros">Retro</Link>
        <h1 className='fingers'>Scrumptious</h1>
        <Link to="/shout">Shout Outs</Link>
        <Link to="/icebreaker">Icebreakers</Link>
      </div>
  
    )
  }
  export default Header