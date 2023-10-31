import cover from "../../assets/images/shop banner.png"

const ShopBanner = () => {
    return (
        <div className="relative">
             <img className="w-full" src={cover} alt="" />
             <h1 className="text-white text-[2rem] lg:text-[6.25rem] absolute top-3 lg:top-[8rem] left-[40vw] lg:left-[45vw] font-semibold">SHOP</h1>
        </div>
    );
};

export default ShopBanner;