import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBeer, FaFacebook, FaFontAwesomeLogoFull, FaSign } from 'react-icons/fa';
import { Authcontext } from '../AuthProvider/AuthProvider';
const Header = () => {
    const link=<>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/testimonial"}>Testimonial</NavLink></li>
      <li><NavLink to={"/about"}>About</NavLink></li>
      <li><NavLink to={"/contact"}>Contact</NavLink></li>

    </>
      
    const {user,logout}=useContext(Authcontext);
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
  <div className="flex gap-3 navbar-end">
    <p>{user?.displayName}</p>
    <div>
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        {user? <div className="w-14 rounded-full">
        
          <img src={user?.photoURL}/>
       
        </div>:<div className="w-14  rounded-full">
          <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
        </div>}
      </label>
    </div>
   <div>
    {
      user?<Link >  <button onClick={logout} className="btn btn-outline ">Log Out</button></Link> :
      <Link to={"/login"}>  <button className="btn btn-outline ">Log in</button></Link>
 
    }
  
   </div>

  </div>
</div>
    );
};

export default Header;