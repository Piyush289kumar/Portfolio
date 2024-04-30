import React from "react";

function AdminNavbar() {
  return (
    <nav className="bg-white bg-opacity-5 backdrop-blur-xl text-white py-4 w-screen z-10 rounded-xl lg:rounded-none fixed lg:static h-screen lg:h-fit flex flex-col lg:flex-row justify-evenly lg:justify-between lg:px-20 ">
      <ul className="text-2xl flex justify-center flex-col lg:flex-row gap-3 lg:gap-2">
        {["Create Project", "Create Skill", "All Project"].map((tab, idx) => (
          <li
            key={idx}
            className="text-center lg:text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-2xl"
          >
            {tab}
          </li>
        ))}
      </ul>
      <button className="text-2xl px-2 py-1 text-center hover:bg-red-600 hover:bg-opacity-60 hover:shadow-lg rounded-2xl transition-all outline-none">Logout</button>
    </nav>
  );
}

export default AdminNavbar;
