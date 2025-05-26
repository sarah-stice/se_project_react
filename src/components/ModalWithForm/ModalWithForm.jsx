import closeIcon from "../../assets/close-grey.png";
import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, activeModal, onClose, title }) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__close-button" type="button">
          <img
            src={closeIcon}
            alt="close button"
            className="modal__close-icon"
          />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
