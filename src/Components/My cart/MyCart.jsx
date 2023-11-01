import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContest/AuthProvider";


const MyCart = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email)

    const [cartloaderData, setcartLoaderData] = useState([])
    let totalPrice = 0;
    cartloaderData.forEach((item)=>{
        const itemprice = parseFloat(item.price);
        if(!isNaN(itemprice)){
            totalPrice+=itemprice
        }
    })
    console.log(totalPrice)
    console.log(cartloaderData[0].price)

    const url = `http://localhost:5000/cart?email=${user?.email}`
    
    // useEffect(()=>{
    //     fetch(url, {credentials: 'include'})
    //     .then(res=>res.json())
    //     .then(data=>)
    // },[url])

    useEffect(()=>{
        axios.get(url, {withCredentials: true})
        .then(data=>setcartLoaderData(data.data))
    }, [url])
    console.log(cartloaderData)

    const handleDelete = (id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: 'DELETE'
                    
                })
                .then(res=>res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = cartloaderData.filter(prod => prod._id !== id);
                        setcartLoaderData(remaining);
                    }
                })
              
            }
          })
    }
    return (
        <div className="mt-16 mx-[10%]">
            <h1 className="text-[#343434] text-4xl font-bold text-center pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Your Cart Items</h1>

            <div>

                <div className="overflow-x-auto mt-16">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-[#343434] text-xl font-semibold">Delete</th>
                                <th className="text-[#343434] text-xl font-semibold">Product Details</th>
                                <th className="text-[#343434] text-xl font-semibold">Quantity</th>
                                <th className="text-[#343434] text-xl font-semibold">Price</th>
                                <th className="text-[#343434] text-xl font-semibold">Total</th>
                                <th className="text-[#343434] text-xl font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cartloaderData?.map(item=><tr key={item._id}>
                                    <th>
                                        <IconButton  aria-label="delete">
                                            <DeleteIcon onClick={() => handleDelete(item._id)} className="text-black" />
                                        </IconButton>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-[7.5rem] w-[10rem]">
                                                    <img className="h-[7.5rem] w-[10rem]" src="https://i.ibb.co/12rmvLm/Image.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-2xl text-[#343434]">Hart Hagerty</div>
                                                <div className="text-sm opacity-50 text-[#343434]">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-xl text-[#343434]">10</td>
                                    <td className="text-xl text-[#343434]">$ 999</td>
                                    <td className="text-xl text-[#343434]">$ {item.price}</td>
                                    
                                    <th>
                                        <Link><button className="btn btn-ghost btn-xs text-xl text-green-700 ">details</button></Link>
                                    </th>
                                </tr>)
                            }
                            



                        </tbody>


                    </table>
                </div>

                

            </div>

            <div className="bg-[#F0F5F0] w-full h-[40vh] pr-20 mt-16">

                <div className="w-[30rem] bg-[#F0F5F0] float-right">
                    <div className="flex justify-between items-center">
                        <p className="text-[#343434] text-xl">Subtotal</p>
                        <p className="text-[#343434] text-xl">$ {totalPrice}</p>
                    </div>

                    <div className="flex mt-6 mb-6 justify-between items-center">
                        <p className="text-[#343434] text-xl">Shipping</p>
                        <p className="text-[#343434] text-xl">$ 10.00</p>
                    </div>

                    <hr />

                    <div className="flex mt-6 justify-between items-center">
                        <p className="text-[#343434] text-xl font-bold">Total</p>
                        <p className="text-[#343434] text-xl font-bold ">$ {totalPrice+10}</p>
                    </div>

                </div>


                </div>

            

        </div>
    );
};

export default MyCart;