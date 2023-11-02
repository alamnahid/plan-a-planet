import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ShopBanner from "../ShopBanner";


const CategorieShop = () => {
    const plantsloaderData = useLoaderData();
    const [showData, setShowData] = useState(plantsloaderData.slice(0, 10))
    const { name } = useParams()
    // console.log(name.toLowerCase())
    // console.log(plantsloaderData)
    // console.log(plantsloaderData[4].category.toLowerCase())

    useEffect(() => {
        const filterbycategorie = plantsloaderData.filter(plants => plants.category.toLowerCase() === name.toLowerCase())
        setShowData(filterbycategorie)
    }, [name, plantsloaderData])


    return (
        <div>

            <ShopBanner></ShopBanner>

            <div className="flex flex-col lg:flex-row justify-center pr-24">


                <div>
                    {
                         (showData.length === 0) ? <div className=" mt-14 text-black flex flex-col justify-center items-center">
                         <p className="text-4xl font-bold">Product will be adding soon <span className="loading loading-ball loading-lg"></span></p>
     
                         <p className="mt-6 text-lg">Thank you for stay with us</p>
     
                         <h1 className="text-xl font-bold mt-8">You can browse more product</h1>
     
                         
                     </div>
                     :

                    <div className="ml-24 mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-end items-center gap-6">


                        {
                            showData?.map(plant => <div key={plant._id} className="w-[18rem] px-5 pt-5 pb-4 h-[26rem] rounded-2xl bg-white">
                                <img  className="w-[15.1rem] h-[11rem] rounded-md" src={plant?.photo} alt="" />

                                <h1 className="text-[#343434] font-semibold mt-3 text-xl">{plant?.name}</h1>
                                <h1 className="text-[#343434] text-xl">$ {plant?.price}</h1>
                                <Link to={`/productdetails/${plant._id}`}><button className="capitalize h-16 w-full bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>
                            </div>)
                        }


                    </div>
                    }
                </div>

            </div>



        </div>
    );
};

export default CategorieShop;