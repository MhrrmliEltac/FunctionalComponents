import React, { useState } from "react";
import Modal from "./component/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
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

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
