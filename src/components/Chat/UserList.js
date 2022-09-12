import React from "react";

function UserList(props) {
  return (
    <div class="h-screen md:flex hidden w-4/12 bg-gray-800 justify-center items-center">
      <div class="flex-col space-y-2 bg-gray-600 w-4/6 rounded text-center p-4 shadow-md shadow-black text-white">
        <h1>Active Users</h1>
        {props.activeUsers.map((each, idx) => (
          <li key={idx}>{JSON.stringify(each.name).replaceAll('"', "")}</li>
        ))}
      </div>
    </div>
  );
}

export default UserList;
