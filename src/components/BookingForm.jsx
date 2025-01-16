import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [classType, setClassType] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger the popup on successful form submission
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <div className="bg-white m-10 p-8 rounded-lg shadow-md sm:max-w-sm sm:mt-6 md:max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-4">Book Your Class</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Class Type</label>
            <select
              value={classType}
              onChange={(e) => setClassType(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Class</option>
              <option value="HIIT">HIIT</option>
              <option value="Yoga">Yoga</option>
              <option value="Strength Training">Strength Training</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Booking Date</label>
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded">
            Confirm Booking
          </button>
        </form>
      </div>

      {/* Popup Section */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-2xl font-bold text-primary">Booking Confirmed!</h2>
            <p className="mt-4 text-gray-600">
              Your booking for <span className="font-bold">{classType}</span> on{' '}
              <span className="font-bold">{bookingDate}</span> has been successfully confirmed.
            </p>
            <button
              onClick={handleClosePopup}
              className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
