
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div className='header'>
        <Link to="/" className='links'>Home</Link>
        <Link to="/retros" className='links'>Retrospective</Link>
        <h1 className='fingers'>Scrumptious</h1>
        <Link to="/shout" className='links'>Shoutouts</Link>
        <Link to="/icebreaker" className='links'>Icebreakers</Link>
        {/* I used 'Link' components on the Header so that it changes 
        the URL and 'Route' components in App.jsx to display the correct content depending on what the URL is */}
      </div>
  
    )
  }
  export default Header