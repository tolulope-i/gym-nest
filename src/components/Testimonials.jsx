import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'John Doe',
    testimonial: 'GymNest changed my life! The trainers are fantastic and the classes are challenging yet fun. I’ve never felt better.',
    image: 'images/person1.jpg',
  },
  {
    name: 'Jane Smith',
    testimonial: 'I love the variety of classes offered at GymNest. I’m constantly challenged and motivated to push myself further.',
    image: 'images/person4.jpg',
  },
  {
    name: 'Mark Wilson',
    testimonial: 'The gym’s atmosphere is amazing. The community and trainers make working out an enjoyable experience every time.',
    image: 'images/person3.jpg',
  },
  {
    name: 'Emily Davis',
    testimonial: 'I’ve seen incredible results since joining GymNest. The personal training sessions are worth every penny!',
    image: 'images/person2.jpg',
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "ease-in-out" 
  };

  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">What Our Members Say</h2>
        <p className="text-lg text-gray-400">
          Don’t just take our word for it! Hear what our members have to say about their experience at GymNest.
        </p>
      </div>

      <Slider {...sliderSettings} className="max-w-3xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full border-4 border-primary"
              />
            </div>
            <p className="text-xl font-semibold text-gray-300 mb-4">
              "{testimonial.testimonial}"
            </p>
            <p className="font-bold text-primary">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
