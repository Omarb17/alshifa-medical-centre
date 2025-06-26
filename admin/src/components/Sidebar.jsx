import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
  const { adminToken } = useContext(AdminContext);
  const { doctorToken } = useContext(DoctorContext);

  return (
    <div className="min-h-screen border-r bg-blue-1">
      {adminToken && (
        <ul className="mt-5 text-blue-9">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 md:px-9 md:min-w-72 cursor-pointer py-3.5 ${
                isActive ? "border-r-8 bg-blue-2 border-blue-3" : ""
              }`
            }
            to={"/admin-dashboard"}
          >
            <img src={assets.home_icon} alt="" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 md:px-9 md:min-w-72 cursor-pointer py-3.5 ${
                isActive ? "border-r-8 bg-blue-2 border-blue-3" : ""
              }`
            }
            to={"/all-appointments"}
          >
            <img src={assets.appointment_icon} alt="" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 md:px-9 md:min-w-72 cursor-pointer py-3.5 ${
                isActive ? "border-r-8 bg-blue-2 border-blue-3" : ""
              }`
            }
            to={"/add-doctor"}
          >
            <img src={assets.add_icon} alt="" />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 md:px-9 md:min-w-72 cursor-pointer py-3.5 ${
                isActive ? "border-r-8 bg-blue-2 border-blue-3" : ""
              }`
            }
            to={"/all-doctors"}
          >
            <img src={assets.people_icon} alt="" />
            <p className="hidden md:block">Doctors List</p>
          </NavLink>
        </ul>
      )}
      {doctorToken && (
        <ul className="mt-5 text-blue-9">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 md:px-9 md:min-w-72 cursor-pointer py-3.5 ${
                isActive ? "border-r-8 bg-blue-2 border-blue-3" : ""
              }`
            }
            to={"/doctor-dashboard"}
          >
            <img src={assets.home_icon} alt="" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 md:px-9 md:min-w-72 cursor-pointer py-3.5 ${
                isActive ? "border-r-8 bg-blue-2 border-blue-3" : ""
              }`
            }
            to={"/doctor-appointments"}
          >
            <img src={assets.appointment_icon} alt="" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 md:px-9 md:min-w-72 cursor-pointer py-3.5 ${
                isActive ? "border-r-8 bg-blue-2 border-blue-3" : ""
              }`
            }
            to={"/doctor-profile"}
          >
            <img src={assets.people_icon} alt="" />
            <p className="hidden md:block">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
