import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatBox from "../../components/Chat/ChatBox";
import UserList from "../../components/Chat/UserList";

let socket;
const Chat = () => {

  //creating connection
  const backEndUrl = "http://localhost:8000";
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const name = params.get("name");
    const room = params.get("room");

    console.log(name, room);
    setUser(name);
    setRoom(room);
    socket = io(backEndUrl);
    socket.emit("join", { name: name, room: room }, (error) => {
      if (error) {
        alert(error);
      }
    });
    
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on("activeUsers", (users) => {
      setActiveUsers(users);
    });
  }, []);

  //Clear Input after hitting enter
  const sendMessage = (event) => {
    event.preventDefault();

    socket.emit("sendMsg", msg, () => setMsg(msg));
  };

  return (
    <div class="flex h-screen bg-gray-200">
      <UserList activeUsers={activeUsers} />
      <ChatBox
        user={user}
        room={room}
        sendMessage={sendMessage}
        messages={messages}
        msg = {msg}
        setMsg = {setMsg}
      />
    </div>
  );
};

export default Chat;
