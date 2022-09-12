import React from "react";

function Input(props) {

  const changeValue = (event) => {
    props.setState(event.target.value);
  }
  return (
    <input
      type="text"
      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleFormControlInput2"
      placeholder= {props.placeholder}
      onChange = {changeValue}
    />
  );
}

export default Input;
