import { useState } from "react";
import "./RetrosPage.css";

const RetrosPage = () => {
const [retros, setRetros] = useState([]);

const [displayThanks, setDisplayThanks] = useState(false);

  const [teamName, setTeamName] = useState();
  const storeTeamName = (event) => {
    setTeamName(event.target.value);
  };
  const [startDate, setStartDate] = useState();
  const storeStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const [endDate, setEndDate] = useState();
  const storeEndDate = (event) => {
    setEndDate(event.target.value);
  };
  const [likeSprint, setLikeSprint] = useState();
  const storeLikeSprint = (event) => {
    setLikeSprint(event.target.value);
  };
  const [lackSprint, setLackSprint] = useState();
  const storeLackSprint = (event) => {
    setLackSprint(event.target.value);
  }; 
  const [learnSprint, setLearnSprint] = useState();
  const storeLearnSprint = (event) => {
    setLearnSprint(event.target.value);
  };
  const [longedSprint, setLongedSprint] = useState();
  const storeLongedSprint = (event) => {
    setLongedSprint(event.target.value);
  };
  const [actionSprint, setActionSprint] = useState();
  const storeActionSprint = (event) => {
    setActionSprint(event.target.value);
  };

  const submitForm = () => {
    const newRetro = {actionSprint: actionSprint, longedSprint  : longedSprint, learnSprint : learnSprint, lackSprint : lackSprint, likeSprint: likeSprint, endDate: endDate, startDate: startDate, teamName: teamName}
    const retroCopy = retros.slice()
    retroCopy.push(newRetro) 
    setRetros(retroCopy)
    setDisplayThanks(true)
  };
return (
    <div className="retrospage">
        <label>Team Name</label>
        <br />
        <input name="userName" type="text" onChange={storeTeamName}/>
        <br />
        <label>Date beginning of sprint</label>
        <br />
        <input name="dt" type="date" onChange={storeStartDate}/>
        <br />
        <label>Date of sprint completion</label>
        <br />
        <input name="dt" type="date" onChange={storeEndDate}/>
        <br />
        <label>What have we liked about this sprint?</label>
        <br />
        <input name="choreDesc" type="text" onChange={storeLikeSprint} />
        <br />
        <label>What have we found was lacking in this sprint?</label>
        <br />
        <input name="choreDesc" type="text" onChange={storeLackSprint}/>
        <br />
        <label>What have we learnt in this sprint?</label>
        <br />
        <input name="choreDesc" type="text" onChange={storeLearnSprint}/>
        <br />
        <label>What have we longed for from this sprint?</label>
        <br />
        <input name="choreDesc" type="text" onChange={storeLongedSprint}/>
        <br />
        <label>What are the actionables to take away from this?</label>
        <br />
        <input name="choreDesc" type="text" onChange={storeActionSprint}/>
        <br />
        <button className="submitButton" onClick={submitForm}>Log Retro</button> 
        {displayThanks ? <h2 className="Thankyou">Thank you for logging your retro!</h2> : null}
         
    </div>
);
};

export default RetrosPage;