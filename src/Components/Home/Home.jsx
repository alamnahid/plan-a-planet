import BestSelling from "./Best Selling/BestSelling";
import Blog from "./Blog/Blog";
import CoverHome from "./CoverHome/CoverHome";
import HotSale from "./Hot Sale/HotSale";
import SomeCategories from "./Some Categorie/SomeCategories";
import TradingPlants from "./Treding Plants/TradingPlants";


const Home = () => {
    return (
        <div>
            <CoverHome></CoverHome>
            <SomeCategories></SomeCategories>
            <BestSelling></BestSelling>
            <TradingPlants></TradingPlants>
            <Blog></Blog>
            <HotSale></HotSale>
            
        </div>
    );
};

export default Home;