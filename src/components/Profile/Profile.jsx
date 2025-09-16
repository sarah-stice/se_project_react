import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ clothingItems, weatherData, onCardClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          weatherData={weatherData}
          clothingItems={clothingItems}
          onCardClick={onCardClick}
        />
      </section>
    </div>
  );
}

export default Profile;
