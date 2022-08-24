import "./ShoutOuts.css";
import { useState } from "react";
import Modal from "./Modal";

const ShoutOuts = () => {
  const [shoutouts, setShoutouts] = useState([])
  const storeShoutout = (newShoutout) => {
    const shoutoutsCopy = shoutouts.slice()
    // slice is a way to duplicate the shoutout array as react was being to clever and thinking nothing had changed
    shoutoutsCopy.unshift(newShoutout)
    // unshift pushed it out
    setShoutouts(shoutoutsCopy)
  }
  const [showModal, setShowModal] = useState(false);
  const displayShowModal = () => {
    setShowModal(true)
  }
  const falseShowModal = () => {
    setShowModal(false);
  };

  return (
    <div className="shoutWrapper">
      <h1>Give your team some recognition...</h1>
      <button className="shoutoutButton" onClick={displayShowModal}>Create a new shout out</button>
      {shoutouts.map((shoutout) => <p className="shoutouts">{shoutout}</p>)}
      {showModal ? <Modal onCancelClick={falseShowModal} saveSubmitState={storeShoutout} /> : null}     
      {/* {showModal ? <Modal onCancelClick={falseShowModal} saveSubmitState={storeShoutout} /> : null} */}

    </div>
  
  );
};

export default ShoutOuts;

