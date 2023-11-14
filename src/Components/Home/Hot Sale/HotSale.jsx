import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import discount from "../../../assets/images/discount.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HotSale = () => {
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

    // style={{backgroundImage: "url('https://i.ibb.co/CJJhkHq/bg.png')"}}
    return (
        <div style={{backgroundImage: "url('https://i.ibb.co/CJJhkHq/bg.png')",
        backgroundRepeat: 'no-repeat', backgroundSize: '11rem'}}>
            <div className="mt-28 mx-[10%]">
            <h1 className="text-[#343434] text-4xl font-bold text-center pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Hot Sale</h1>

            <div className="grid grid-cols-2 md:grid-cols-2 mt-8 justify-items-center items-center gap-8 lg:grid-cols-3 xl:grid-cols-5">

                {
                    product?.filter(item => item?.hotsale === 'hotsale').slice(0, 10).map(item => <div data-aos="fade-down" data-aos-delay="200" key={item._id} className="w-[40vw] md:w-[18rem] px-5 pt-5 pb-4 md:h-[24rem] rounded-2xl bg-[#e7f5de] group">
                        <div className="relative">
                            <img className="h-[100px] md:h-[12rem] w-[16rem] rounded-xl mx-auto group-hover:scale-110 transition" src={item?.photo} alt="" />
                            <div className="absolute top-1 md:top-2 right-1 md:right-4">

                                <div className="relative w-[3.5rem] h-[3.5rem] rounded-[50%] bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700">
                                    
                                    <h2 className="text-black text-[0.75rem] font-bold absolute top-3 left-[1.2rem]">25%<br />Off</h2>
                                </div>


                            </div>
                        </div>

                        <h1 className="text-[#343434] font-semibold mt-3  text-xs md:text-xl">{item?.name}</h1>
                        <div className="flex gap-2 items-center">
                            <h1 className="text-[#343434] md:text-xl">$ {item?.price}</h1>
                            <h1 className="text-[#D11F1F]  md:text-xl">$ <del>{item?.price * 1.25}</del></h1>
                        </div>


                        <Link to={`/productdetails/${item._id}`}><button className="capitalize h-8 md:h-14 w-full bg-[#3B823E] md:px-5 text-white font-semibold text-xs md:text-xl rounded-lg mt-4 hover:bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700 hover:text-black">Shop Now</button></Link>


                    </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default HotSale;