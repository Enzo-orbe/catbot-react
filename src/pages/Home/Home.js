import React from "react";
import Cat from "./components/Cat/Cat";
import Fead from "react-reveal/Fade";
import "./Home.css";

const Home = ({ history }) => {
  return (
    <div className="home-catbot-container">
      <div className="home-catbot-content">
        <Cat history={history} />
        <div className="home-catbot-greeting">
          <Fead opposite>
            <h1>Hola Humano!</h1>
          </Fead>
          <Fead opposite>
            <label>¿Queres Charlar?</label> <br />
            <label> Click sobre mi para comenzar!</label>
          </Fead>
        </div>
      </div>
    </div>
  );
};

export default Home;
