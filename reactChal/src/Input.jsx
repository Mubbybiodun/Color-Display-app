import React from "react";
import colorChange from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault(e)}>
      <label>Add colour name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add colour name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorChange(e.target.value));
        }}
      />

      <button
        className="toggle"
        type="button"
        onClick={() => {
          setIsDarkText(!isDarkText);
        }}
      >
        Toggle text colour
      </button>
    </form>
  );
};

export default Input;
