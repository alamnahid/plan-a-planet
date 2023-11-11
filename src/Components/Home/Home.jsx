import { useEffect } from "react";
import BestSelling from "./Best Selling/BestSelling";
import Blog from "./Blog/Blog";
import CoverHome from "./CoverHome/CoverHome";
import Feature from "./Features/Feature";
import Gallery from "./Gallery/Gallery";
import Gardenning from "./Gardenning/Gardenning";
import HotSale from "./Hot Sale/HotSale";
import Review from "./Review/Review";
import SomeCategories from "./Some Categorie/SomeCategories";
import TradingPlants from "./Treding Plants/TradingPlants";


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <CoverHome></CoverHome>
            <SomeCategories></SomeCategories>
            <BestSelling></BestSelling>
            <TradingPlants></TradingPlants>
            <Feature></Feature>
            <Blog></Blog>
            <HotSale></HotSale>
            <Gardenning></Gardenning>
            <Gallery></Gallery>
            <Review></Review>

            
        </div>
    );
};

export default Home;