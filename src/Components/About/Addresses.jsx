import calendar from "../../assets/icon/date.svg"
import call from "../../assets/icon/call.svg"
import location from "../../assets/icon/location.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Addresses = () => {

    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);
    return (
       <div className="mx-[10%] mt-28">
         <div className="mt-32 w-full flex flex-col gap-16 p-8 lg:p-0 lg:gap-0 lg:flex-row justify-evenly items-center lg:h-[16rem] rounded-xl bg-black">
            <div className="flex items-center gap-4">
                <img src={calendar} alt="" />
                <div>
                    <p className="font-medium text-white">We are open monday-friday</p>
                    <h1 className="text-white font-bold text-2xl">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div  className="flex items-center gap-4">
                <img src={call} alt="" />
                <div>
                    <p className="font-medium text-white">Have a question?</p>
                    <h1 className="text-white font-bold text-2xl">+2546 251 2658 </h1>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <img src={location} alt="" />
                <div>
                    <p className="font-medium text-white">Need a repair? our address</p>
                    <h1 className="text-white font-bold text-2xl">Liza Street, New York </h1>
                </div>
            </div>
            
        </div>
       </div>
    );
};

export default Addresses;