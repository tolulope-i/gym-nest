import React from 'react';
import { Link } from 'react-router-dom';

const Plans = () => {
  return (
    <div className="bg-black text-white-text py-12">
      <div className="px-4 py-8 flex flex-col justify-center items-center space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-primary font-bold text-lg">
            Flexible Plans for Every Fitness Journey
          </h2>
          <h3 className="text-4xl font-semibold">
            Choose a Plan That Works for You
          </h3>
        </div>
        <p className="text-center max-w-4xl text-gray-300">
          At <span className="text-primary font-bold">GymNest</span>, we believe everyone’s fitness journey is unique. That’s why we offer flexible membership plans tailored to your lifestyle and goals. Whether you’re a beginner or a seasoned athlete, we have a plan to fit your needs. Start your fitness journey today with no hidden fees or long-term commitments.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {[
          {
            title: 'Basic Plan',
            price: '₦30000/month',
            description: 'Beginners or casual gym-goers',
            features: [
              'Access to gym facilities during staffed hours',
              '2 group classes per month',
              'Complimentary fitness orientation',
              'Basic workout tracking through the GymNest app',
            ],
          },
          {
            title: 'Standard Plan',
            price: '₦50000/month',
            description: 'Regular gym users seeking variety',
            features: [
              'Unlimited access to gym facilities during operating hours',
              'Unlimited group fitness classes',
              'Monthly progress tracking with a fitness coach',
              'Free locker usage',
              'Access to member-only fitness challenges and events',
            ],
          },
          {
            title: 'Premium Plan',
            price: '₦80000/month',
            description: 'Dedicated fitness enthusiasts looking for premium services',
            features: [
              '24/7 access to gym facilities',
              'Priority booking for classes and personal training',
              '2 personal training sessions per month',
              'Advanced nutrition and workout planning',
              'Access to exclusive workshops and seminars',
              'Discounts on GymNest merchandise and supplements',
            ],
          },
        ].map((plan, index) => (
          <div
            key={index}
            className="bg-light-primary shadow-custom-red hover:shadow-custom-white p-6 rounded-lg text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold">{plan.title}</h3>
              <h2 className="text-primary text-xl font-semibold">{plan.price}</h2>
              <h4 className="text-gray-400">{plan.description}</h4>
            </div>
            <ul className="text-left py-6 space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="pr-3 text-primary">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
            <Link
              to="/booking"
              className="text-center no-underline text-white border-2 border-primary uppercase font-bold text-xs px-4 py-2 bg-gradient-to-r from-primary to-transparent bg-[length:200%_100%] bg-[position:100%_0] transition-all duration-500 opacity-0 animate-fade-in hover:text-white hover:bg-[position:0%_50%] hover:shadow-md"
            >
              Book Now
            </Link>
          </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 space-y-4">
        <p className="text-gray-400">
          Join GymNest today and get a free 7-day trial! Start building the best version of yourself with us.
        </p>
        <div className="flex justify-center">
          <Link
            to="/booking"
            className="text-primary border-2 border-primary uppercase font-bold text-sm px-6 py-2 rounded bg-gradient-to-r from-primary to-transparent bg-[length:200%_100%] bg-[position:100%_0] transition-all duration-500 hover:text-white hover:bg-[position:0%_50%] hover:shadow-md"
          >
            Join Us Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plans;
