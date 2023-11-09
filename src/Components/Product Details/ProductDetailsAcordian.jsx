import plant from "../../assets/images/anime-plant.gif"

const ProductDetailsAcordian = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row shopcontainer mt-28 justify-evenly items-center lg:gap-12">
            <div className="lg:w-[50vw] lg:pt-20 md:h-[36rem] py-8 md:py-0 text-black  mt-16 ">
                <div className="collapse collapse-plus bg-[#f0f5f098]">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Weekly Watering
                    </div>
                    <div className="collapse-content">
                        <p>Calatheas enjoy weekly waterings, allowing the top 2’ of soil to dry out partially. In winter, we recommend watering less frequently to prevent overwatering and root rot. This plant is not very drought tolerant, and extended periods of dryness will cause leaf edges to brown.</p>
                    </div>
                </div>
                <div className="collapse mt-8 collapse-plus bg-[#f0f5f098]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Light Requirements
                    </div>
                    <div className="collapse-content">
                        <p>Calatheas thrive in medium, indirect sunlight but tolerate lower light levels too. Bright direct sunlight can cause the stunning colours on their leaves to fade, with prolonged exposure likely to burn and scorch their leaves.</p>
                    </div>
                </div>
                <div className="collapse mt-8 collapse-plus bg-[#f0f5f098]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Humidity
                    </div>
                    <div className="collapse-content">
                        <p>Your Calathea will also appreciate being placed in a humid environment, which you can create with by misting it frequently, placing it close to other plants or on a pebble tray partly filled with water. Calatheas thrive in steamy bathrooms and kitchens.</p>
                    </div>
                </div>

            </div>

            <div>
                <img className="rounded-lg" src={plant} alt="" />
            </div>
            
        </div>
    );
};

export default ProductDetailsAcordian;