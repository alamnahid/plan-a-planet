
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProductDetailsAcordian from "./ProductDetailsAcordian";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContest/AuthProvider";
import FeatureProducts from "./FeatureProducts";



const ProductDetails = () => {
    const {user} = useContext(AuthContext)
    
    const [quantity, setQuantity] = useState(1);
    if (quantity < 0) {
        setQuantity(0)
    }

    const plantdata = useLoaderData();

    const {category, name, photo, price} = plantdata;
    const email = user?.email;
   
     const productInfo = {name, category, photo, price, quantity, email}

    // console.log(quantity)

    const handleaddToCart = ()=>{
        fetch('https://plan-a-plant-server.vercel.app/cart',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })

    }


    


    return (
        <div className="pt-36">

            <div className="flex mx-[10%] gap-16 justify-center items-center flex-col xl:flex-row">
                <div>
                    <img className="w-[400px] rounded-3xl" src={plantdata?.photo} alt="" />
                </div>

                <div className="">
                    <h1 className="text-xl md:text-[2rem] text-[#343434] font-bold">{plantdata?.name}</h1>
                    <div>
                        {
                            plantdata?.hotsale ? <div className="flex gap-3 items-center">
                                <p className="text-xl mt-4 md:text-[2rem] text-[#343434]">$ {plantdata?.price}</p>
                                <p className="text-xl mt-3 md:text-[2rem] text-[#ff0000]">$ <del>{plantdata?.price}</del></p>
                            </div>
                            :
                            <p className="text-xl mt-4 md:text-[2rem] text-[#343434]">$ {plantdata?.price}</p>
                        }
                    </div>
                    <p className="text-gray-500 mt-3 lg:w-[40rem] mb-7">{plantdata?.description}</p>

                    <div className="flex gap-3 justify-between items-center">

                        <div className="flex">
                            <p className="text-[#343434] lg:text-xl">Quantity</p>
                            <div style={{ borderRadius: "0.25rem", border: "2px solid #343434" }} className="w-[5.375rem] h-[2.25rem] flex justify-evenly items-center text-black text-xl ml-4">
                                <p onClick={() => setQuantity(quantity - 1)} className="cursor-pointer font-bold">-</p>
                                <p>{quantity}</p>
                                <p onClick={() => setQuantity(quantity + 1)} className="cursor-pointer font-bold">+</p>

                            </div>
                        </div>

                        <div className="flex md:gap-4 items-center">
                            <p className="text-[#343434] lg:text-xl w-[10rem]">Include Planter</p>
                            <select className="select w-full max-w-[6rem] bg-[#F0F5F0] text-black border-2 border-black text-xl h-[2.25rem]">
                                <option>Yes</option>
                                <option>No</option>

                            </select>
                        </div>
                    </div>
                    <Link><button onClick={handleaddToCart} className="capitalize h-16 w-full md:w-[22rem] bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-6 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Add to Cart</button></Link>
                </div>

            </div>


            <ProductDetailsAcordian></ProductDetailsAcordian>

            <FeatureProducts></FeatureProducts>
            

          



        </div>
    );
};

export default ProductDetails;