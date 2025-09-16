import "./ClothesSection.css";
import "../Main/Main.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, weatherData, onCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes__title-container">
        <p className="clothes__title">Your Items</p>
        <button className="clothes__add-button">+ Add New</button>
      </div>
      <ul className="cards__list cards__list_clothes-section">
        {clothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
