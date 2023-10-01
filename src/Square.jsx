import React from "react";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <p>{colorValue ? colorValue : "No Colour"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

export default Square;