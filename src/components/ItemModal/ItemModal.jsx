import "./ItemModal.css";
import closeIcon from "../../assets/close-icon.svg";

function ItemModal({ activeModal, onClose, selectedCard }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_item">
        <button
          onClick={onClose}
          className="modal__close-button modal__close-button_type_item"
          type="button"
        >
          <img
            src={closeIcon}
            alt="close button"
            className="modal__close-icon"
          />
        </button>
        <img
          src={selectedCard.link}
          alt="Image of selected garment"
          className="modal__image"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p className="modal__weather">Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
