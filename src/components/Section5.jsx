import React from 'react';
import circleImg1 from '../../public/circle1.png';
import circleImg2 from '../../public/circle2.png';
import circleImg3 from '../../public/circle3.png';
import circleImg4 from '../../public/circle4.png';
import circleImg5 from '../../public/circle5.png';
import img from '../../public/section5.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section5() {
  const sliderSettings = {
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
        
      },
     
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
        
      },
     
      
    ],
  };

  return (
    <div className="relative">
      <img
        src={img}
        alt="Background Image"
        className="w-full h-[300px] sm:h-[400px] object-cover "
      />
      <div className="absolute inset-14 text-center text-gray-800">
        <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5">
          <h1 className="text-5xl font-bold">Works Done</h1>
          <div className="mt-8">
            <Slider {...sliderSettings}>
              <div>
                <img src={circleImg1} alt="Circle Image 1" className="h-24 w-24 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:w-52 lg:h-52 border-white border-4 rounded-full object-cover" />
              </div>
              <div>
                <img src={circleImg2} alt="Circle Image 2" className="h-24 w-24 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:w-52 lg:h-52 border-white border-4 rounded-full object-cover" />
              </div>
              <div>
                <img src={circleImg3} alt="Circle Image 3" className="h-24 w-24 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:w-52 lg:h-52 border-white border-4 rounded-full object-cover" />
              </div>
              <div>
                <img src={circleImg4} alt="Circle Image 4" className="h-24 w-24 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:w-52 lg:h-52 border-white border-4 rounded-full object-cover" />
              </div>
              <div>
                <img src={circleImg5} alt="Circle Image 5" className="h-24 w-24 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:w-52 lg:h-52 border-white border-4 rounded-full object-cover" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
