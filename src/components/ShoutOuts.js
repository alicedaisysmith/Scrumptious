import "./ShoutOuts.css";
import { useState } from "react";
import Modal from "./Modal";


//While we build the UI we want a list of pretend shout outs to help us see how it will look
//Later we will move this list into a useState so that users can add their own shoutouts using the form but don't worry about this for now

//Each shoutout is an string
const shoutOuts = []

const ShoutOuts = () => {
  const [showModal, setShowModal] = useState(false);
  const displayShowModal = () => {
    setShowModal(true)
  }
  const falseShowModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Give your team some recognition...</h1>
      <button onClick={displayShowModal}>Create a new shout out</button>
      {showModal ? <Modal onCancelClick={falseShowModal} /> : null}

      {/*Here we create a div which holds a list of shoutouts*/}
      {/*Why not add some styling to the shoutOutContainer, you could make it a grid?*/}
      <div className="shoutOutContainer">
          
      </div>  
    </div>
  );
};

export default ShoutOuts;

