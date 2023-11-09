import { useEffect } from "react"
import cel1 from "../../../assets/images/cel1.png"
import cel2 from "../../../assets/images/cel2.png"
import cel3 from "../../../assets/images/cel3.png"
import cel4 from "../../../assets/images/cel4.png"
import cel5 from "../../../assets/images/cel5.png"
import cel6 from "../../../assets/images/cel6.png"
import cel7 from "../../../assets/images/cel7.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);
    return (
        <div className="mt-28 mx-[10%]">
            <h1 className="text-[#343434] text-xl md:text-4xl font-bold text-center pb-2 md:pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">Celebs You Love, Love Us</h1>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center">
                <img data-aos="fade-up" data-aos-delay="200" className="gallery" src={cel1} alt="" />
                <img data-aos="fade-up" data-aos-delay="200" className="gallery" src={cel2} alt="" />
                <img data-aos="fade-up" data-aos-delay="200" className="gallery" src={cel3} alt="" />
                <img data-aos="fade-up" data-aos-delay="200" className="gallery" src={cel4} alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                <img data-aos="fade-down" data-aos-delay="200" className="gallery" src={cel5} alt="" />
                <img data-aos="fade-down" data-aos-delay="200" className="gallery" src={cel6} alt="" />
                <img data-aos="fade-down" data-aos-delay="200" className="gallery" src={cel7} alt="" />
                
            </div>
            
        </div>
    );
};

export default Gallery;