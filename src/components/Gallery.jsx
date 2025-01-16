import React from 'react';
import { Link } from 'react-router-dom';


const Gallery = () => {
  const galleryImages = [
    { src: 'images/hero-img.jfif', caption: 'High-Intensity Workouts' },
    { src: 'images/hero-img.jfif', caption: 'State-of-the-Art Equipment' },
    { src: 'images/hero-img.jfif', caption: 'Yoga for Peace and Balance' },
    { src: 'images/hero-img.jfif', caption: 'Personalized Training Plans' },
    { src: 'images/hero-img.jfif', caption: 'Strength Training Sessions' },
    { src: 'images/hero-img.jfif', caption: 'Group Classes and Community' },
  ];

  return (
    <div className="bg- text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Our Gallery</h2>
        <p className="text-gray-500 max-w-xl mx-auto px-4">
          Explore the vibrant world of GymNest. From high-energy classes to serene yoga sessions, every moment captured here inspires a healthier, stronger you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center text-center">
              <span className="text-white text-lg font-bold">{image.caption}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/plans"
          className="text-center text-white border-2 border-primary uppercase font-bold text-sm px-4 py-2 bg-gradient-to-r from-primary to-transparent bg-[length:200%_100%] bg-[position:100%_0] transition-all duration-500 hover:text-black hover:bg-[position:0%_50%] hover:shadow-lg"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
