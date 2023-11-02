import { Link, NavLink } from "react-router-dom";
// import cart from "../../../assets/icon/cart.svg"
import logo from "../../../assets/logo/logo.png"
// import { IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { AuthContext } from "../../AuthContest/AuthProvider";
// import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext) 
    const handdleLogout = ()=>{
        logOut()
        .then()
        .catch()
      }
      


    return (
        <div>
            <div className="w-full h-10 px-2 lg:px-0 bg-[#01370C] relative">

                <h1 className="text-white text-[0.7rem] lg:text-[0.9rem] lg:text-center pt-2">Use code FIRST50 for a 50% discount on your first order!</h1>

                {/* <img className="float-right cursor-pointer absolute right-52 top-2" src={cart} alt="" /> */}
                <Link to="/cart"><AddShoppingCartIcon className="float-right cursor-pointer absolute right-20 lg:right-32 top-2" /></Link>


                

            </div>

            <div className="navbar lg:px-[7rem] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            <li><NavLink className="text-[#343434] font-semibold text-lg" to='/'>Home</NavLink></li>
                            <li><NavLink className="text-[#343434] font-semibold text-lg" to='/about'>Home</NavLink></li>
                            <li><NavLink className="text-[#343434] font-semibold text-lg" to='/contact'>Home</NavLink></li>

                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/'>Home</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/shop'>Shop</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/about'>About</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/cart'>My Cart</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/dashboard/dashboardhome'>Dashboard</NavLink></li>
                        <li><NavLink className="text-[#343434] font-semibold text-base" to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-5 items-center">
                        {
                            user? <Link onClick={handdleLogout} to='/login'><h4 className="text-green-900 font-bold text-lg hover:underline cursor-pointer">Log out</h4></Link>
                            :
                            <Link to='/login'><h4 className="text-green-900 font-bold text-lg hover:underline cursor-pointer">Login</h4></Link>
                        }

                        <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className=" w-[2rem] rounded-full">
                            {
                                user?.photoURL && <img className="w-[2rem]" src={user.photoURL} />
                            }
                            
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>My Cart</a></li>
                    </ul>
                </div>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;