import "./WeatherCard.css";
import {
  weatherConditions,
  defaultWeatherConditions,
} from "../../utils/constants";
import { useContext } from "react";
import CurrentTemparatureUnitContext from "../../contexts/CurrentTemparatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemparatureUnit } = useContext(CurrentTemparatureUnitContext);
  const weatherCondition = weatherConditions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherConditionData;
  if (weatherCondition.length === 0) {
    weatherConditionData =
      defaultWeatherConditions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherConditionData = weatherCondition[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemparatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        &deg;{currentTemparatureUnit}
      </p>
      <img
        src={weatherConditionData?.url}
        alt={weatherConditionData?.condition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
