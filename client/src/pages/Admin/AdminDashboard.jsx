import React from "react";
import {
  AdminNavbar,
  AllProject,
  AllSkill,
  CreateProject,
  CreateSkill,
} from "../../components/adminComponents/index.js";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/Slice/navSlice.js";
function AdminDashboard() {
  const toggleNav = useSelector((state) => state.nav.toggleNav);
  const page = useSelector((state) => state.page.page);
  const dispatch = useDispatch();
  return (
    <>
      <AdminNavbar />
      <GiHamburgerMenu
        onClick={() => dispatch(toggle())}
        className={`fixed text-xl text-white top-5 right-5 z-10 cursor-pointer lg:hidden ${
          toggleNav ? "hidden z-0" : "block"
        }`}
      />
      <div className="w-full h-screen  lg:px-72">
        {(() => {
          switch (page) {
            case "AllProject":
              return <AllProject />;
              break;
            case "AllSkill":
              return <AllSkill />;
              break;
            case "CreateProject":
              return <CreateProject />;
              break;
            case "CreateSkill":
              return <CreateSkill />;
              break;
            default:
              return <AllProject />;
          }
        })()}
      </div>
    </>
  );
}
export default AdminDashboard;
