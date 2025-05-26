import "./WeatherCard.css";
import {
  weatherConditions,
  defaultWeatherConditions,
} from "../../utils/constants";

function WeatherCard({ weatherData }) {
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
      <p className="weather-card__temp">{weatherData.temp.F}&deg;</p>
      <img
        src={weatherConditionData?.url}
        alt={weatherConditionData?.condition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
