import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ShopBanner from "../ShopBanner";
import HotSale from "../../Home/Hot Sale/HotSale";


const SemiCategorieShop = () => {
    const plantsloaderData = useLoaderData();
    const [showData, setShowData] = useState(plantsloaderData)
    const { name } = useParams()
    // console.log(name.toLowerCase())
    // console.log(plantsloaderData)
    // console.log(plantsloaderData[4].producttype.toLowerCase())

    useEffect(() => {
        const filterbycategorie = plantsloaderData.filter(plants => plants.producttype.toLowerCase() === name.toLowerCase())
        setShowData(filterbycategorie)
    }, [name, plantsloaderData])


    // const [showAll, setShowAll] = useState(false);




    // const handleShowAll = () => {
    //     setShowData(plantsloaderData)

    //     setShowAll(true);
    // };
    return (
        <div className="pt-20">
            <ShopBanner></ShopBanner>


            <div className="flex flex-col lg:flex-row justify-center md:pr-24">


                <div>
                    {
                        (showData.length === 0) ? <div className=" mt-14 text-black flex flex-col justify-center text-center items-center">
                            <p className="text-2xl md:text-4xl font-bold">Product will be adding soon <span className="loading loading-ball loading-lg"></span></p>

                            <p className="mt-6 text-lg">Thank you for stay with us</p>

                            <h1 className="text-xl font-bold mt-8">You can browse more product</h1>


                        </div>
                            :

                            <div className="md:ml-24 mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center gap-6">


                                {
                                    showData?.map(plant => <div key={plant._id} className="w-[40vw] md:w-[18rem] px-5 pt-5 pb-4 md:h-[24rem] rounded-2xl bg-white">
                                        <img className="md:w-[15.1rem] h-[100px] md:h-[11rem] rounded-md" src={plant?.photo} alt="" />

                                        <h1 className="text-[#343434] font-semibold mt-3 text-xs md:text-lg">{plant?.name}</h1>
                                        <h1 className="text-[#343434] text-xs md:text-xl">$ {plant?.price}</h1>
                                        <Link to={`/productdetails/${plant._id}`}><button className="capitalize h-8 md:h-16 w-full bg-[#3B823E] px-5 text-white font-semibold md:text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>
                                    </div>)
                                }
                            </div>
                    }
                    {/* {!showAll && showData.length > 10 && (
                        <div className="mx-auto text-center mt-16">
                            <button
                                onClick={handleShowAll}
                                className="capitalize h-16 w-full lg:w-[24rem] bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Show All</button>
                        </div>
                    )} */}
                </div>

            </div>

                            <HotSale></HotSale>

        </div>
    );
};

export default SemiCategorieShop;