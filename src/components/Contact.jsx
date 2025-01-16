import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
          <p className="text-lg text-gray-400 mt-4">
            We'd love to hear from you! Whether you have a question or need assistance, feel free to reach out to us.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white font-bold rounded-lg transition duration-300 hover:bg-secondary"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">Our Location</h3>
            <div className="bg-gray-100 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-700">GymNest HQ</h4>
              <p className="text-gray-600 mt-2">Owerri, Imo State</p>
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127101.57288376219!2d7.027515995648431!3d5.428492869446354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sroad%20safety%20owerri%20imo%20state!5e0!3m2!1sen!2sng!4v1736806047255!5m2!1sen!2sng"
                  className="w-full h-64 rounded-lg border-0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-400">Follow us on social media</p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl hover:text-secondary">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl hover:text-secondary">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl hover:text-secondary">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl hover:text-secondary">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Contact;
