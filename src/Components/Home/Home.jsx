import BestSelling from "./Best Selling/BestSelling";
import CoverHome from "./CoverHome/CoverHome";
import SomeCategories from "./Some Categorie/SomeCategories";
import TradingPlants from "./Treding Plants/TradingPlants";


const Home = () => {
    return (
        <div>
            <CoverHome></CoverHome>
            <SomeCategories></SomeCategories>
            <BestSelling></BestSelling>
            <TradingPlants></TradingPlants>
            
        </div>
    );
};

export default Home;