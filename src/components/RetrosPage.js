import './RetrosPage.css';

const RetrosPage = () => {
    
 //   const [choreDesc, setChoreDesc] = useState();
 //   const [name, setName] = useState();
  //  const [date, setDate] = useState();
    const handleSubmit = () => { }
    return (
        <div className='retrospage'>
        <form onSubmit={e => { handleSubmit(e) }}>

            <label>Team Name</label>
            <br />
            <input
                name='userName'
                type='text'
            />
            <br />
            <label>Date beginning of sprint</label>
            <br />
            <input
                name='dt'
                type='date'
            />
            <br />
            <label>Date of sprint completion</label>
            <br />
            <input
                name='dt'
                type='date'
            />
            <br />
            <label>What have we liked about this sprint?</label>
            <br />
            <input
                name='choreDesc'
                type='text'
            />
            <br />
            <label>What have we found was lacking in this sprint?</label>
            <br />
            <input
                name='choreDesc'
                type='text'
            />
            <br />
            <label>What have we learnt in this sprint?</label>
            <br />
            <input
                name='choreDesc'
                type='text'
            />
            <br />
            <label>What have we longed for from this sprint?</label>
            <br />
            <input
                name='choreDesc'
                type='text'
            />
            <br />
            <label>What are the actionables to take away from this?</label>
            <br />
            <input
                name='choreDesc'
                type='text'
            />
            <br />
            <input
                className='submitButton'
                type='submit'
                value='Log Retro'
            />
            </form>
            </div>
        
        
    )
}



export default RetrosPage