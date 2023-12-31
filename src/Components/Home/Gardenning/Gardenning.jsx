import { Link } from "react-router-dom";
import gardenning from "../../../assets/images/gardenning.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Gardenning = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);
    return (
        <div className="mt-28 mx-[10%] flex-col-reverse lg:flex-row flex justify-between items-center gap-8">
            <div data-aos="fade-up" data-aos-delay="200">
                <h1 className="text-[#343434] text-[2rem] lg:text-[3rem] font-bold">Landscape Gardening</h1>
                <p className=" lg:w-[40vw] mt-4 text-[#343434] text-base lg:text-[1.5rem] ">Whether it is growing your own food or setting up your roof-top garden, we provide the highest quality landscaping services, contributing to a greener world and substantial living! Schedule your service appointment today! <br /> <br />
                <span className="text-[#D11F1F] font-normal">*Service only available in Telangana and AndhraPradesh.</span></p>

                <Link to="/shop"><button className="capitalize h-12 md:h-16 w-[18rem] bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-8 hover:bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700 hover:text-black">Shop Now</button></Link>
            </div>
            <div data-aos="fade-down" data-aos-delay="200">
                <img src={gardenning} alt="" />
            </div>
            
        </div>
    );
};

export default Gardenning;