import React from "react";
import { AdminNavbar } from "../../components/adminComponents/index.js";
import { GiHamburgerMenu } from "react-icons/gi";
import { toggle } from "../../redux/Slice/navSlice.js";
import { useDispatch, useSelector } from "react-redux";

function AdminDashboard() {
  const toggleNav = useSelector((state) => state.nav.toggleNav);

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
    </>
  );
}

export default AdminDashboard;
