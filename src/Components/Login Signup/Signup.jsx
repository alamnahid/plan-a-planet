import facebook from "../../assets/icon/facebook.svg"
import linkedin from "../../assets/icon/linkedin.svg"
import google from "../../assets/icon/google.svg"

import TextField from '@mui/material/TextField';
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContest/AuthProvider";

const Signup = () => {
    const { createUser, googleSignIn, handleUpdateProfile, user } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                handleUpdateProfile(name)
                Swal.fire(
                    'Good job!',
                    'Successfully Logged In',
                    'success'
                )
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.log(error)
            })

        const userInfo = { name, email }
        fetch('https://plan-a-plant-server.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })


    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                navigate(location?.state ? location.state : '/')
                Swal.fire(
                    'Welcome!',
                    'Successfully Logged In',
                    'success'
                )
            })
            .catch(error => { console.log(error) })
    }

    const handleFacebookLogin = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Facebook Login Not available right now! Use google or email password',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    const handleLinkedinogin = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Facebook Login Not available right now! Use google or email password',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }





    return (
        <div>
            <div className="pt-20">

            </div>

            <div className="flex  flex-col-reverse lg:flex-row justify-center items-center md:my-20 gap-16 p-3 lg:p-0">
                <div>
                    <img className="rounded-xl" src="https://i.ibb.co/L8SG9vr/hr-Mdhw3fl-V.gif" alt="" />
                </div>
                <div className="w-full bg-white p-3 lg:p-0 lg:w-[38rem] h-[57.5rem] rounded-xl border-2 border-[#D0D0D0]">

                    <h1 className="text-[#444444] text-[2.5rem] font-semibold text-center mt-[4.6rem]">Sign Up</h1>

                    <form onSubmit={handleSignUp} className="mt-12">
                        <p className="mt-[2.1rem] text-[#444444] lg:ml-[4.69rem] text-lg font-semibold">Name</p>

                        <div className="rounded-2xl text-black mt-5 lg:mx-[4.69rem]">
                            <TextField className="w-full text-black lg:w-[28.8rem]   h-[3.75rem] rounded-2xl border-2 border-[#000000] outline-none placeholder:text-[#000000] pl-5 " id="outlined-basic" label="Your Name" name="name" variant="outlined" />

                        </div>

                        <p className="mt-[2.1rem] text-[#444444] lg:ml-[4.69rem] text-lg font-semibold">Email</p>

                        <div className="rounded-2xl text-black mt-5 lg:mx-[4.69rem]">
                            <TextField className="w-full text-black lg:w-[28.8rem]   h-[3.75rem] rounded-2xl border-2 border-[#000000] outline-none placeholder:text-[#000000] pl-5 " id="outlined-basic" label="Your Email" name="email" variant="outlined" type="email" required />

                        </div>

                        <p className="mt-[2.1rem] text-[#444444] lg:ml-[4.69rem] text-lg font-semibold">Password</p>

                        <div className="rounded-2xl text-black mt-5 lg:mx-[4.69rem]">
                            <TextField className="w-full text-black lg:w-[28.8rem]   h-[3.75rem] rounded-2xl border-2 border-[#000000] outline-none placeholder:text-[#000000] pl-5 " id="outlined-basic" label="Your Pasword" name="password" variant="outlined" type="password" required />

                        </div>



                        <input className="w-full lg:w-[28.8rem] mt-7 lg:mx-[4.69rem] h-[4rem] rounded-xl border-2 btn bg-[#3B823E] border-none hover:bg-white hover:text-black hover:border-2 hover:border-[#3B823E] text-white text-xl btn-secondary font-semibold capitalize " type="submit" value="Sign up" />

                        <p className="text-center text-[#444444] text-lg font-medium mt-7">Or Sign Up with</p>

                        <div className="flex gap-4 items-center justify-center mt-7">
                            <div onClick={handleFacebookLogin} className="w-[3.5rem] h-[3.5rem] cursor-pointer flex justify-center items-center bg-[#F5F5F8] rounded-[50%]">
                                <img src={facebook} alt="" />
                            </div>
                            <div onClick={handleLinkedinogin} className="w-[3.5rem] h-[3.5rem] cursor-pointer flex justify-center items-center bg-[#F5F5F8] rounded-[50%]">
                                <img src={linkedin} alt="" />
                            </div>
                            <div onClick={handleGoogleLogin} className="w-[3.5rem] cursor-pointer h-[3.5rem] flex justify-center items-center bg-[#F5F5F8] rounded-[50%]">
                                <img src={google} alt="" />
                            </div>
                        </div>

                        <p className="text-[#737373] text-center text-xl mt-12">Already have an account? <Link className="text-[#FF3811] font-semibold" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Signup;