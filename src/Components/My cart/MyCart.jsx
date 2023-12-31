import { IconButton, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContest/AuthProvider";
import moment from "moment/moment";


const MyCart = () => {
    const { user } = useContext(AuthContext);
    const time = moment().format('MMMM Do YYYY, h:mm');
    // console.log(user)
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [itemname, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState(0)
    const [quantityofitem, setQuantity] = useState(0)
    const [itemtotalprice, setitemtotalprice] = useState(0)



    const [cartloaderData, setcartLoaderData] = useState([])
    let totalPrice = 0;
    cartloaderData.forEach((item) => {
        const itemprice = parseFloat(item?.price);
        const itemquantity = parseFloat(item.quantity)
        if (!isNaN(itemprice)) {
            totalPrice += itemprice * itemquantity
        }
        
    })
    // console.log(totalPrice)

    useEffect(()=>{
        
    setItemName(cartloaderData.map(item=>item.name))
    setItemPrice(cartloaderData.map(item=>item.price))
    setQuantity(cartloaderData.map(item=>item.quantity))
    setitemtotalprice(cartloaderData.map(item=>item.price*item.quantity))
    }, [cartloaderData])
    
    // console.log(cartloaderData)
    // console.log(itemname)
    // console.log(itemPrice)
    // console.log(quantityofitem)
  

    const url = `https://plan-a-plant-server.vercel.app/cart?email=${user?.email}`



    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(data => setcartLoaderData(data.data))
    }, [url])
    // console.log(cartloaderData)

    const handleDelete = (id) => {

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

                fetch(`https://plan-a-plant-server.vercel.app/cart/${id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
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

    const handleSubmit = e=>{
        e.preventDefault()
        const form = e.target;

        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const address = e.target.address.value;
        const itemnames = itemname;
        const itemprices = itemPrice;
        const quantity = quantityofitem;
        const subtotal = totalPrice;
        const totalprice = totalPrice+10;
        const issuetime = time;
        const itemtotalpric=itemtotalprice;


        const orderInfo = {name, email, number, address, itemnames, itemprices, subtotal, totalprice, quantity, issuetime, itemtotalpric}

        fetch('https://plan-a-plant-server.vercel.app/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Order Placed Successfully Thank You for purchase',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                      form.reset();
                      navigate('/invoice')
                      
                }
            })

    }
    return (
        <div className="pt-32 mx-[10%]">
            <h1 className="text-[#343434] text-2xl md:text-4xl font-bold text-center pb-2 md:pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Your Cart Items</h1>

            <div>

                <div className="overflow-x-auto mt-16">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-[#343434] text-xs md:text-xl font-semibold">Delete</th>
                                <th className="text-[#343434] text-xs md:text-xl font-semibold">Product Details</th>
                                <th className="text-[#343434] text-xs md:text-xl font-semibold">Quantity</th>
                                <th className="text-[#343434] text-xs md:text-xl font-semibold">Product Price</th>
                                <th className="text-[#343434] text-xs md:text-xl font-semibold">Total</th>
                                <th className="text-[#343434] text-xs md:text-xl font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cartloaderData?.map(item => <tr key={item._id}>
                                    <th>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon onClick={() => handleDelete(item._id)} className="text-black" />
                                        </IconButton>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-[4rem] lg:h-[7.5rem] w-[3rem] lg:w-[10rem]">
                                                    <img className="h-[4rem] lg:h-[7.5rem]  w-[3rem] md:w-[10rem]" src={item?.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-xs md:text-2xl text-[#343434]">{item?.name}</div>
                                                <div className="text-xs md:text-sm opacity-50 text-[#343434]">{item?.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-xs md:text-xl text-[#343434]">{item?.quantity}</td>
                                    <td className="text-xs md:text-xl text-[#343434]">$ {item?.price}</td>
                                    <td className="text-xs md:text-xl text-[#343434]">$ {item?.price * item?.quantity}</td>

                                    
                                </tr>)
                            }




                        </tbody>


                    </table>
                </div>



            </div>

            <div className="bg-[#FAFFF8] w-full h-[20vh] md:pr-20 mt-16">

                <div className="w-[20rem] md:w-[30rem] bg-[#FAFFF8] float-right">
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
                        <p className="text-[#343434] text-xl font-bold ">$ {totalPrice + 10}</p>
                    </div>

                </div>


            </div>

            <form className="w-full h-[65vh] pb-20" onSubmit={handleSubmit}>
                <div className="w-[20rem] md:w-[35rem] md:pr-8 float-right">

                    <h1 className="mt-6 text-[#343434] text-2xl font-bold">Billing Details</h1>

                    <div>

                        <div className=" mt-9">
                            <TextField id="outlined-basic" name="name" className="w-full" label="Your Name" variant="outlined" required defaultValue={user?.displayName} />
                        </div>

                        <div className="">

                            <div className=" mt-9">
                                <TextField id="outlined-basic" type="email" name="email" className="w-full" label="Your Email" variant="outlined" required defaultValue={user?.email}/>
                            </div>

                            <div className=" mt-9">
                                <TextField id="outlined-basic" className="w-full" name="number" label="Your Phone Number" variant="outlined" required />
                            </div>

                            

                            <div className="mt-9">
                                <TextField className="w-full"
                                    id="outlined-multiline-static"
                                    label="Your Addess"
                                    multiline
                                    rows={4}
                                    required
                                    name="address"

                                />
                            </div>
                        </div>


                        <button className="capitalize h-14 w-full bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Place Order</button>
                        
                    </div>
                </div>
            </form>


        </div>
    );
};

export default MyCart;