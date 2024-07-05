import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner, Banner2 } from "../../Asets/images";
import { IconChervonLeft, IconChervonRight } from "../../Asets/icons";

const dataValue = [
  {
    id: 1,
    name: "banner 1",
    image: Banner,
  },
  {
    id: 2,
    name: "banner 2",
    image: Banner2,
  },
  {
    id: 3,
    name: "banner 3",
    image: Banner,
  },
];

const Slide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const handleAfterChange = (index: number) => {
    setCurrentIndex(index);
  };

  const settings = {
    dots: false,
    infinite: dataValue.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: dataValue.length > 1,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "5%", // Adjust padding for desired visibility
    afterChange: handleAfterChange,
    arrows: false,
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    setCurrentIndex(index);
  };

  return (
    <main className="">
      {dataValue.length > 1 && (
        <>
          <div className="absolute lg:mt-[200px] mt-[90px] transform -translate-y-1/2 left-[90px] z-10">
            <button
              onClick={prevSlide}
              className="bg-[#EEF9FF] hover:opacity-100 opacity-30 active:bg-slate-500 rounded-full lg:h-[70px] lg:w-[70px] h-[40px] w-[40px] focus:outline-none"
            >
              <p className="lg:pl-[30px] pl-[10px]"> {IconChervonLeft()}</p>
            </button>
          </div>
          <div className="absolute lg:mt-[200px] mt-[90px] transform -translate-y-1/2 right-[95px] z-10">
            <button
              onClick={nextSlide}
              className="bg-[#EEF9FF] active:bg-slate-500 rounded-full lg:h-[70px] lg:w-[70px] h-[40px] w-[40px] hover:opacity-100 opacity-30 focus:outline-none"
            >
              <p className="lg:pl-[20px] pl-[10px]"> {IconChervonRight()}</p>
            </button>
          </div>
        </>
      )}
      <Slider ref={sliderRef} {...settings}>
        {dataValue.length > 0 ? (
          dataValue.map((item, index) => (
            <div key={item.id} className="w-[1259px] h-[371px] mt-[2%]">
              <img
                src={item.image}
                alt={`Slide ${item.name}`}
                className="w-full h-full object-fill"
              />
            </div>
          ))
        ) : (
          <div>
            <p>Data tidak tersedia</p>
          </div>
        )}
      </Slider>
      {dataValue.length > 1 && (
        <div className="lg:mt-[10px] mt-[-210px] left-0 right-0 flex justify-center z-20">
          {dataValue.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === currentIndex
                  ? "bg-[#1069E5] w-[50px]"
                  : "bg-slate-400"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      )}
    </main>
  );
};

export default Slide;
