import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const BestSelling = () => {
    const [bestselling, setBestSelling] = useState([])
    useEffect(()=>{
        fetch('planttypes.json')
        .then(res=>res.json())
        .then(data=>setBestSelling(data))
    }, [])

    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);
    return (
        <div className="mt-8 md:mt-24">
            <h1 className="text-[#343434] text-xl md:text-4xl font-bold text-center pb-2 md:pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Best Selling</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 justify-items-center items-center gap-8 lg:grid-cols-3 lg:mx-[10%]">

                {
                    bestselling?.map(sell=><div data-aos="fade-up" data-aos-delay="200" key={sell.id} className="w-[22rem] px-5 pt-5 pb-4 h-[25rem] rounded-2xl bg-white">
                    <img src={sell.image} alt="" />

                    <Link to={`/categorieshop/${sell.name}`}><button className="capitalize h-14 w-full bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>


                </div>)
                }
            </div>
            

            <div>

            </div>
            
        </div>
    );
};

export default BestSelling;