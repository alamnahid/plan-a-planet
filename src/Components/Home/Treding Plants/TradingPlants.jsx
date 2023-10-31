import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TradingPlants = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/plants')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, [])
    return (
        <div className="mt-28">
            <h1 className="text-[#343434] text-5xl font-bold text-center pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Trending Plants</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 justify-items-center items-center gap-8 lg:grid-cols-3 xl:grid-cols-4 mx-[10%]">

                {
                    product?.map(item=><div key={item._id} className="w-[18rem] px-5 pt-5 pb-4 h-[24rem] rounded-2xl bg-white">
                    <img className="h-[12rem] w-[16rem] rounded-xl mx-auto" src={item?.photo} alt="" />

                    <h1 className="text-[#343434] font-semibold mt-3 text-xl">{item?.name}</h1>
                    <h1 className="text-[#343434] text-xl">$ {item?.price}</h1>


                    <Link to={`/productdetails/${item._id}`}><button className="capitalize h-14 w-full bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>


                </div>)
                }
            </div>

        </div>
    );
};

export default TradingPlants;