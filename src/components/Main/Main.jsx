import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is 75&deg; F / You may want to wear:
        </p>
        {/* {ADD THE Cards} */}
      </section>
    </main>
  );
}

export default Main;
