import { useState } from "react";
import "./Modal.css";

const teams = [
  { teamName: "One Response", members: ["Holly", "Josh", "Steve", "Mike"] },
  { teamName: "OneED", members: ["Matthew", "Tyler", "Lloyd", "Rafael"] },
];
const behaviours = ["teamwork", "hardworking", "creativity", "independance", "above and beyond"]

const Modal = ({ onCancelClick }) => {
  // we have passed in a variable (or property) into the modal component they need {} to work - we will add an on click into the cancel button
  const [selectedBehaviour, setSelectedBehaviour] = useState();
  const storeSelectedBehaviour = (event) => {
    setSelectedBehaviour(event.target.value);
  };

  const [selectedName, setSelectedName] = useState();
  const storeSelectedName = (event) => {
    setSelectedName(event.target.value);
  };
  const [selectedTeam, setSelectedTeam] = useState();
  const storeSelectedTeam = (event) => {
    setSelectedTeam(event.target.value);
  };
  const submitForm = () => {
    console.log (`Congratulations to ${selectedName} from the ${selectedTeam} team for their ${selectedBehaviour}.`)
  }

  return (
    <div className="modal">
      <div className="modalContent">
        <header>
          <h1>Create a shout out</h1>
        </header>
        <div className="dropdowns">
          <label>Team name</label>
          <select name="selectTeam" onChange={storeSelectedTeam}>
            <option selected value={"default"} disabled>
              Please select...
            </option>
            {teams.map((team) => (
              <option value={team.teamName}>{team.teamName}</option>
            ))}
          </select>
          <label>Employee name</label>
          <select name="selectTeam" onChange={storeSelectedName}>
            <option selected value={"default"} disabled>
              Please select...
            </option>
            {teams[0].members.map((member) => (
              <option value={member}>{member}</option>

            ))}
            
            {/* <option value={"Honky"}>Honky</option> */}
            {/* <option value={"Stonky"}>Stonky</option> */}
            {/* <option value={"Bonky"}>Bonky</option> */}
          </select>
          <label>Shout out type</label>
          <select name="selectBehaviour" onChange={storeSelectedBehaviour}>
            <option selected value={"default"} disabled>
              Please select...
            </option>
            {behaviours.map((behaviour) => (
              <option value={behaviour}>{behaviour}</option>
            ))}
            {/* <option value={"teamwork"}>Teamwork</option> */}
            {/* <option value={"creativty"}>Creativity</option> */}
            {/* <option value={"independance"}>Independance</option> */}
            {/* <option value={"above and beyond"}>Above and Beyond</option> */}
            {/* the commented out bits are what I initially wrote but then refactored it into maps to avoid having to write option again and again. The map itterates through the array and applies the same logic to each, in this case giving a value the same as the behaviour */}
          </select>
        </div>
        <p>modal body section</p>
        <button onClick={submitForm}>Submit shoutout</button>
        <button onClick={onCancelClick}>Cancel shoutout</button>
      </div>
    </div>
  );
};

export default Modal;
