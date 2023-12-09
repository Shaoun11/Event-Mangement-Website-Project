import { Carousel } from 'flowbite';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    return (
     <div className=''>
            

           <div className=" max-w-7xl mx-auto  carousel w-full">
            
            <div id="slide1" className="carousel-item   relative w-full">
              <img 
               src="https://i.ibb.co/g95VFzY/image-6.jpg" className=" w-full h-[80vh]  " />
              
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
              
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/ySbSx67/image-8.jpg" className="w-full h-[80vh]" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/KbzNG4b/image-3.jpg" className="w-full h-[80vh]" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/kcZPpkS/image-1.jpg" className="w-full h-[80vh]" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
       
          </div>
        <div>
           
          <h1 data-aos="fade-right" className=' font-serif text-center -mt-[450px] md:-mt-[320px] lg:-mt-[500px] lg:text-7xl md:text-6xl text-5xl font-semibold text-yellow-400'>Your Event</h1>
                
                
            
                <p data-aos="fade-up" className='  font-serif  mt-4 text-center lg:text-6xl text-5xl font-semibold text-white'> Our  </p>
                <p data-aos="fade-up" className='font-serif  mt-6 text-center text-5xl font-bold text-white'>Passion</p>
          
                
                <p data-aos="zoom-in-right" className='  mt-2 text-center text-sm font-semibold text-gray-200'>Planning a Wedding, Proposal, or Event in our busy city is not so easy.<br/> and it takes skills (and time) to make it all look easy-going..</p>
          
             
               
        </div>
         
                
     </div>
    );
};

export default Banner;