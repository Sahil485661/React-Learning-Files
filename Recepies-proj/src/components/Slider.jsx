import React from 'react';
// Swiper React Components & Modules Import Karo
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
// Swiper Styles Import Karo
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Recipies from '../pages/Recipies';

const slidesData = [

  {
    id: 1,
    title: "Discover Authentic Indian Recipes",
    subtitle: "Learn to cook restaurant-style dishes at home easily.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200",
  },
  {
    id: 2,
    title: "Delicious Italian Pastas & Pizzas",
    subtitle: "Master the art of handmade pasta and wood-fired pizzas.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200",
  },
  {
    id: 3,
    title: "Savor the Flavors of Asia",
    subtitle: "Exotic noodles, dumplings, and street food recipes.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200",
  },
];

const HeroSlider = () => {
    const navigate = useNavigate();

  return (
    <div className="w-full h-[80vh] bg-black">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Background Image Container */}
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl font-light mb-6 text-gray-200">
                  {slide.subtitle}
                </p>
                <button onClick={()=> navigate('/recipies')} className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                  Explore Recipes
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;