import React from "react";
import { useEffect, useRef } from "react";
import FormEditor from "./FormEditor";
import Message from "./Message/Message";

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
    <div class="w-full ">
      <div class="relative w-full p-6 overflow-y-auto h-4/6">
        <ul class="space-y-2">
          {props.messages.map((msg, idx) => (
            <Message user={props.user} msg={msg}/>
          ))}
        </ul>
      </div>
      <div class="flex w-full h-2/6 p-3 border-t border-gray-800">
        <FormEditor setMsg={props.setMsg} />
        <button
          type="submit"
          class="ml-3 flex items-center justify-center w-1/12 h-3/6 bg-blue-500 overflow-y-auto rounded-md border-2 border-black"
          onClick={handleKey}
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
