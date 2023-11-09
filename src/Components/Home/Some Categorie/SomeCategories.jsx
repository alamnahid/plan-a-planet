import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const SomeCategories = () => {
    const [categorie, setCategorie] = useState([])
    useEffect(()=>{
        fetch('categorie.json')
        .then(res=>res.json())
        .then(data=>setCategorie(data))
    }, [])
    return (
        <div className="px-[3%] lg:px-[10%] mt-16 flex justify-between flex-wrap">
           {
            categorie?.map(categories=><Link to={`/semishop/${categories.name}`} key={categories.id}> <div className="flex flex-col justify-center items-center">
                <img className="w-[4rem] md:w-[9.25rem] h-[4rem] md:h-[9.25rem] transform scale-100 transition-transform duration-300 hover:scale-110" src={categories.image} alt="" />
                    <h3 className="text-[#343434] text-xs md:text-base font-bold uppercase">{categories.name}</h3>
            </div></Link>)
           }
            
        </div>
    );
};

export default SomeCategories;