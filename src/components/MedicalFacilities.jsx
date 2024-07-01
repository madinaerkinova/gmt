import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../public/assets/image.png'

const carouselItems = [
  {
    title: "Экспресс лаборатория",
    image: img,
  },
  {
    title: "Лазерная терапия",
    image: img,
  },
  {
    title: "Операционный блок",
    image: img,
  },
];

const MedicalFacilities = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="max-w-screen-lg mx-auto py-10">
      <h2 className="text-center text-2xl font-bold mb-6">Комплексное оснащение кабинетов</h2>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="px-4">
            <img src={item.image} alt={item.title} className="rounded-lg" />
            <p className="text-center text-lg mt-4">{item.title}</p>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded mr-4">Бесплатная консультация</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Рассчитать стоимость</button>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default MedicalFacilities;
