import React from 'react';
import { Link } from 'react-router-dom';

const trainersData = [
  {
    name: 'Alex Johnson',
    title: 'Strength & Conditioning Coach',
    bio: 'With over 10 years of experience, Alex specializes in helping clients build muscle and improve overall strength.',
    img: 'images/person1.jpg',
    specialties: ['Strength Training', 'Weightlifting', 'Nutrition Planning'],
  },
  {
    name: 'Samantha Lee',
    title: 'Yoga Instructor',
    bio: 'Samantha is a certified yoga instructor who focuses on flexibility, mindfulness, and balance for all fitness levels.',
    img: 'images/person2.jpg',
    specialties: ['Yoga', 'Mindfulness', 'Stretching'],
  },
  {
    name: 'Marcus Brown',
    title: 'HIIT & Cardio Specialist',
    bio: 'Marcus brings energy and expertise to every session, helping clients burn calories and improve endurance.',
    img: 'images/person3.jpg',
    specialties: ['HIIT', 'Cardio Training', 'Endurance'],
  },
  {
    name: 'Olivia Green',
    title: 'Dance & Aerobics Coach',
    bio: 'Olivia combines dance and fitness, creating fun and energetic workouts for all ages.',
    img: 'images/person4.jpg',
    specialties: ['Dance Fitness', 'Aerobics', 'Rhythm Training'],
  },
];

const Trainers = () => {
  return (
    <div className="bg-light-primary py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">Meet Our Trainers</h2>
        <p className="leading-7 sm:text-md md:text-lg text-gray-500 max-w-3xl mx-auto mt-4 px-4">
          Our team of expert trainers is dedicated to helping you achieve your fitness goals. From yoga to strength training, we’ve got you covered.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
        {trainersData.map((trainer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          >
            <div className="relative">
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-96 object-center lg:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 text-white p-4">
                <h3 className="text-xl font-bold">{trainer.name}</h3>
                <p className="text-sm">{trainer.title}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">{trainer.bio}</p>
              <h4 className="text-primary font-bold mt-4">Specialties:</h4>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {trainer.specialties.map((specialty, idx) => (
                  <li key={idx}>{specialty}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/contact"
          className="text-center text-white border-2 border-primary uppercase font-bold text-sm px-4 py-2 bg-gradient-to-r from-primary to-transparent bg-[length:200%_100%] bg-[position:100%_0] transition-all duration-500 hover:text-black hover:bg-[position:0%_50%] hover:shadow-lg"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Trainers;
