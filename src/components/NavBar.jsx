import React, { useState } from "react";

import {BsPerson} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai";
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {FaFacebook,FaPinterest, FaTwitter, FaYoutube, FaInstagram} from "react-icons/fa"

const NavBar = () => {

    const [click,setClick]=useState(false);

    // dont like howo logo is seen behind dropdown
    const [logo,setLogo]=useState(false);

    const handleClick=()=>{
        setClick(!click);
        setLogo(!logo);
    }
  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">

      {/* 3 items for navbar, logo-navbar-loginIcons */}
      <div>
        <h1 onClick={handleClick} className={logo? "hidden":""}>BEACHES.</h1>
      </div>


        {/* main menu hidden--for mobile*/}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>View</li>
        </ul>

        <div className="hidden md:flex">
            <BiSearch className="mr-2" size={20}/>
            <BsPerson size={20}/>
        </div>


        {/* hamburger menu for mobile */}
        {/* needsz-index */}
        <div onClick={handleClick} className="block md:hidden z-10 ">
            {click?<AiOutlineClose className="text-black" size={20}/> :<HiOutlineMenuAlt4 size={20}/>}
        </div>

        {/* dropdown menu for mobile*/}
        <div onClick={handleClick} className={click? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col duration-300":"absolute left-[-100%] duration-300"}>
            
            <ul>
                <h1>BEACHES.</h1>
                <li className="border-b">Home</li>
                <li className="border-b">Destination</li>
                <li className="border-b">Travel</li>
                <li className="border-b">View</li>
            </ul>

            {/* Buttons */}
            {/* to stack them */}
            <div className="flex flex-col ">
                <button className="my-6">Search</button>
                <button>Account</button>
            </div>

            {/* social icons */}
            <div className="flex justify-between my-6">
                <FaFacebook className="icon"/>
                <FaTwitter className="icon"/>
                <FaInstagram className="icon"/>
                <FaYoutube className="icon"/>
                <FaPinterest className="icon"/>

            </div>  
        </div>



    </div>
  );
};

export default NavBar;
