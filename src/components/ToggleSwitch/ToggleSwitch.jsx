import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemparatureUnitContext from "../../contexts/CurrentTemparatureUnitContext";

function ToggleSwitch() {
  const { handleChange, currentTemparatureUnit } = useContext(
    CurrentTemparatureUnitContext
  );

  return (
    <div className="toggle">
      <label htmlFor="toggle__input" className="toggle__label">
        <input
          className="toggle__input"
          id="toggle__input"
          type="checkbox"
          checked={currentTemparatureUnit === "C"}
          onChange={handleChange}
        />
        <span className="toggle__circle"></span>
        <span
          className={`toggle__text toggle__text_F ${
            currentTemparatureUnit === "F" ? "toggle__text_color_white" : ""
          }`}
        >
          F
        </span>
        <span
          className={`toggle__text toggle__text_C ${
            currentTemparatureUnit === "C" ? "toggle__text_color_white" : ""
          }`}
        >
          C
        </span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
