import React from "react";
import "./Slect.css";

const Select = ({ options, handleSelectedOptions }) => {
  return (
    <div className="selector-content">
      <div className="selector-container">
        {options.map((op) => (
          <div
            key={op.id}
            onClick={(e) => handleSelectedOptions(op.id)}
            className="selector-options"
          >
            <label>{op.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
