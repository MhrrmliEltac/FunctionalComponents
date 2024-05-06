import { useEffect, useState } from "react";

function Modal() {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        document.querySelector(".modal-body").style.display = "none";
        document.querySelector(".modal-footer").style.display = "none";
        document.querySelector(".modal-header").style.display = "none";
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(true);
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".modal-footer").style.display = "none";
    document.querySelector(".modal-header").style.display = "none";
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>
        </div>
        <div className="modal-body">
          <p>
            Заберите его в пункте выдачи до 15 апреля включительно, потом заказ
            придется отменить.
            <br />
            Вход в пункт выдачи только в маске и перчатках.
          </p>
        </div>
        <div className="modal-footer">
          <button
            onClick={handleCloseModal}
            type="button"
            className="btn btn-secondary"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
