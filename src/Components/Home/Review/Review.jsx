import quotes from "../../../assets/icon/quote 1.svg"

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const cardData = [
    {
        imageSrc: 'https://i.ibb.co/xjSKDvJ/Md-Nahid-Alam.jpg',
        name: 'Nahid Alam',
        designation: 'Satisfied Customer',
        description: 'Car Doctor is amazing! Fast and reliable service, and their prices are reasonable. Highly recommend!'
    },
    {
        imageSrc: 'https://i.ibb.co/VjHZm4J/image-10.png',
        name: 'Jane Smith',
        designation: 'Happy Driver',
        description: 'Car Doctor is the best in town. They provide top-notch service and have a friendly team. Highly recommended!'
    },
    {
        imageSrc: 'https://i.ibb.co/h8J8SVz/nahid.jpg',
        name: 'Mike Johnson',
        designation: 'Loyal Customer',
        description: 'Car Doctor never lets me down. They are the best in town, offering expertise and professionalism.'
    },
    {
        imageSrc: 'https://i.ibb.co/xjSKDvJ/Md-Nahid-Alam.jpg',
        name: 'Sarah Wilson',
        designation: 'Impressed Car Owner',
        description: 'Took my car to Car Doctor for the first time, and I am impressed with their fast and reliable service!'
    }
];


const Review = () => {




    const [currentSlide, setCurrentSlide] = useState(0);

    const totalCards = cardData.length;
    const cardsToShow = 2; // Number of cards to show at a time

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalCards);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalCards) % totalCards);
    };
    useEffect(() => {
        // Initialize AOS
        AOS.init();
      }, []);

    const renderCards = () => {
        const cards = [];
        for (let i = 0; i < cardsToShow; i++) {
            const cardIndex = (currentSlide + i) % totalCards;
            const { imageSrc, name, designation, description } = cardData[cardIndex];
            cards.push(
                <div data-aos="fade-up" data-aos-delay="200" key={cardIndex} className="card hover:translate-x-[-20px] lg:w-[34.875rem] flex flex-col  justify-center h-[15rem] md:h-[21.8125rem] rounded-xl border-2 border-[#E8E8E8] shadow-md hover:cursor-crosshair">
                    <div className="flex gap-4 ml-[3.13rem]">
                        <img className='w-[3.75rem] h-[3.75rem] rounded-[50%]' src={imageSrc} alt="" />
                        <div>
                            <h1 className='text-[#444444] text-xs md:text-2xl font-bold'>{name}</h1>
                            <p className='text-[#444444] text-xs md:text-xl font-medium mt-2'>{designation}</p>

                        </div>
                        <img className='md:w-[3.5rem] md:h-[3.5rem] md:ml-20' src={quotes} alt="" />
                    </div>
                    <p className="lg:w-[30rem] mt-5 mx-[3.13rem] text-[#272626] text-xs md:text-base">
                        {description}
                    </p>
                    <div className="ml-[3rem] mt-5">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        </div>
                    </div>


                </div>
            );
        }
        return cards;
    };






    return (
        <div className="mt-12 md:mt-24 mx-[3%] md:mx-[10%]">
            <h1 className="text-[#343434] text-xl md:text-4xl font-bold text-center pb-2 md:pb-8 border-b-2 border-green-800 rounded-xl w-fit mx-auto ">What Customer Says</h1>


            <div className="carousel-container relative mt-12">
                <div className="carousel grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
                    {renderCards()}
                </div>
                <div className=" flex justify-between ">
                    <button className="prev border-2 border-gray-400 shadow-lg btn btn-circle bg-[#1dc21d] text-white absolute top-1/2" onClick={prevSlide}>
                        ❮
                    </button>
                    <button className="next border-2 border-gray-400 shadow-lg btn btn-circle bg-[#1dc21d] text-white absolute right-0 top-1/2" onClick={nextSlide}>
                        ❯
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Review;