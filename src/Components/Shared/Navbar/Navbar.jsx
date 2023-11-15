import { Link, NavLink } from "react-router-dom";
// import cart from "../../../assets/icon/cart.svg"
import logo from "../../../assets/logo/logo.png"
// import { IconButton } from "@mui/material";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContest/AuthProvider";
// import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext) 
    const [open, setOpen] = useState(false)
    const handdleLogout = ()=>{
        logOut()
        .then()
        .catch()
      }
      


    return (
        <div className="">

            <div className="navbar lg:px-[7rem] fixed z-50 bg-[#FAFFF8] shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} onClick={()=>setOpen(!open)} className="btn btn-ghost text-black lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu ${open ? '' : 'hidden'} bg-[#FAFFF8] menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52`}>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/'>Home</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/shop'>Shop</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/about'>About</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/cart'>My Cart</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/dashboard/dashboardhome'>Dashboard</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/contact'>Contact</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/blogs'>Blogs</NavLink></li>

                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                {/* className={({ isActive, isPending }) =>isActive? "bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-xl": isPending? "text-[#343434] font-semibold text-base": ""
                    } */}
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className={({ isActive, isPending }) =>isActive? "bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-xl text-black text-lg font-medium": isPending? "text-[#343434] font-semibold text-xl": "text-lg font-medium"
                    } to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) =>isActive? "bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-xl text-black text-lg font-medium": isPending? "text-[#343434] font-semibold text-xl": "text-lg font-medium"
                    } to='/shop'>Shop</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) =>isActive? "bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-xl text-black text-lg font-medium": isPending? "text-[#343434] font-semibold text-xl": "text-lg font-medium"
                    } to='/about'>About</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) =>isActive? "bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-xl text-black text-lg font-medium": isPending? "text-[#343434] font-semibold text-xl": "text-lg font-medium"
                    } to='/cart'>My Cart</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) =>isActive? "bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-xl text-black text-lg font-medium": isPending? "text-[#343434] font-semibold text-xl": "text-lg font-medium"
                    } to='/dashboard/dashboardhome'>Dashboard</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) =>isActive? "bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-xl text-black text-lg font-medium": isPending? "text-[#343434] font-semibold text-xl": "text-lg font-medium"
                    } to='/contact'>Contact</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) =>isActive? "bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-xl text-black text-lg font-medium": isPending? "text-[#343434] font-semibold text-xl": "text-lg font-medium"
                    } to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-5 items-center">
                        {
                            user? <Link onClick={handdleLogout} to='/login'><h4 className="text-green-900 hidden md:block font-bold text-lg hover:underline cursor-pointer">Log out</h4></Link>
                            :
                            <Link to='/login'><h4 className="text-green-900 font-bold text-lg hover:underline cursor-pointer">Login</h4></Link>
                        }

                        {
                            user && <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div onClick={()=>setOpen(!open)} className=" w-[2rem] rounded-full">
                                    {
                                        user?.photoURL ? <img className="w-[2rem]" src={user.photoURL} />
                                        :
                                        <img className="w-[150px] h-[150px] rounded-[50%]" src="https://i.ibb.co/HxyJjpB/png-transparent-male-man-person-business-avatar-icon.png"></img>
                                    }
                                    
                                </div>
                            </label>
                            <ul tabIndex={0} className={`mt-3 ${open?'':'hidden'} z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#FAFFF8] rounded-box w-52`}>
                                
                                
                                <li><NavLink className="text-[#343434] font-semibold text-base" to='/invoice'>My Invoice</NavLink></li>
                                <li className="block md:hidden">{
                                    user ? <Link onClick={handdleLogout} to='/login'><h4 className="text-green-900 md:block font-bold text-lg hover:underline cursor-pointer">Log out</h4></Link>
                                    :
                                    <Link to='/login'><h4 className="text-green-900 font-bold text-lg hover:underline cursor-pointer">Login</h4></Link>
                                    }</li>
                            </ul>
                        </div>
                        }
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;