import React from 'react';
import { FaBeer, FaCalendarMinus, FaRegEye, } from 'react-icons/fa';
import { BiTimeFive } from "react-icons/bi";
const Card = ({card}) => {
    const {id,title,details,img_url,rating,url,all_details,title_de}=card||{};
    return (
        <div className='max-w-7xl mx-auto '>
              <h1 className='text-3xl  font-semibold mt-4 mb-4'>{title_de}
                 </h1>
              
          
          <div>
          <img className='rounded-lg' src={url} alt="" />
          </div>
          <div className='flex justify-between'>
              <div className='lg:flex md:flex gap-3'>
              <p className='flex font-mono text-sm m-2 text-gray-500 '> <FaCalendarMinus className='mt-[2px]'></FaCalendarMinus>Published:07-03-2023
                 
                 </p>
                <p className='flex font-mono text-sm m-2 text-gray-500 '> <BiTimeFive className='mt-[4px]'></BiTimeFive> read time:{rating}minutes
                 
                 </p>
              </div>
                
                 <p className='font-mono flex ml-2 m-2 text-gray-500'>
                 <FaRegEye className='mt-1'></FaRegEye>{rating}M
                 </p>
                </div>
          <div>
          
            <p className='text-base text-[#0B0B0BB2] mt-5'>{all_details}</p>
          </div>
           </div>
    );
};

export default Card;