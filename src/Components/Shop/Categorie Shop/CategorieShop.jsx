import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ShopBanner from "../ShopBanner";


const CategorieShop = () => {
    const plantsloaderData = useLoaderData();
    const [showData, setShowData] = useState(plantsloaderData.slice(0, 10))
    const { name } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    // console.log(name.toLowerCase())
    // console.log(plantsloaderData)
    // console.log(plantsloaderData[4].category.toLowerCase())

    useEffect(() => {
        const filterbycategorie = plantsloaderData.filter(plants => plants.category.toLowerCase() === name.toLowerCase())
        setShowData(filterbycategorie)
    }, [name, plantsloaderData])


    return (
        <div className="pt-20">

            <ShopBanner></ShopBanner>

            <div className="flex flex-col lg:flex-row justify-center md:pr-24">


                <div>
                    {
                         (showData.length === 0) ? <div className=" mt-14 text-black flex flex-col justify-center items-center text-center">
                         <p className="text-2xl md:text-4xl font-bold">Product will be adding soon <span className="loading loading-ball loading-lg"></span></p>
     
                         <p className="mt-6 text-lg">Thank you for stay with us</p>
     
                         <h1 className="text-xl font-bold mt-8">You can browse more product</h1>
     
                         
                     </div>
                     :

                    <div className="md:ml-24 mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center gap-6">


                        {
                            showData?.map(plant => <div key={plant._id} className="w-[40vw] md:w-[18rem] px-5 pt-5 pb-4  md:h-[24rem] rounded-2xl bg-white">
                                <img  className="md:w-[15.1rem] h-[100px] md:h-[11rem] rounded-md" src={plant?.photo} alt="" />

                                <h1 className="text-[#343434] font-semibold mt-3 text-xs md:text-lg">{plant?.name}</h1>
                                <h1 className="text-[#343434] text-xs  md:text-xl">$ {plant?.price}</h1>
                                <Link to={`/productdetails/${plant._id}`}><button className="capitalizeh-8 h-8 md:h-16 w-full bg-[#3B823E] md:px-5 text-white font-semibold text-xs  md:text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>
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