import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAdminToken, backendUrl } = useContext(AdminContext);
  const { setDoctorToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("adminToken", data.token);
          setAdminToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("doctorToken", data.token);
          setDoctorToken(data.token);
          console.log(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {}
  };

  return (
    <>
      {/* <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div> */}
      <form
        onSubmit={onSubmitHandler}
        className="min-h-[80vh] flex items-center"
      >
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-blue-4 text-sm shadow-lg">
          <p className="m-auto text-2xl font-semibold">
            <span className="text-blue-6">{state}</span> Login
          </p>
          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-2 mt-1 border rounded border-blue-2"
              type="email"
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full p-2 mt-1 border rounded border-blue-2"
              type="password"
              required
            />
          </div>
          <button className="w-full py-2 text-base font-bold rounded-md bg-blue-7 text-blue-3">
            Login
          </button>
          {state === "Admin" ? (
            <p className="flex gap-1.5">
              Doctor Login?
              <span
                onClick={() => setState("Doctor")}
                className="underline cursor-pointer text-blue-7"
              >
                Click Here
              </span>
            </p>
          ) : (
            <p className="flex gap-1.5">
              Admin Login?
              <span
                onClick={() => setState("Admin")}
                className="underline cursor-pointer text-blue-7"
              >
                Click Here
              </span>
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default Login;
