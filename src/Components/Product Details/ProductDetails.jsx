
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProductDetailsAcordian from "./ProductDetailsAcordian";



const ProductDetails = () => {
    const [quantity, setQuantity] = useState(0);
    if (quantity < 0) {
        setQuantity(0)
    }

    const plantdata = useLoaderData();
    console.log(plantdata)
    console.log(quantity)


    


    return (
        <div className="mt-16">

            <div className="flex mx-28  gap-16 justify-center items-center flex-col lg:flex-row">
                <div>
                    <img src={plantdata?.photo} alt="" />
                </div>

                <div>
                    <h1 className="text-[2rem] text-[#343434] font-bold">{plantdata?.name}</h1>
                    <p className="text-[2rem] text-[#343434]">$ {plantdata?.price}</p>
                    <p className="text-gray-500 w-[40rem] mb-7">{plantdata?.description}</p>

                    <div className="flex justify-between items-center">

                        <div className="flex">
                            <p className="text-[#343434] text-xl">Quantity</p>
                            <div style={{ borderRadius: "0.25rem", border: "2px solid #343434" }} className="w-[5.375rem] h-[2.25rem] flex justify-evenly items-center text-black text-xl ml-4">
                                <p onClick={() => setQuantity(quantity - 1)} className="cursor-pointer font-bold">-</p>
                                <p>{quantity}</p>
                                <p onClick={() => setQuantity(quantity + 1)} className="cursor-pointer font-bold">+</p>

                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <p className="text-[#343434] text-xl w-[10rem]">Include Planter</p>
                            <select className="select w-full max-w-[6rem] bg-[#F0F5F0] text-black border-2 border-black text-xl h-[2.25rem]">
                                <option>Yes</option>
                                <option>No</option>

                            </select>
                        </div>
                    </div>
                    <Link><button className="capitalize h-16 w-[22rem] bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-6 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Add to Cart</button></Link>
                </div>

            </div>


            <ProductDetailsAcordian></ProductDetailsAcordian>

          



        </div>
    );
};

export default ProductDetails;