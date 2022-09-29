import React from "react";

import {
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16  ">
      <div className="max-w-[1240px] px-4 mx-auto flex flex-col">
        <div className="sm:flex text-center justify-between items-center">
          <h1 className="">BEACHES.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4 ">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>

        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertisement</li>
          </ul>

          <ul className="lg:flex">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
