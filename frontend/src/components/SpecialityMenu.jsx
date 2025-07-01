import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-blue-5"
    >
      <h1 className="text-3xl font-bold">Fined by Specialty</h1>
      <p className="text-lg text-center sm:W-1/3">
        Simply browse our extensive list of trusted doctors and schedule your
        appointment hassle-free.
      </p>
      <div className="flex w-full gap-5 overflow-scroll sm:justify-center">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img className="w-16 mb-2 sm:w-24" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
