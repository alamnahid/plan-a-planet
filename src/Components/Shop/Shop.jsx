import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ShopBanner from "./ShopBanner";
import Spinner from "../Spinner/Spinner"


const Shop = () => {
    // const plantsloaderData = useLoaderData();
    const [showData, setShowData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [asc, setAsc] = useState(true)
    const [minvalue, setMinValue] = useState(50)
    const [maxvalue, setMaxValue] = useState(100)
    const [search, setSearch] = useState('')
    // const [search, setSearch] = useState('')

    const handleSearch = (e)=>{
        e.preventDefault();
         const search = e.target.search.value;
         console.log(typeof(search))

         setSearch(search)
    }
 

    


    useEffect(()=>{
        fetch(`http://localhost:5000/plants?sort=${asc ? 'asc' : 'des'}&search=${search.toString()}`)
        .then(res=>res.json())
        .then(data=>setShowData(data))
    }, [asc, search])



    const [categorie, setCategorie] = useState([])
    const [semicategorie, setSemiCategorie] = useState([])
    // const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('categorie.json')
            .then(res => res.json())
            .then(data => setSemiCategorie(data))
    }, [])


    useEffect(() => {
        fetch('planttypes.json')
            .then(res => res.json())
            .then(data => setCategorie(data))
    }, [])

    const handlesemicategoriClick = (name) => {
        const showsemicategoriwise = plantsloaderData.filter(plants => plants.producttype.toLowerCase() == name.toLowerCase())
        setShowData(showsemicategoriwise)
    }

    const handleCategorieWise = (name) => {
        const showcategoriwise = plantsloaderData.filter(plants => plants.category.toLowerCase() == name.toLowerCase())
        setShowData(showcategoriwise)

    }
    // const handleShowAll = () => {
    //     setShowData(plantsloaderData)

    //     setShowAll(true);
    // };



    // pagination
    const [totalCount, setTotalCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerpage] = useState(8)

    useEffect(() => {
        fetch('http://localhost:5000/plantscount')
            .then(res => res.json())
            .then(data => setTotalCount(data))
    }, [])





    // const itemsPerPage = 5;

    const numberOfPage = Math.ceil(totalCount?.count / itemsPerPage)

    // const pages = [...Array(numberOfPage).keys()]
    // console.log(pages)

    const pages = []

    for (let i = 0; i < numberOfPage; i++) {
        pages.push(i)
    }

    const options = [8, 16, 24, 40]
    const handleSelectChange = (e) => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerpage(val);
        setCurrentPage(0);
    }


    // apatotot
    useEffect(() => {
        fetch(`http://localhost:5000/plants?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setShowData(data)

                setIsLoading(false)
            })
    }, [currentPage, itemsPerPage]);


  








    return (
        <div className="pt-20">
            <ShopBanner></ShopBanner>

            <div>
                {isLoading ? (
                    <Spinner></Spinner>
                ) : (
                    // Render your data when it's loaded
                    <div className="flex flex-col lg:flex-row justify-center pr-0">
                        {/* <div className="md:w-[15.5rem] h-fit p-6 border-2 border-[#E3E5E5] bg-[#F0F5F0] md:ml-24 mt-12 md:mt-24">

                            <div className="btn-group btn-group-vertical w-full border-b-2 pb-5 rounded-xl border-[#3B823E]">
                                <button onClick={() => setShowData(plantsloaderData)} className="btn btn-outline border-green-900 mt-4 w-full text-white font-semibold bg-[#3B823E]">All Categories</button>

                                {
                                    semicategorie?.map(btn => <button onClick={() => handlesemicategoriClick(btn.name)} key={btn.id} className="btn btn-outline border-green-900 mt-4 w-full text-black font-semibold">{btn.name}</button>)
                                }
                                <div className="w-full h-[0.01rem] my-4 bg-black"></div>
                                {
                                    categorie?.map(btn => <button onClick={() => handleCategorieWise(btn.name)} key={btn.id} className="btn btn-outline border-green-900 mt-4 w-full text-black font-semibold">{btn.name}</button>)
                                }

                            </div>
                        </div> */}

                        <div>

                        

                            <div className="flex justify-between items-center mt-12 gap-4 px-3">
                            <button className="btn btn-success capitalize text-black font-bold text-xs md:text-lg" onClick={()=>setAsc(!asc)}>{asc ? 'Sort Price High to Low' : 'Sort Price Low to High'}</button>

                            <form onSubmit={handleSearch} className="flex">
                            <input type="text" name="search" placeholder="Search Here" className="input input-bordered input-success w-full rounded-r-none max-w-xs bg-white" />
                            
                            <input className="btn rounded-l-none  btn-success text-black capitalize text-lg" type="submit" value="search" />
                            </form>
                            </div>
                            

                            <div className="mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5  justify-items-center items-center gap-6">

                                {
                                    
                                    showData?.map(plant => <div key={plant._id} className="w-[45vw] md:w-[18rem] cardss px-5 pt-5 pb-4 md:h-[24rem] rounded-2xl bg-white">
                                        <img className="h-[100px] md:h-[12rem] w-[16rem] rounded-xl mx-auto" src={plant?.photo} alt="" />

                                        <h1 className="text-[#343434] font-semibold mt-3 text-xs md:text-lg">{plant?.name}</h1>
                                        <h1 className="text-[#343434] text-xs md:text-xl">$ {plant?.price}</h1>
                                        <Link to={`/productdetails/${plant._id}`}><button className="capitalize h-8 md:h-14 w-full bg-[#3B823E] px-5 text-white font-semibold md:text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Shop Now</button></Link>
                                    </div>)
                                }


                            </div>
                            {/* {!showAll && showData.length > 7 && (
                        <div className="mx-auto w-[24rem]  text-center mt-16">
                            <button
                                onClick={handleShowAll}
                                className="capitalize ml-5 lg:ml-0 h-16 w-full lg:w-[24rem] bg-[#3B823E] px-5 text-white font-semibold text-xl rounded-lg mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-green-800">Show All</button>
                        </div>
                    )} */}
                        </div>

                    </div>
                )}
            </div>



            <div className="mt-12 md:mt-28  w-full flex gap-3 justify-center items-center">

                {
                    pages?.map(number => <button
                        key={number}
                        className={currentPage === number ? 'btn bg-green-800 text-xl border-none text-white font-bold' : 'btn btn-outline text-black font-bold text-xl'}
                        onClick={() => setCurrentPage(number)}
                    >{number}</button>)
                }
                <select className="btn btn-outline text-black text-xl font-bold" value={itemsPerPage}
                    onChange={handleSelectChange}

                >
                    {
                        options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))
                    }

                </select>
            </div>


        </div>
    );
};

export default Shop;