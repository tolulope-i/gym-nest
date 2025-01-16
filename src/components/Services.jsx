import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className=" mx-auto px-8">

        <div className="text-center space-y-6 mb-12">
          <h2 className="sm:text-xl md:text-2xl font-bold text-primary leading-tight">
            Services Designed for Your Success
          </h2>
          <h3 className="sm:text-3xl md:text-4xl font-semibold text-gray-300">
            Tailored Fitness Solutions to Meet Your Goals
          </h3>
          <p className="leading-7 sm:text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
            At <span className="text-primary font-bold">GymNest</span>, we offer a variety of services designed to help you unlock your full potential. Whether you’re looking to build strength, improve flexibility, or boost overall fitness, we have the right programs for you. Explore our services and start your journey to a healthier, stronger you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: 'fa-dumbbell',
              title: 'Personal Training',
              description:
                'Work one-on-one with our certified trainers to develop a customized fitness plan tailored to your specific goals. Whether you\'re training for a marathon or toning up, we’ve got you covered.',
            },
            {
              icon: 'fa-users',
              title: 'Group Fitness Classes',
              description:
                'Join our dynamic group classes that push your limits while fostering a sense of community. From HIIT to yoga, there\'s a class for every fitness level and preference.',
            },
            {
              icon: 'fa-utensils',
              title: 'Nutrition Coaching',
              description:
                'Fuel your fitness with the right nutrition. Our expert nutritionists will guide you with personalized meal plans to help you achieve your goals faster and healthier.',
            },
            {
              icon: 'fa-laptop',
              title: 'Virtual Training',
              description:
                'Train anywhere, anytime with our virtual personal training sessions. Stay on track with expert guidance, even when you can’t make it to the gym.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
            >
              <div className="p-8 text-center space-y-4">
                <div
                  className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center text-3xl text-white transition-all duration-500 hover:bg-gradient-to-l animate-bounce-on-appear"
                  aria-label={service.title}
                >
                  <i className={`fa-solid ${service.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/plans"
            className="text-white border-2 border-white uppercase font-bold text-sm px-4 py-2 bg-gradient-to-r from-white to-transparent bg-[length:200%_100%] bg-[position:100%_0] transition-all duration-500 hover:text-black hover:bg-[position:0%_50%] hover:shadow-md"
          >
            See Our Plans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
