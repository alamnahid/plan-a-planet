import { Link, useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const plantData = useLoaderData()
    console.log(plantData)
    return (
        <div>
            <h1>update producty</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    plantData?.map(item=><div key={item._id} className="flex flex-col text-black lg:flex-row border-2 border-gray-400 p-4 items-center gap-12">
                    <img className="w-[40vw] lg:w-[20vw]" src={item.photo} alt="" />

                    <div className="pr-8">
                        <h1 className="text-xl font-medium ">{item.name}</h1>
                        <div className="w-[5rem] mt-4 h-[2rem] bg-[#063A88] rounded text-white flex justify-center items-center">⭐ {item.rating}</div>

                        <p className="text-2xl mt-3">${item.price}</p>

                        <ul className="space-y-3 mt-3">
                            
                            <li className=" list-none text-xl font-medium ">Type: <span className="">{item.producttype}</span></li>
                        </ul>

                        <div className="flex gap-6">
                        
                        <Link to={`/dashboard/updatesproduct/${item._id}`}><button className="btn btn-secondary mt-4 bg-[#FF6951] border-none w-[7rem] capitalize text-white text-lg">Update</button></Link>
                        </div>
                    </div>
                </div>)
                }
            </div>
            
        </div>
    );
};

export default UpdateProduct;