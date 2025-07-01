import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col rounded-2xl md:flex-row bg-blue-7 md:px-10 lg:pl-20 lg:pr-0 lg:ml-0">
      <div className="md:w-1/2 flex flex-col items-start justify-center   md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl font-semibold leading-tight text-blue-1 md:text-4xl lg:text-6xl md:leading-tight lg:leading-tight">
          Make an appointment
          <br />
          With trusted doctors
        </p>
        <div className="flex flex-col items-center text-base font-light text-blue-1 md:flex-row ">
          <img className="w-32" src={assets.group_profiles} alt="" />
          <p>
            Simply browse our extensive list <br />
            from trusted doctors schedule your appointment hassle-free
          </p>
        </div>
        <a
          className="flex items-center gap-3 px-3 py-3 m-auto text-xl transition-all duration-300 rounded-full md:m-0 hover:scale-105 bg-blue-8 text-blue-1"
          href="#speciality"
        >
          Make an appointment
          <img className="w-6" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      <div className="flex items-end justify-end md:w-1/2">
        <img
          className="w-[600px] h-auto"
          src={assets.header_img}
          alt="Header"
        />
      </div>
    </div>
  );
};

export default Header;
