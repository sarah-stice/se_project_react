import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="wtwr logo" />
      <p className="header__date-location">DATE, Location</p>
      <button className="header__add-button">Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">NAME</p>
        <img className="header__avatar" src={avatar} alt="username" />
      </div>
    </header>
  );
}

export default Header;
