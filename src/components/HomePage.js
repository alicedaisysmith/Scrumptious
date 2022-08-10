import './HomePage.css';
import teamimg from '../images/shapes-dribbbleteam.webp'
import mustsun from '../images/noun-sun-mustard.png'

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className="tyler-wrapper">
                <img src={teamimg} className='teamimg'/>
                <div className='h1-wrapper'>
                    <h1 className='toes'>Create</h1>
                    <h1 className='toes'>Unstoppable</h1>
                    <h1 className='toes'>Teams.</h1>
                </div>
            </div>
            <div className='sectionWrapper'>

                <div className='aboutWrapper'>
                    <h2 className='aboutTitle'>Sprint off into the sunset...</h2>
                    <p className='aboutPara'>Scrumptious is your one stop shop for creating well connected and intuative teams. Our scrum management system allows you to break the ice, celebrate success, grapple with the shortcomings of the sprint and ultimately resolve issues to help boost productivity and performance for sprints to come.</p>
                </div>
                <div className='imgWrapper'>

                    <img src={mustsun} className='sun-logo' />
                </div>
            </div>

        </div>
    )
}
export default HomePage