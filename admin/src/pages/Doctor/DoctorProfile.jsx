import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorProfile = () => {
  const {
    doctorToken,
    doctorProfileData,
    setDoctorProfileData,
    getDoctorProfileData,
    backendUrl,
  } = useContext(DoctorContext);
  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);

  const updateDocProfileData = async () => {
    try {
      const updateData = {
        address: doctorProfileData.address,
        fees: doctorProfileData.fees,
        available: doctorProfileData.available,
      };

      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-doctor-profile",
        updateData,
        { headers: { doctorToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getDoctorProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (doctorToken) {
      getDoctorProfileData();
    }
  }, [doctorToken]);

  return (
    doctorProfileData && (
      <div>
        <div className="flex flex-col gap-4 m-5">
          <div>
            <img
              className="w-full rounded-lg bg-blue-3 sm:max-w-64"
              src={doctorProfileData.image}
              alt=""
            />
          </div>
          <div className="flex-1 p-8 bg-white border rounded-lg border-stone-100 py-7">
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {doctorProfileData.name}
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              <p>
                {doctorProfileData.degree}-{doctorProfileData.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {doctorProfileData.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 mt-3 text-sm font-medium text-neutral-800 ">
                About:
              </p>
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                {doctorProfileData.about}
              </p>
            </div>
            <p className="mt-4 font-medium text-gray-600">
              Appointment Fee:{" "}
              <span className="text-gray-800">
                {isEdit ? (
                  <input
                    type="number"
                    onChange={(e) =>
                      setDoctorProfileData((prev) => ({
                        ...prev,
                        fees: e.target.value,
                      }))
                    }
                    value={doctorProfileData.fees}
                  />
                ) : (
                  doctorProfileData.fees
                )}
                {currency}
              </span>
            </p>
            <div className="flex gap-2 py-2">
              <p>Address:</p>
              <p className="text-sm ">
                {isEdit ? (
                  <input
                    type="text"
                    onChange={(e) =>
                      setDoctorProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                    value={doctorProfileData.address.line1}
                  />
                ) : (
                  doctorProfileData.address?.line1
                )}
                <br />
                {isEdit ? (
                  <input
                    type="text"
                    onChange={(e) =>
                      setDoctorProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                    value={doctorProfileData.address.line2}
                  />
                ) : (
                  doctorProfileData.address?.line2
                )}
              </p>
            </div>
            <div className="flex gap-1 pt-2">
              <input
                onChange={() =>
                  isEdit &&
                  setDoctorProfileData((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
                checked={doctorProfileData.available}
                type="checkbox"
                name=""
                id=""
              />
              <label htmlFor="">Available</label>
            </div>
            {isEdit ? (
              <button
                onClick={updateDocProfileData}
                className="px-4 py-1 mt-5 text-sm transition-all border-2 rounded-full bg-blue-1 border-blue-4 hover:bg-blue-5 hover:text-blue-1"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="px-4 py-1 mt-5 text-sm transition-all border-2 rounded-full bg-blue-1 border-blue-4 hover:bg-blue-5 hover:text-blue-1"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
