
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Service from './service';


const Home = () => {
   const services=useLoaderData ();
   console.log(services);
    return (
        <div>
            <div>
            <Banner></Banner>
            </div>
            <div   className='lg:mt-72 mt-14 md:mt-28 flex lg:gap-4 md:gap-4 justify-center'>
                <span  className='lg:text-4xl md:text-4xl text-center font-semibold text-yellow-400'>Hello!</span>  <h1  className='lg:text-3xl md:text-3xl  font-semibold'> We Are an Event Planning Agency</h1>
              </div>
              <div className='mt-6'>
              <h1  className='lg:text-base md:text-base text-sm text-[#0B0B0BB2] text-center max-w-5xl mx-auto font-semibold'> As the premier event planning company in New York City, we know that it's not "one size fits all". Each event and client is unique and we believe our services should be as well. We know that it should be "Can I hire a planner?" not "Can I afford one?".</h1>
         
              </div>
              <Service></Service>

           
            
        </div>

    );
};

export default Home;