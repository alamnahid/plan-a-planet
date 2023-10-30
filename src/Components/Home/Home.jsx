import BestSelling from "./Best Selling/BestSelling";
import CoverHome from "./CoverHome/CoverHome";
import SomeCategories from "./Some Categorie/SomeCategories";


const Home = () => {
    return (
        <div>
            <CoverHome></CoverHome>
            <SomeCategories></SomeCategories>
            <BestSelling></BestSelling>
            
        </div>
    );
};

export default Home;