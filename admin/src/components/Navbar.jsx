import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

const Navbar = () => {
  const { adminToken, setAdminToken } = useContext(AdminContext);
  const { doctorToken, setDoctorToken } = useContext(DoctorContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    adminToken && setAdminToken("");
    adminToken && localStorage.removeItem("adminToken");
    doctorToken && setDoctorToken("");
    doctorToken && localStorage.removeItem("doctorToken");
  };
  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm border-b sm:text-base bg-blue-2 sm:px-10">
      <div className="flex items-center gap-2 ">
        <img
          className="w-56 cursor-pointer sm:w-72"
          src={assets.CentreMédicalAlShifaLogo}
          alt="CentreMédicalAlShifaLogo"
        />
        <p className="  border rounded-full border-blue-9 px-2.5 py-0.5 font-bold text-blue-8">
          {adminToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        className="px-4 py-1 border rounded-full sm:px-8 bg-blue-4"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
