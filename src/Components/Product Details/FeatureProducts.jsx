import { useEffect, useState } from "react";
import discount from "../../assets/images/discount.svg"
import { Link } from "react-router-dom";

const FeatureProducts = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/plants')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
     
    return (
        <div className="mt-12 md:mt-28 mx-[5%] md:mx-[10%]">
             <h1 className="text-[#343434] text-xl md:text-4xl font-bold text-center pb-2 md:pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">You May Also Like...</h1>

             <div className="grid grid-cols-2 md:grid-cols-2 mt-8 justify-items-center items-center gap-8 lg:grid-cols-3 xl:grid-cols-5">

{
    product?.filter(item => item?.hotsale === 'hotsale').slice(0, 5).map(item => <div key={item._id} className="w-[40vw] md:w-[18rem] px-5 pt-5 pb-4 md:h-[24rem] rounded-2xl bg-white">
        <div className="relative">
            <img className="h-[100px] md:h-[12rem] w-[16rem] rounded-xl mx-auto" src={item?.photo} alt="" />
            <div className="absolute top-0 md:top-2 right-1 md:right-4">

                <div className="relative">
                    <img src={discount} alt="" />
                    <h2 className="text-white text-[0.75rem] font-semibold absolute top-3 left-4">25%<br />Off</h2>
                </div>


            </div>
        </div>

        <h1 className="text-[#343434] font-semibold mt-3 text-xs md:text-xl">{item?.name}</h1>
        <div className="flex gap-2 items-center">
            <h1 className="text-[#343434] text-xs md:text-xl">$ {item?.price}</h1>
            <h1 className="text-[#D11F1F] text-xs md:text-xl">$ <del>{item?.price}</del></h1>
        </div>


        <Link  to={`/productdetails/${item._id}`}><button className="capitalize h-8 md:h-14 w-full bg-[#3B823E] px-5 text-white font-semibold md:text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>


    </div>)
}
</div>
            
        </div>
    );
};

export default FeatureProducts;