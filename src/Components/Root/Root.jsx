import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className="bg-[#F0F5F0]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;