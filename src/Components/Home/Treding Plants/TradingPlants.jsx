import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const TradingPlants = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://plan-a-plant-server.vercel.app/plants')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);
    return (
        <div className="mt-28">
            <h1 className="text-[#343434] text-xl md:text-4xl font-bold text-center pb-2 md:pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Trending Plants</h1>


            <div className="grid grid-cols-2 md:grid-cols-2 mt-8 justify-items-center items-center gap-8 lg:grid-cols-3 xl:grid-cols-5 mx-[10%]">

                {
                    product?.filter(item=>item.hotsale!=='hotsale').slice(0, 10).map(item => <div data-aos="fade-down" data-aos-delay="200" key={item._id} className="w-[40vw] md:w-[18rem] px-5 pt-5 pb-4 md:h-[24rem] rounded-2xl bg-[#e7f5de] group">
                        <img className="h-[100px] md:h-[12rem] w-[35vw] md:w-[16rem] rounded-xl mx-auto group-hover:scale-110 transition" src={item?.photo} alt="" />

                        <h1 className="text-[#343434] font-semibold mt-3  text-xs md:text-lg">{item?.name}</h1>
                        <h1 className="text-[#343434] text-lg md:text-xl">$ {item?.price}</h1>


                        <Link to={`/productdetails/${item._id}`}><button className="capitalize h-12 md:h-14 w-full md:px-5 font-semibold text-xs md:text-lg rounded-lg mt-4  
                        bg-gradient-to-r from-teal-200 to-lime-100 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700">Shop Now</button></Link>

                    </div>)
                }
            </div>

            <div className="text-center mt-12">
                <Link to={`/shop`}><button className="capitalize h-10 md:h-14 w-[18rem] lg:w-[25rem]  px-5 text-black font-semibold text-xl rounded-lg mt-4 bg-gradient-to-r from-teal-200 to-lime-100 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700">Shop All</button></Link>
            </div>

        </div>
    );
};

export default TradingPlants;