import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-700 py-8 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h4 className="text-2xl font-bold mb-4">GymNest</h4>
            <p className="sm:text-md md:text-lg mb-4">
              Your fitness journey starts here. Join us for expert-led classes that cater to all levels of fitness.
            </p>
            <p className="sm:text-md md:text-lg mb-4">Owerri, Imo State</p>
            <p className="sm:text-md md:text-lg">+234(0) 816 7351 891</p>
          </div>

          <div>
            <h4 className="sm:text-md md:text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:text-md md:text-lg">
              <li><a href="/" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">Home</a></li>
              <li><a href="/about" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">About</a></li>
              <li><a href="/services" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">Services</a></li>
              <li><a href="/classes" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">Classes</a></li>
              <li><a href="/plans" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">Membership Plans</a></li>
              <li><a href="/contact" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="sm:text-md md:text-lg font-bold mb-4">Other Links</h4>
            <ul className="space-y-2 sm:text-md md:text-lg">
              <li><a href="/faq" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">FAQs</a></li>
              <li><a href="/gallery" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">Gallery</a></li>
              <li><a href="/trainers" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">Trainers</a></li>
              <li><a href="/testimonials" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">Testimonials</a></li>
              <li><a href="/privacy" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary transform transition-all duration-500 hover:scale-110 hover:shadow-xl">Terms Of Use</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-6 text-2xl">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transform transition-all duration-500 hover:scale-110 hover:shadow-xl pulse">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transform transition-all duration-500 hover:scale-110 hover:shadow-xl pulse">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transform transition-all duration-500 hover:scale-110 hover:shadow-xl pulse">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transform transition-all duration-500 hover:scale-110 hover:shadow-xl pulse">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 border-t border-gray-700 pt-4">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} GymNest. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
