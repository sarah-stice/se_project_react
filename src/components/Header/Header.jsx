import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="wtwr logo" />
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>

      <ToggleSwitch />
      <button
        type="button"
        className="header__add-button"
        onClick={handleAddClick}
      >
        + Add Clothes
      </button>
      <Link className="header__link-profile" to="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>

          {avatar ? (
            <img
              className="header__avatar"
              src={avatar || avatarDefault}
              alt="username"
            />
          ) : (
            <span className="header__avatar header__avatar_none">
              {username?.toUpperCase().charAt(0) || ""}
            </span>
          )}
        </div>
      </Link>
    </header>
  );
}

export default Header;
