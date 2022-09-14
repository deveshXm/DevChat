import React from "react";
import { useEffect, useRef } from "react";
import TextArea from "./TextArea";
import Message from "./Message";

function ChatBox(props) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKey = (event) => {
    if(props.msg !== ""){
      props.sendMessage(event);
    }
    else{
      event.preventDefault();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.messages]);

  useEffect(() => {
    console.log(props.msg);
  }, [props.msg]);

  return (
    <div class="w-full overflow-hidden">
      <div class="font-semibold bg-white flex justify-center">ROOM : {props.room}</div>
      <div class="relative w-full p-6 overflow-y-auto h-4/6 m-3">
        <ul class="space-y-2">
          {props.messages.map((msg, idx) => (
            <Message user={props.user} msg={msg}/>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
      <div class="flex w-full h-1/6 p-3 border-t border-gray-800">
        <TextArea setMsg={props.setMsg} />
        <button
          type="submit"
          class="ml-3 flex items-center justify-center w-1/12 h-full  bg-blue-500 rounded-md border-2 border-black"
          onClick={handleKey}
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
