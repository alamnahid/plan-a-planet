import { useRouteError } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
// import error from "../../assets/images/error.png"

const ErrorElement = () => {
    const error = useRouteError();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <div className="bg-white">
            <Navbar></Navbar>
            {
                error.status === 404 && <div>
                    <h1> <img className="w-[70vw] mx-auto pt-32" src="https://i.ibb.co/cgqh9PQ/error.png" alt="" /></h1>
                </div>
            }

            <Footer></Footer>
            
        </div>
    );
};

export default ErrorElement;