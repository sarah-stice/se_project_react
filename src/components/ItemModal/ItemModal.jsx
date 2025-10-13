import "./ItemModal.css";
import closeIcon from "../../assets/close-icon.svg";

function ItemModal({
  activeModal,
  onClose,
  handleOpenDelete,
  onClick,
  selectedCard,
}) {
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
          src={selectedCard.imageUrl}
          alt="Image of selected garment"
          className="modal__image"
        />
        <div className="modal__footer">
          <div className="modal__footer_wrapper">
            <h2 className="modal__caption">{selectedCard.name}</h2>
            <p className="modal__weather">Weather: {selectedCard.weather}</p>
          </div>
          <button
            onClick={handleOpenDelete}
            className="modal__button_type_delete "
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
