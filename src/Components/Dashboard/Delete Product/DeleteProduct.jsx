import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const DeleteProduct = () => {
    const plantData = useLoaderData()
    const [plants, setPlants] = useState(plantData)
    console.log(plantData)
    const handleDeleteProduct = (id)=>{
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
                fetch(`http://localhost:5000/plants/${id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const remaining = plants?.filter(plant=>plant._id!==id)
                          setPlants(remaining)
                    }
                })
            




            }
          })

    }
    return (
        <div>
            <h1 className="text-3xl text-center text-black font-semibold mt-16">Total {plantData.length} Product</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                {
                    plants?.map(item => <div key={item._id} className="flex flex-col text-black lg:flex-row border-2 border-gray-400 p-4 items-center gap-12">
                        <img className="w-[40vw] lg:w-[20vw] h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]" src={item.photo} alt="" />

                        <div className="pr-8">
                            <h1 className="text-xl font-medium ">{item.name}</h1>
                            <div className="w-[5rem] mt-4 h-[2rem] bg-[#063A88] rounded text-white flex justify-center items-center">⭐ {item.rating}</div>

                            <p className="text-2xl mt-3">${item.price}</p>

                            <ul className="space-y-3 mt-3">

                                <li className=" list-none text-xl font-medium ">Type: <span className="">{item.producttype}</span></li>
                            </ul>

                            <div className="flex gap-6">

                            <button onClick={()=>handleDeleteProduct(item._id)} className="btn btn-secondary mt-4 bg-[#3b823fcf] border-none w-[7rem] capitalize text-white text-lg">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default DeleteProduct;