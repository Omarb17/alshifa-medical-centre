import { useEffect, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const DoctorsList = () => {
  const { doctors, adminToken, getAllDoctors, changeAvailability } =
    useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (adminToken) {
      getAllDoctors();
    }
  }, [adminToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="flex flex-wrap w-full gap-4 pt-5 gap-y-6">
        {doctors.map((doc, index) => (
          <div
            onClick={() => navigate("")}
            className="overflow-hidden border cursor-pointer group border-blue-3 rounded-xl max-w-56"
            key={index}
          >
            <img
              className="transition-all duration-500 bg-blue-3 group-hover:bg-blue-4"
              src={doc.image}
              alt=""
            />
            <div className="pt-4 pl-4">
              <p className="text-lg font-medium text-neutral-800">{doc.name}</p>
              <p className="text-sm text-zinc-600">{doc.speciality}</p>
              <div className="flex items-center gap-1 my-2 text-sm">
                <input
                  onChange={() => changeAvailability(doc._id)}
                  type="checkbox"
                  checked={doc.available}
                />
                <h1>Available</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
