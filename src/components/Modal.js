import { useState } from "react";
import "./Modal.css";

const teams = [{teamName: 'One Response', members: ['Holly', 'Josh','Steve', 'Mike']}, {teamName: 'OneED', members: ['Matthew', 'Tyler', 'Lloyd', 'Rafael']}]
const behaviours = ['Teamwork', 'Creativity', 'Hard Working', 'Above and beyond']

const Modal = ({ onCancelClick }) => {
  // we have passed in a variable (or property) into the modal component they need {} to work - we will add an on click into the cancel button
  
const [selectedTeam, setSelectedTeam] = useState() 
const getSelectedTeam = (event) => {
    setSelectedTeam(event.target.value) 
}
  return (
    <div className="modal">
      <div className="modalContent">
        <header>
          <h1>Create a shout out</h1>
        </header>
        <div className="dropdowns">
          <label>Team name</label>
          <select name="selectTeam" onChange={getSelectedTeam}>
            <option selected value={'default'} disabled>Please select...</option>
            {teams.map((team) => <option value= {team.teamName}>{team.teamName}</option>)}
            
         
          </select>
          <label>Employee name</label>
          <select name="selectTeam">
          <option selected value={'default'} disabled>Please select...</option>
            <option>Honky</option>
            <option>Stonky</option>
            <option>Bonky</option>
          </select>
          <label>Shout out type</label>
          <select name="selectTeam">
            <option selected value={'default'} disabled>Please select...</option>
            {behaviours.map((behaviour) => <option value={behaviour}>{behaviour}</option>)}
          </select>
        </div>
        <p>modal body section</p>
        <button>Submit shoutout</button>
        <button onClick={onCancelClick}>Cancel shoutout</button>
      </div>
    </div>
  );
};

export default Modal;
