import React from "react";
import "./CatItem.css";
import catAvatar from "../../../assets/images/images.jpg";

const CatItem = ({ text }) => {
  return (
    <div className="cat-item-container">
      <img src={catAvatar} alt="cat avatar" />
      <div className="cat-item-messages">
        {text.map((t, index) => (
          <label key={index}>{t}</label>
        ))}
      </div>
    </div>
  );
};

export default CatItem;
