import React, { useEffect, useState } from "react";
import Modal from "./component/Modal";

function App() {
  

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
    document.querySelector(".modal-body").style.display = "block";
    document.querySelector(".modal-footer").style.display = "block";
    document.querySelector(".modal-header").style.display = "block";
  };

  return (
    <div className="app">
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            onClick={handleShowModal}
            type="button"
            className="btn btn-primary"
          >
            Уведомления
          </button>
        </div>
      </div>

      <Modal />
    </div>
  );
}

export default App;
