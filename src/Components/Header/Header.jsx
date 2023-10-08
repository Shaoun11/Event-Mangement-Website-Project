import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBeer, FaFacebook, FaFontAwesomeLogoFull, FaSign } from 'react-icons/fa';
const Header = () => {
    const link=<>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/testimonial"}>Testimonial</NavLink></li>
      <li><NavLink to={"/about"}>About</NavLink></li>
      <li><NavLink to={"/contact"}>Contact</NavLink></li>

    </>
      
    
    return (
        <div className="navbar bg-gray-100 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {link}
      </ul>
    </div>
    
    <img className='lg:w-32 md:w-28 w-20' src="https://i.ibb.co/421XvGG/nica-dark.png" alt="" />
    <a className="text-gray-600 normal-case font-bold mt-5 ml-1 md:ml-3 lg:ml-3 lg:text-sm md:text-sm text-[10px] ">Event Agency</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end">
   <Link to={"/login"}><button className="btn btn-warning bg-red-400 border-none text-white p-2 px-6">Log In</button></Link> 
  </div>
</div>
    );
};

export default Header;