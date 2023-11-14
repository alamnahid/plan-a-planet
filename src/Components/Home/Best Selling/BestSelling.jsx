import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const BestSelling = () => {
    const [bestselling, setBestSelling] = useState([])
    useEffect(() => {
        fetch('planttypes.json')
            .then(res => res.json())
            .then(data => setBestSelling(data))
    }, [])

    useEffect(() => {
        // Initialize AOS
        AOS.init();
    }, []);
    return (
        <div className="mt-8 md:mt-24">

            <h1 className="text-[#343434] text-xl md:text-4xl font-bold text-center pb-2 md:pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Best Selling</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-[5rem] md:mt-[6rem] lg:mt-[15rem] justify-items-center items-center gap-20 md:gap-12 lg:gap-8 xl:grid-cols-3 mx-[5%] lg:mx-[10%] ">

                {
                    bestselling?.map(sell => <div key={sell.id} data-aos="fade-up" data-aos-delay="200" className="w-full lg:w-[26rem] relative rounded-bl-[6rem] px-5 pt-5 pb-4 h-[14rem]  bg-[#e7f5de] ">
                    <img className="w-[12rem] lg:w-[17rem] h-[17rem] lg:h-[24rem] absolute bottom-10 -left-8" src={sell.image} alt="" />
    
                    <h1 className="text-2xl font-bold text-right pr-1 pt-4">{sell.name}</h1>
    
                    <div className="absolute right-4 mt-8">
                    
                    <Link to={`/categorieshop/${sell.name}`}><button type="button" className="text-gray-900 font-semibold w-[10rem] h-14 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-xl text-lg px-5 py-2.5 text-center me-2 mb-2">Shop Now</button></Link>
                      
                    </div>
                </div> )
                }
            </div>


            <div>

            </div>

        </div>
    );
};

export default BestSelling;


{/* <div data-aos="fade-up" data-aos-delay="200" key={sell.id} className="w-[22rem] px-5 pt-5 pb-4 h-[25rem] rounded-2xl bg-white">
                        <img src={sell.image} alt="" />

                        <Link to={`/categorieshop/${sell.name}`}><button className="capitalize h-14 w-full bg-[#3B823E] md:px-5 text-white font-semibold md:text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>


                    </div> */}