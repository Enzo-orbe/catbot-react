import React from "react";
import "./InputChat.css";

const InputChat = ({ sendMessage, getMeMessage, msg, chat }) => {
  return (
    <form
      className="chatbot-chat-input-container"
      onSubmit={(e) => sendMessage(e)}
    >
      <input
        disabled={chat.length >= 3 ? true : false}
        placeholder={
          chat.length >= 3 ? "Ya no podes escribir" : "Escribi tu nombre"
        }
        type="text"
        value={msg.msg}
        onChange={(e) => getMeMessage(e.target.value)}
      />
      <button type="submit" />
    </form>
  );
};

export default InputChat;
