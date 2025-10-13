import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import CurrentTemparatureUnitContext from "../../contexts/CurrentTemparatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { addItems, deleteItems, getItems } from "../../utils/api";
import DeleteModal from "../DeleteModal/DeleteItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 0, C: 0 },
    city: "",
    condition: "",
    isDay: true,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [checked, setChecked] = useState(false);
  const [currentTemparatureUnit, setCurrentTemparatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleChange = () => {
    setCurrentTemparatureUnit(currentTemparatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleOpenDelete = () => {
    setActiveModal("delete-item");
  };

  const handleAddItemModalSubmit = async ({ name, imageUrl, weather }) => {
    const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;
    try {
      const newItem = await addItems({ name, imageUrl, weather });
      setClothingItems((previousItems) => [newItem, ...previousItems]);
    } catch (error) {
      console.error(`Error: Could not add item`);
      alert(`Could not add item.`);
    }
    closeActiveModal();
  };

  const handleCardDelete = async (id) => {
    try {
      const removedItem = await deleteItems(id);
      setClothingItems((item) => {
        return clothingItems.filter((item) => {
          return id != item._id;
        });
      });
    } catch (error) {
      console.error(`Error: could not delete item`);
      alert(`Unable to delete item.`);
    }
    closeActiveModal();
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemparatureUnitContext.Provider
      value={{ currentTemparatureUnit, handleChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
        <AddItemModal
          onClose={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          onAddItemModalSubmit={handleAddItemModalSubmit}
        ></AddItemModal>
        <DeleteModal
          onClose={closeActiveModal}
          selectedCard={selectedCard}
          handleCardDelete={handleCardDelete}
          isOpen={activeModal === "delete-item"}
        ></DeleteModal>
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          onClose={closeActiveModal}
          handleOpenDelete={handleOpenDelete}
        />
      </div>
    </CurrentTemparatureUnitContext.Provider>
  );
}

export default App;
