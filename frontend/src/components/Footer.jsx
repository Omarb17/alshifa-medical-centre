import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className=" w-72" src={assets.AlShifaMedicalCenterLogo} alt="" />
          <p className="w-full font-medium leading-7 md:w-2/3 text-blue-6">
            Al Shifa Medical Center allows you to find the doctor in different
            specialties that suits you and book an appointment with them
            directly online. Al Shifa Medical Center provides you with reliable
            information on doctors in your area and saves you time.
          </p>
        </div>
        <div className="text-blue-6">
          <p className="mb-5 text-2xl font-black ">Business</p>
          <ul className="flex flex-col gap-2 font-medium ">
            <li>Home</li>
            <li>About Us</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="text-blue-6">
          <p className="mb-5 text-2xl font-black ">Contact</p>
          <ul className="flex flex-col gap-2 ">
            <li>+212 06 12 34 56 78</li>
            <li>alshifamedicalcenterl@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="h-1 bg-blue-1" />
        <p className="py-5 text-sm text-center">
          © Copyright AlShifaMedicalCentre.com 2025 - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
