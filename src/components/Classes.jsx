import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Classes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-light-primary">
      {/* Heading Section */}
      <div className="py-16 flex flex-col justify-center items-center space-x-4">
        <div className="text-center">
          <h2 className="sm:text-xl md:text-2xl font-bold text-primary leading-tight transform transition-all duration-500 hover:scale-105">
            Classes That Fit Your Lifestyle
          </h2>
          <h3 className="sm:text-3xl md:text-4xl text-gray-700 mt-4 transform transition-all duration-500 hover:text-primary">
            Find Your Perfect Workout Routine
          </h3>
        </div>
        <p
          className="text-center max-w-4xl sm:text-md md:text-lg text-gray-600 mt-4 opacity-0 animate-fade-in delay-1000 sm:px-2 "
        >
          <span className="text-primary font-bold ">GymNest</span> offers a diverse range of classes designed to challenge, inspire, and keep you coming back for more. Whether you’re into high-energy cardio, strength training, or calming yoga sessions, our expert-led classes cater to all fitness levels. Discover a class that fits your goals and schedule today.
        </p>
      </div>

      {/* Class Grid */}
      <div className="px-8">
        <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-center mx-auto">
          {[
            { title: 'HIIT Blast', description: 'Burn calories and build endurance...', img: 'images/hiit.jpg' },
            { title: 'Strength & Conditioning', description: 'Develop muscle and improve strength...', img: 'images/strength.jpg' },
            { title: 'Yoga Flow', description: 'Unwind, stretch, and strengthen...', img: 'images/yoga.jpg' },
            { title: 'Spin Revolution', description: 'Pedal your way to peak fitness...', img: 'images/spin.jpg' },
            { title: 'Dance Fit', description: 'Get your heart pumping and your body moving...', img: 'images/dance.jpg' },
            { title: 'Core & Abs', description: 'Strengthen your core muscles with targeted workouts...', img: 'images/abs.jpg' }
          ].map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 300} 
            >
              {/* Image Section */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full  h-96 object-center transition-transform duration-500 transform group-hover:scale-110"
              />
              {/* Overlay with Title and Description */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent text-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-primary uppercase tracking-wider transform transition-all duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-sm mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="py-16 flex flex-col justify-center items-center">
          <p className="sm:text-lg md:text-xl text-gray-700 mb-6 opacity-0 animate-fade-in delay-1000">
            Ready to join a class? Check out our schedule and book your spot today!
          </p>
          <div className="flex justify-center py-4">
            <Link
              to="/plans"
              className="text-center text-white font-bold text-lg px-4 py-2 bg-gradient-to-r from-primary to-secondary transform transition-all duration-500 hover:scale-110 hover:text-black hover:shadow-xl"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
