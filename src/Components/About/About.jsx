import { useEffect } from "react";
import Gallery from "../Home/Gallery/Gallery";
import AboutFirstsection from "./AboutFirstsection";
import Addresses from "./Addresses";


const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
       <div className="pt-20">
        <AboutFirstsection></AboutFirstsection>
        <Addresses></Addresses>

        <Gallery></Gallery>
       </div>
    );
};

export default About;