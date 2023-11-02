// import person from "../../assets/images/gardenning.png"
// import parts from "../../assets/images/about_us/parts.jpg"

const AboutFirstsection = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-24 items-center lg:my-32 p-5 lg:p-0 lg:mx-[10%] mt-12">
        <div className="relative lg:w-1/2">
            <img className="w-3/4 rounded-xl " src="https://i.ibb.co/CvM1HWS/stock-photo-mother-and-daughter-working-in-the-garden-together.jpg" alt="" />
            <img className="w-1/2 rounded-xl border-8 border-white absolute top-1/2 left-1/2 " src="https://i.ibb.co/pjBfk5S/closeup-one-hand-holding-small-plant-growing-out-soil-created-with-generative-ai-762026-38191.jpg" alt="" />
        </div>
        <div className="lg:w-1/2">
            <h1 className="text-[#FF3811] text-xl font-bold">About Us</h1>
            <h1 className=" text-[1.7rem] md:text-[2.8rem] mt-5 text-[#151515] font-semibold">Your Premier Destination for Greenery and Elegance!</h1>
           
            <p className="pr-6 text-justify mt-7 text-[#737373] text-base">At plan a plant, we believe that every home, every space, and every life is made better by the presence of greenery. We are passionate about bringing natures beauty and serenity to your doorstep, offering a wide variety of plants, succulents, and botanical treasures that are carefully curated and nurtured to perfection. </p>
           
           
            <p className="pr-6 text-justify mt-5 text-[#737373] text-base">Our journey began with a simple love for plants. We understood the joy and tranquility they bring to peoples lives. We set out with a vision to make quality plants and botanical products accessible to everyone, regardless of their gardening expertise.</p>
            <button className="btn mt-7  bg-[#3B823E] border-none text-white text-lg capitalize font-medium w-[10.6rem] h-14">Get More Info</button>

        </div>
    </div>
    );
};

export default AboutFirstsection;