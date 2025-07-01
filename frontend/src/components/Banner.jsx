import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col flex-wrap rounded-2xl md:flex-row bg-blue-7 md:px-10 lg:px-36 ">
      <div className="md-w-1/2 flex flex-col items-start justify-center gap-5 py-16 md-py-[10vw] md:mb-[-30px]">
        <p className="flex-1 text-3xl font-medium leading-tight text-blue-1 md:text-4xl lg:text-3xl md:leading-tight ">
          Make an appointment
          <br />
          With more than 100 doctors <br /> of trust
        </p>

        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="flex items-center gap-3 px-5 py-3 m-auto mt-6 text-xl transition-all rounded-full lg:mb-12 md:m-0 hover:scale-105 duartion-300 bg-blue-8 text-blue-1 "
        >
          Create an account
        </button>
      </div>
      <div className="relative ml-auto md:w-1/2">
        <img
          className="absolute bottom-0 right-0 h-auto max-w-md p-0 w-[600px]"
          src={assets.banner1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
