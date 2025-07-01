import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const DoctorContext = createContext();

// eslint-disable-next-line react/prop-types
const DoctorContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctorToken, setDoctorToken] = useState(
    localStorage.getItem("doctorToken")
      ? localStorage.getItem("doctorToken")
      : ""
  );
  const [appointments, setAppointments] = useState([]);
  const [doctorDashData, setDoctorDashData] = useState([]);
  const [doctorProfileData, setDoctorProfileData] = useState([]);

  const getAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/doctor/appointments",
        {
          headers: { doctorToken },
        }
      );
      if (data.success) {
        setAppointments(data.appointments);
        console.log(data.appointments);

        console.log("appointments:", { appointments });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const completeAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/doctor/complete-appointment",
        { appointmentId },
        { headers: { doctorToken } }
      );

      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/doctor/cancel-appointment",
        { appointmentId },
        { headers: { doctorToken } }
      );

      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getDoctorDashboardData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/doctor/doctor-dashboard",
        {
          headers: { doctorToken },
        }
      );
      if (data.success) {
        setDoctorDashData(data.doctorDashData);
        console.log("Fetched data:", data.doctorDashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getDoctorProfileData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/doctor/doctor-profile",
        { headers: { doctorToken } }
      );

      if (data.success) {
        setDoctorProfileData(data.doctorProfileData);
        console.log(data.doctorProfileData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    backendUrl,
    doctorToken,
    setDoctorToken,
    appointments,
    setAppointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
    doctorDashData,
    setDoctorDashData,
    getDoctorDashboardData,
    doctorProfileData,
    setDoctorProfileData,
    getDoctorProfileData,
  };

  return (
    <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
