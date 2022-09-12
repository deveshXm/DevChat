import React, { useEffect, useState } from "react";
import logo from "../../images/photo.png";
import Input from "./Input";
import { Link } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    
    console.log(user);
    console.log(room);
  }, [user, room])
  
  return (
    <section class="h-screen mb-4">
      <div class="px-6 h-full text-gray-800">
        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 w-96 ">
            <div class=" flex justify-center">
              <img src={logo} class="max-w-full h-auto drop-shadow-md" alt="" />
            </div>
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0">
            <div class= "flex justify-center">
              <h1 class="font-semibold text-4xl md:text-6xl mb-4  text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 ">Dev Chat</h1>
            </div>
            <form>
              <div class="mb-6">
                <Input placeholder="Name" setState = {setUser}/>
              </div>
              <div class="mb-6">
                <Input placeholder="Room" setState = {setRoom}/>
              </div>
              <div class="flex justify-between items-center "></div>

              <div class="text-center lg:text-left">

                <Link onClick = {(e) => (!user || !room) ? e.preventDefault() || window.alert('Null value is not allowed') : null} to = { `/chat?name=${user}&room=${room}`}>   
                <button
                  type="button"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"               
                >
                  Connect Me!
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
