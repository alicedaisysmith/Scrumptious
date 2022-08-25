import './Footer.css';
import bluesun from '../../images/noun-sun-blue.png'


const Footer = () => {
    return (
<div className='footWrapper'>
<footer className='footer'>
   <h1>Connect</h1>
   <img src={bluesun} className='blueSun' />
   <h1>Subscribe</h1> 
</footer>
</div>
    )
}

// I didn't get chance to make the footer funcitonal but could do this to improve

export default Footer