import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContest/AuthProvider";


const DashboardMain = () => {
    const {user} = useContext(AuthContext)
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    // console.log(user)
    return (
        <div className="bg-[#F0F5F0]" >
            <Navbar></Navbar>
            <div className="drawer pt-28 bg-[#F0F5F0] lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle bg-[#F0F5F0]" />
                <div className="drawer-content bg-[#F0F5F0] flex flex-col items-center justify-center">
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary bg-green-800 border-none drawer-button lg:hidden">Open Dashboard</label>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side mt-20">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 min-h-full text-base-content rounded-xl bg-[#3b823fcf]">
                    <li><div className="flex flex-col gap-2 mb-5">
                        {
                            user?.photoURL ? 
                            <img className="w-[150px] h-[150px] rounded-[50%]" src={user?.photoURL} alt="" />
                            :
                            <img className="w-[150px] h-[150px] rounded-[50%]" src="https://i.ibb.co/HxyJjpB/png-transparent-male-man-person-business-avatar-icon.png"></img>
                        }

                        <h1 className="text-xl text-white font-bold">{user?.displayName}</h1>
                        
                        <h1 className="text-xs text-white font-bold">{user?.email}</h1>


                        
                        </div></li>
                        {/* Sidebar content here */}

                        <li><NavLink className="border-2 text-white font-bold hover:bg-gray-700" to='/dashboard/dashboardhome'>Dashboard Home</NavLink></li>
                        <li><NavLink className="border-2 text-white font-bold mt-4 hover:bg-gray-700" to='/dashboard/addproduct'>Add Product</NavLink></li>
                        <li><NavLink className="border-2 text-white font-bold mt-4 hover:bg-gray-700" to='/dashboard/hotsale'>Add Hot Sale Product</NavLink></li>
                        <li><NavLink className="border-2 text-white font-bold mt-4 hover:bg-gray-700" to='/dashboard/updateproduct'>Update Product</NavLink></li>
                        <li><NavLink className="border-2 text-white font-bold mt-4 hover:bg-gray-700" to='/dashboard/deleteproduct'>Delete Product</NavLink></li>
                       
                    </ul>

                </div>
            </div>

            

        </div>
    );
};

export default DashboardMain;