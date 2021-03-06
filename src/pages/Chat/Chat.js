import React, { useState, useEffect } from "react";
import "./Chat.css";
import CatItem from "./CatItem/CatItem";
import UserItem from "./UserItem/UserItem";
import InputChat from "./InputChat/InputChat";
import Select from "./Select/Select";
import { doing, aboutMe } from "../../data/Actions";
import Fead from "react-reveal/Fade";

const Chat = () => {
  let idCounter = 0;

  const [msg, setMsg] = useState({});

  const [openSelect, setOpenSelect] = useState(false);

  const [chat, setChat] = useState([
    {
      id: 0,
      emiter: "Cat",
      msg: ["Hola!", " ¿Como es tu nombre?"],
    },
  ]);

  function firstResponse(name) {
    let newChat = {
      id: idCounter + 2,
      emiter: "Cat",
      msg: [
        "Mucho gusto, " + name + "!!",
        "Mi nombre es Dimitri soy un Cat-bot aun en desarrolo",
        "Eso quiere decir que no estoy preparado para tus preguntas especificas :(",
        "¡Esto no significa que no podamos interactuar!",
        "Haceme una pregunta de la lista, y con gusto respondo.",
      ],
    };
    if (newChat) {
      setChat([...chat, newChat]);
    }
  }

  useEffect(() => {
    if (chat.length === 2) {
      setTimeout(() => firstResponse(msg.msg), 500);
      setMsg({ ...msg, msg: " " });
      setTimeout(() => setOpenSelect(true), 600);
    }
  }, [chat, msg]);

  function getMeMessage(value) {
    idCounter = idCounter + 1;
    setMsg({
      id: idCounter,
      emiter: "User",
      msg: value,
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    setChat([...chat, msg]);
  }

  let options = [
    { id: "What are you doing?", text: "¿Que Haces?" },
    // { id: "Sen me a meme", text: "Mandame un meme " },
    { id: "Tell me about you", text: "Cuentame sobre vos." },
  ];

  const [interactions, setInteractions] = useState([]);

  function handleSelectedOptions(value) {
    let result;
    switch (value) {
      case "What are you doing?":
        result = doing[Math.floor(Math.random() * doing.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;

      case "Tell me about you":
        result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;
      default:
        console.log("no hay valores");
    }
  }

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message, index) =>
              message.emiter === "Cat" ? (
                <CatItem key={index} text={message.msg} />
              ) : (
                <UserItem key={index} text={message.msg} />
              )
            )}
            {openSelect && (
              <Select
                options={options}
                handleSelectedOptions={handleSelectedOptions}
              />
            )}

            {interactions.length > 0 &&
              interactions.map((interactions, index) => (
                <>
                  <Fead left>
                    <CatItem key={index} text={interactions}></CatItem>
                  </Fead>
                  <Fead right>
                    <Select
                      handleSelectedOptions={handleSelectedOptions}
                      options={options}
                    />
                  </Fead>
                </>
              ))}
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat
              chat={chat}
              getMeMessage={getMeMessage}
              sendMessage={sendMessage}
              msg={msg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
