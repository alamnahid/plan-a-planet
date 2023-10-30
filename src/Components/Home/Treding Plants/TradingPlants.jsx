import { Link } from "react-router-dom";


const TradingPlants = () => {
    return (
        <div className="mt-28">
            <h1 className="text-[#343434] text-5xl font-bold text-center pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Trending Plants</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 justify-items-center items-center gap-8 lg:grid-cols-3 xl:grid-cols-4">

            <div className="w-[18rem] px-5 pt-5 pb-4 h-[26rem] rounded-2xl bg-white">
                    <img src="https://i.ibb.co/J7B3Zgf/Frame-61-2.png" alt="" />

                    <h1 className="text-[#343434] font-semibold mt-3 text-xl">Nahid Alam</h1>
                    <h1 className="text-[#343434] text-xl">$ 350</h1>


                    <Link><button className="capitalize h-16 w-full bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>


                </div>
            </div>
            
        </div>
    );
};

export default TradingPlants;