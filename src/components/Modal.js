import { useState } from "react";
import "./Modal.css";

const teams = [
  { teamName: "One Response", members: ["Holly", "Josh", "Faizan", "Olena", "Matthew", "Lloyd", "Tyler"] },
  { teamName: "OneED", members: ["Matthew", "Tyler", "Lloyd", "Rafael"] },
];
// this is an array of objects 
const behaviours = [
  "teamwork",
  "hard work",
  "creativity",
  "independence",
  "ability to go above and beyond",
];

const achievements = [
  'came up with a brilliant new idea for an app! Unfortunately, "Amazon.com" already exists, but great job trying!',
  "stopped the screaming coming from the other building and cleaned up all the blood!",
  "managed to do a standing triple backflip! Not relevant to their work at all, but impressive nevertheless!",
  "will receive a knighthood for their contribution to Mongolian literature!",
  "will lead a new team to develop OneTruth, the UK's first official healthcare cult app",
  'has won the "Most new profanities uttered in sixty seconds award" after OneResponse crashed for the 35th time that hour',
];

const Modal = ({ onCancelClick, saveSubmitState }) => {
  // we have passed in a variable (or property) into the modal component they need {} to work -
  // oncancelclick is updating the showModal state to be false, resulting in the modal being hidden when the cancel button is pressed
  // savesubmitstate is saving the shout out info to usestate ready to be displayed on the shoutouts.js page
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
    console.log(selectedTeam);
  };
  const submitForm = () => {
    const randomAchievement = achievements[Math.floor(Math.random() * achievements.length)]
    saveSubmitState(
      `Congratulations to ${selectedName} from the ${selectedTeam} team for their ${selectedBehaviour}. ${selectedName} ${randomAchievement}`
    );
    onCancelClick();
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <header>
          <h1 className="modalHeader">Create a shout out</h1>
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
            {/* for every entity within the array path down one level
             and add teamname as the value attribute for option and as the content for option */}
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
            {/* the commented out bits are what I initially wrote but then refactored it into maps to avoid having to write option again and again. 
            The map itterates through the array and applies the same logic to each, in this case giving a value the same as the behaviour */}
          </select>
        </div>

        <div className="buttonWrapper">
          <button className="submit" onClick={submitForm}>
            Submit shoutout
          </button>
          <button className="cancel" onClick={onCancelClick}>
            Cancel shoutout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
