import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BestSelling = () => {
    const [bestselling, setBestSelling] = useState([])
    useEffect(()=>{
        fetch('planttypes.json')
        .then(res=>res.json())
        .then(data=>setBestSelling(data))
    }, [])
    return (
        <div className="mt-28">
            <h1 className="text-[#343434] text-5xl font-bold text-center pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Best Selling</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 justify-items-center items-center gap-8 lg:grid-cols-3">

                {
                    bestselling?.map(sell=><div key={sell.id} className="w-[24rem] px-5 pt-5 pb-4 h-[27rem] rounded-2xl bg-white">
                    <img src={sell.image} alt="" />

                    <Link><button className="capitalize h-16 w-full bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>


                </div>)
                }
            </div>
            

            <div>

            </div>
            
        </div>
    );
};

export default BestSelling;