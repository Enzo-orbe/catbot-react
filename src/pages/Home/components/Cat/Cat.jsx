import React from "react";
import Lottie from "react-lottie";
import animationCat from "./4889-cat.json";
import "./Cat.css";

const Cat = ({ history }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationCat,
  };

  function handeOnClick() {
    history.push("/chat");
  }

  return (
    <div onClick={handeOnClick} className="cat-container">
      <Lottie options={defaultOptions} />
      {/*<label>Hola Humano!</label>*/}
    </div>
  );
};

export default Cat;
