import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useEffect } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const {
    adminToken,
    cancelAppointment,
    adminDashData,
    getAdminDashboardData,
  } = useContext(AdminContext);

  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (adminToken) {
      getAdminDashboardData();
    }
  }, [adminToken]);

  return (
    adminDashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 p-4 transition-all bg-white border-2 border-gray-100 rounded cursor-pointer min-w-52 hover:scale-105">
            <img className="w-14" src={assets.doctor_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {adminDashData.doctors}
              </p>
              <p className="text-gray-400">Doctors</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 transition-all bg-white border-2 border-gray-100 rounded cursor-pointer min-w-52 hover:scale-105">
            <img className="w-14" src={assets.appointments_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {adminDashData.appointments}
              </p>
              <p className="text-gray-400">All Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 transition-all bg-white border-2 border-gray-100 rounded cursor-pointer min-w-52 hover:scale-105">
            <img className="w-14" src={assets.appointments_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {adminDashData.completedAppointments}
              </p>
              <p className="text-gray-400">Completed Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 transition-all bg-white border-2 border-gray-100 rounded cursor-pointer min-w-52 hover:scale-105">
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {adminDashData.patients}
              </p>
              <p className="text-gray-400">Patients</p>
            </div>
          </div>
        </div>

        <div className="bg-white mt-10 border rounded text-sm max-h-[80vh] overflow-y-scroll min-h-[60vh]">
          <div className="flex items-center gap-2.5 px-4 py-4  rounded-t border">
            <img src={assets.list_icon} alt="" />
            <p className="font-semibold">Bookings</p>
          </div>

          <div className="pt-4 border border-t-0">
            {adminDashData?.latestAppointments?.map((item, index) => (
              <div
                className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100"
                key={index}
              >
                <img
                  className="w-10 rounded-full"
                  src={item.docData.image}
                  alt=""
                />
                <div className="flex-1 text-sm">
                  <p className="font-medium text-gray-800">
                    {item.docData.name}
                  </p>
                  <p className="text-gray-600">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>

                {item.cancelled ? (
                  <p className="text-xs font-medium text-red-400">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-xs font-medium text-green-400">
                    Completed
                  </p>
                ) : (
                  <p className="text-xs font-medium text-blue-8">
                    Need An Action In Appointments Page
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
