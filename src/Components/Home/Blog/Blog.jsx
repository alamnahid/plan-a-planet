import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Blog = () => {

    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);

    return (
        <div className="mt-12 md:mt-24 mx-[10%]">
            <h1 className="text-[#343434] text-4xl font-bold text-center pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Blogs</h1>

            <div className="flex flex-col lg:flex-row justify-between gap-8  mt-12 md:mt-28">

                <div data-aos="fade-up" data-aos-delay="200" className="w-full h-[18rem] blogfirst flex flex-col justify-center items-center">
                    <h1 className="text-white text-center lg:text-2xl">8 Best <br />
                        Low Maintenance Plants <br />
                        For a Busy Home</h1>
                    <div className="text-center mt-6">
                        <Link to='/blogs'><button className="capitalize h-14 lg:w-[20vw] bg-[#3B823E] px-5 text-white font-semibold md:text-xl rounded-lg mt-4 hover:bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700 hover:text-black">Read Blog</button></Link>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="w-full h-[18rem] blogsecond flex flex-col justify-center items-center">
                    <h1 className="text-white text-center lg:text-2xl">Air <br />Purifying Plants <br />
                        You Should Take Home
                        Today</h1>
                    <div className="text-center mt-6">
                    <Link to='/blogs'><button className="capitalize h-14 lg:w-[20vw] bg-[#3B823E] px-5 text-white font-semibold md:text-xl rounded-lg mt-4 hover:bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700 hover:text-black">Read Blog</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;