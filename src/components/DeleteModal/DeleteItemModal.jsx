import "./DeleteItemModal.css";
import closeIcon from "../../assets/close-grey.png";

function DeleteModal({
  activeModal,
  handleCardDelete,
  onClose,
  isOpen,
  onClick,
  selectedCard,
}) {
  return (
    <div className={`modal modal__type_delete ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_delete">
        <button
          onClick={onClose}
          className="modal__close-button modal__close-button_type_delete"
          type="button"
        >
          {" "}
          <img
            src={closeIcon}
            alt="close button"
            className="modal__close-icon"
          />
        </button>
        <h2 className="modal__title modal__title_type_delete">
          Are you sure you want to delete this item? <br />
          This action is irreversible.
        </h2>
        <div className="modal__button-container">
          <button
            onClick={() => {
              handleCardDelete(selectedCard._id);
            }}
            className="modal__delete-button "
          >
            Yes, delete item
          </button>
          <button onClick={onClose} className="modal__cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
