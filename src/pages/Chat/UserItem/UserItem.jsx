import React from "react";
import userItem from "../../../assets/images/descarga.png";
import "./UserItem.css";

const UserItem = ({ text }) => {
  return (
    <div className="user-item-container">
      <div className="user-item-messages">
        <label>{text}</label>
      </div>
      <img src={userItem} alt="user-avatar" />
    </div>
  );
};

export default UserItem;
