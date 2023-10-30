import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const DashboardMain = () => {
    return (
        <div className="bg-[#F0F5F0]" >
            <Navbar></Navbar>
            <div className="drawer bg-[#F0F5F0] lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle bg-[#F0F5F0]" />
                <div className="drawer-content bg-[#F0F5F0] flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>



                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 min-h-full text-base-content rounded-xl bg-[#3b823fcf]">
                        {/* Sidebar content here */}
                        <li><NavLink className="border-2 text-white font-bold hover:bg-gray-700" to='/dashboard'>Dashboard Home</NavLink></li>
                        <li><NavLink className="border-2 text-white font-bold mt-4 hover:bg-gray-700" to='/dashboard/addproduct'>Add Product</NavLink></li>
                        <li><NavLink className="border-2 text-white font-bold mt-4 hover:bg-gray-700" to='/dashboard/updateproduct'>Update Product</NavLink></li>
                       
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardMain;