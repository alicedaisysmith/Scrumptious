import "./ShoutOuts.css";
import { useState } from "react";
import Modal from "./Modal";

const ShoutOuts = () => {
  const [showModal, setShowModal] = useState(false);
  const falseShowModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Give your team some recognition...</h1>
      <button onClick={() => setShowModal(true)}>Create a new shout out</button>
      {showModal ? <Modal onCancelClick={falseShowModal} /> : null}
    </div>
  );
};

export default ShoutOuts;
