import cover from "../../assets/images/shop banner.png"

const ShopBanner = () => {
    return (
        <div style={{
            backgroundImage: 'url(https://i.ibb.co/4gqdyMF/shop-banner.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} className="relative h-[15vh] lg:h-[24vh] flex justify-center items-center ">
             {/* <img className="w-full pt-20" src={cover} alt="" /> */}
             <h1 className="text-white text-[2rem] lg:text-[6.25rem] font-semibold">SHOP</h1>
        </div>
    );
};

export default ShopBanner;