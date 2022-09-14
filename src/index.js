import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Chat from "./pages/Chat/chat";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);
