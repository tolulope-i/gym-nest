import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="max-h-full">
      <div className="bg-fixed bg-gradient-overlay bg-cover bg-center md:bg-right lg:bg-center text-center py-36 mx-auto px-8">
        <div className="relative text-gray-300 flex flex-col justify-center items-center space-y-10">
          <h1 className="sm:text-xl md:text-2xl font-semibold animate-fall-in absolute">
            Redefine 
            <span className="text-primary"> Strength</span>, 
            Redefine
            <span className="text-primary"> You</span>
          </h1>
          <div className='animate-slide-in relative'>
            <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl py-2">
              Your Fitness Journey Starts Here
            </h3>
            <p className="leading-7 sm:text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
              Step into a gym designed to ignite your passion for fitness.
              At <strong>GymNest</strong>, we combine top-notch equipment with a vibrant community
              to help you achieve your goals and redefine your limits. Let’s build
              your best self together.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="text-center no-underline text-white border-2 border-primary uppercase font-bold text-xs px-4 py-2 bg-gradient-to-r from-primary to-transparent bg-[length:200%_100%] bg-[position:100%_0] transition-all duration-500 opacity-0 animate-fade-in hover:text-black hover:bg-[position:0%_50%] hover:shadow-md"
            >
              learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
