import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    // const plantData = useLoaderData()
    const [plantData, setShowData] = useState([])
    const [search, setSearch] = useState('')

    const handleSearch = (e)=>{
        e.preventDefault();
         const search = e.target.search.value;
        //  console.log(typeof(search))

         setSearch(search)
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/plants?search=${search.toString()}`)
        .then(res=>res.json())
        .then(data=>setShowData(data))
    }, [search])


    // console.log(plantData)
    return (
        <div className="">
            <h1 className="text-3xl text-center text-black font-semibold mt-16">Total {plantData.length} Product</h1>

            <form onSubmit={handleSearch} className="flex mt-6">
                            <input type="text" name="search" placeholder="Search Here" className="input input-bordered input-success w-full rounded-r-none max-w-xs bg-white" />
                            
                            <input className="btn rounded-l-none  btn-success text-black capitalize text-lg" type="submit" value="search" />
                            </form>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-16">
                {
                    plantData?.map(item=><div key={item._id} className="flex flex-col text-black lg:flex-row border-2 border-gray-400 p-4 items-center gap-12">
                    <img className="w-[40vw] lg:w-[20vw] h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]" src={item.photo} alt="" />

                    <div className="pr-8">
                        <h1 className="text-xl font-medium ">{item.name}</h1>
                        <div className="w-[5rem] mt-4 h-[2rem] bg-[#063A88] rounded text-white flex justify-center items-center">⭐ {item.rating}</div>

                        <p className="text-2xl mt-3">${item.price}</p>

                        <ul className="space-y-3 mt-3">
                            
                            <li className=" list-none text-xl font-medium ">Type: <span className="">{item.producttype}</span></li>
                            {
                                item.hotsale && <li className=" list-none text-red-950 text-2xl font-medium ">Item: <span className="">{item.hotsale}</span></li>
                            }
                        </ul>

                        <div className="flex gap-6">
                        
                        <Link to={`/dashboard/updatesproduct/${item._id}`}><button className="btn btn-secondary mt-4 bg-[#3b823fcf] border-none w-[7rem] capitalize text-white text-lg">Update</button></Link>
                        </div>
                    </div>
                </div>)
                }
            </div>
            
        </div>
    );
};

export default UpdateProduct;