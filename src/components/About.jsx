import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from 'react-router-dom';
import Trainers from './Trainers';
import Gallery from './Gallery';
import { useEffect } from 'react';

const About = () => {
  const location = useLocation(); 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white py-16">
      <div data-aos="fade-up" className="text-center space-y-6 mb-12">
        <h3 className="text-primary font-bold sm:text-xl md:text-2xl animate-fade-up duration-700">
          Welcome to GymNest – Your Fitness Family
        </h3>
        <h2 className="sm:text-3xl md:text-4xl font-bold leading-tight animate-fade-up duration-700">
          Built for Strength, Powered by Community
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-10 mx-auto">
        <div className="flex-1 mx-auto px-8 space-y-6 animate-fade-up duration-700">
          <p data-aos="fade-up" data-aos-delay="300" className="leading-7 sm:text-md md:text-lg text-gray-300 lg:pl-8">
            At <span className="text-primary font-medium">GymNest</span>, we believe fitness is more than just a workout—it's a lifestyle. Our mission is to provide a space where everyone, regardless of fitness level, can feel empowered to push their boundaries and achieve their goals. With world-class equipment, expert trainers, and a supportive community, we’re here to guide you every step of the way. Whether you're here to build muscle, improve endurance, or just feel better in your body, GymNest is where your transformation begins.
          </p>

          <div className="flex justify-center">
            <Link
              to="/plans"
              className="text-center text-white border-2 border-primary uppercase font-bold text-sm px-4 py-2 bg-gradient-to-r from-primary to-transparent bg-[length:200%_100%] bg-[position:100%_0] transition-all duration-500 hover:text-black hover:bg-[position:0%_50%] hover:shadow-lg"
            >
              Become a member
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div data-aos="fade-up" data-aos-delay="600" className="flex-1 relative w-full">
          <img
            src="images/about-image.png"
            alt="Gym Image"
            className="max-w-full sm:max-w-[300px] md:w-[500px] lg:w-[700px] xl:w-[900px] mx-auto rounded-lg object-cover transition-transform duration-500 transform hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>

      {/* Conditionally Render Trainers Component */}
      {location.pathname === '/about' && (
        <div className="mt-16">
          <Trainers />
        </div>
      )}

      {location.pathname === '/about' && (
        <div className="mt-16">
          <Gallery />
        </div>
      )}
    </div>
  );
};

export default About;
