// import cover from "../../../assets/images/coverhoma.jpg"
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const CoverHome = () => {
    return (
        <div className="pt-20 lg:h-[80vh] px-5 lg:px-0 flex flex-col-reverse lg:flex-row justify-evenly items-center">

            <div>
                <h1 className="text-2xl md:text-5xl font-bold md:leading-[4.5rem]">
                    We Love Helping You To
                </h1>

                <TypeAnimation
                    sequence={[
                        'To Safe The Earth',
                        1000,
                        'To Safe The Plants',
                        1000,
                        'To Safe The Earth',
                        1000,
                        'To Safe The Plants',
                        1000,
                    ]}
                    speed={50}
                    className='text-2xl md:text-5xl font-bold md:leading-[4.5rem] lg:w-[40rem]'
                    repeat={Infinity}
                /> <br />

               

                <p className="lg:w-[40rem] mt-5 text-gray-500">
                    Welcome to Plan-A-Plant, where green dreams take root! Our vibrant website cover encapsulates the essence of a thriving garden paradise.
                </p>

                <div className="flex items-center gap-3 mt-8">
                    <Link to="/shop"><button type="button" className="text-gray-900 font-semibold w-[10rem] h-14 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-xl text-base px-5 py-2.5 text-center me-2 mb-2">Shop Now</button></Link>

                    <Link to="/blogs"><button type="button" className="text-gray-900 font-semibold w-[10rem] h-14 border-2 border-teal-200 hover:bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700 rounded-xl text-base px-5 py-2.5 text-center me-2 mb-2">Taking Care</button></Link>


                </div>

            </div>

            <div>
                <img src="https://i.ibb.co/C25ZXBb/71j-Sb1-K0g-KS-AC-SL1500-removebg-preview.png" alt="" />

            </div>

        </div>
    );
};

export default CoverHome;

// <img className="w-full pt-20 h-[20vw] lg:h-auto" src={cover} alt="" />