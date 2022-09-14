import React from "react";
import MessageArea from "./MessageArea"

const Message = (props) => {
  return (
    <div
      id={props.msg.idx}
      className={`flex ${
        props.user.toLowerCase() !== props.msg.user
          ? "justify-start"
          : "justify-end"
      }`}
    >
      <div>
        <p
          class={`flex text-sm ${
            props.user.toLowerCase() !== props.msg.user
              ? "justify-start"
              : "justify-end"
          }`}
        >
          {props.msg.user}
        </p>
        <div
          class={`relative${
            props.user.toLowerCase() !== props.msg.user
              ? " border-2 border-gray-800"
              : " border-2 border-gray-800"
          } rounded shadow-md`}
        >
          <MessageArea msg={props.msg} class="overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default Message;
