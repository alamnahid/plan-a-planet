import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ShopBanner from "./ShopBanner";


const Shop = () => {
    const plantsloaderData = useLoaderData();
    const [showData, setShowData] = useState(plantsloaderData.slice(0, 10))

    const [categorie, setCategorie] = useState([])
    const [semicategorie, setSemiCategorie] = useState([])
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('categorie.json')
            .then(res => res.json())
            .then(data => setSemiCategorie(data))
    }, [])
    console.log(plantsloaderData)


    useEffect(() => {
        fetch('planttypes.json')
            .then(res => res.json())
            .then(data => setCategorie(data))
    }, [])

    const handlesemicategoriClick = (name) => {
        // console.log(name.toLowerCase())
        // console.log(plantsloaderData[0].producttype.toLowerCase())
        const showsemicategoriwise = plantsloaderData.filter(plants => plants.producttype.toLowerCase() == name.toLowerCase())
        // console.log(showsemicategoriwise)
        setShowData(showsemicategoriwise)
    }

    const handleCategorieWise = (name) => {
        const showcategoriwise = plantsloaderData.filter(plants => plants.category.toLowerCase() == name.toLowerCase())
        setShowData(showcategoriwise)

    }
    const handleShowAll = () => {
        setShowData(plantsloaderData)

        setShowAll(true);
    };
    return (
        <div>
            <ShopBanner></ShopBanner>


            <div className="flex flex-col lg:flex-row justify-center pr-24">
                <div className="w-[15.5rem] h-fit p-6 border-2 border-[#E3E5E5] bg-[#F0F5F0] ml-24 mt-24">

                    <div className="btn-group btn-group-vertical w-full border-b-2 pb-5 rounded-xl border-[#3B823E]">
                        <button onClick={()=>setShowData(plantsloaderData)} className="btn btn-outline border-green-900 mt-4 w-full text-white font-semibold bg-[#3B823E]">All Categories</button>

                        {
                            semicategorie?.map(btn => <button onClick={() => handlesemicategoriClick(btn.name)} key={btn.id} className="btn btn-outline border-green-900 mt-4 w-full text-black font-semibold">{btn.name}</button>)
                        }
                        <div className="w-full h-[0.01rem] my-4 bg-black"></div>
                        {
                            categorie?.map(btn => <button onClick={() => handleCategorieWise(btn.name)} key={btn.id} className="btn btn-outline border-green-900 mt-4 w-full text-black font-semibold">{btn.name}</button>)
                        }

                    </div>
                </div>

                <div>
                    <div className="ml-24 mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-end items-center gap-6">


                        {
                            showData?.map(plant => <div key={plant._id} className="w-[18rem] px-5 pt-5 pb-4 h-[24rem] rounded-2xl bg-white">
                                <img className="h-[12rem] w-[16rem] rounded-xl mx-auto" src={plant?.photo} alt="" />

                                <h1 className="text-[#343434] font-semibold mt-3 text-xl">{plant?.name}</h1>
                                <h1 className="text-[#343434] text-xl">$ {plant?.price}</h1>
                                <Link to={`/productdetails/${plant._id}`}><button className="capitalize h-14 w-full bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>
                            </div>)
                        }


                    </div>
                    {!showAll && showData.length > 10 && (
                <div className="mx-auto text-center mt-16">
                    <button
                        onClick={handleShowAll}
                        className="capitalize h-16 w-full lg:w-[24rem] bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Show All</button>
                </div>
            )}
                </div>

            </div>

            

        </div>
    );
};

export default Shop;