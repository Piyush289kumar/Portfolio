import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/Slice/navSlice";
import { setPage } from "../../redux/Slice/pageSlice";
function AdminNavbar() {
  const toggleNav = useSelector((state) => state.nav.toggleNav);
  const dispatch = useDispatch();
  return (
    <nav
      className={`bg-white bg-opacity-5 backdrop-blur-xl text-white w-screen z-10 rounded-xl lg:rounded-none fixed lg:static h-screen lg:h-fit flex flex-col lg:flex-row justify-evenly lg:justify-between border border-none lg:border-gray-500 py-10 lg:py-3 lg:px-20 lg:translate-x-0 transition delay-150  ease-in-out ${
        toggleNav ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <AiOutlineClose
        className={`absolute top-5 right-5 text-lg hover:scale-125 cursor-pointer hover:text-red-400 transition-all lg:hidden`}
        onClick={() => dispatch(toggle())}
      />
      <ul className="text-2xl flex justify-center flex-col lg:flex-row gap-3 lg:gap-2">
        {[
          {
            name: "All Project",
            link: "AllProject",
          },
          {
            name: "All Skill",
            link: "AllSkill",
          },
          {
            name: "Create Project",
            link: "CreateProject",
          },
          {
            name: "Create Skill",
            link: "CreateSkill",
          },
        ].map((tab, idx) => (
          <li
            key={idx}
            className="text-center lg:text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-2xl"
            onClick={() => {
              dispatch(setPage(tab.link));
            }}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <button className="text-2xl px-2 py-1 text-center hover:bg-red-600 hover:bg-opacity-60 hover:shadow-lg rounded-2xl transition-all outline-none">
        Logout
      </button>
    </nav>
  );
}
export default AdminNavbar;
