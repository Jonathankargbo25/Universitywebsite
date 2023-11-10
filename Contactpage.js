import React, { useState } from 'react';
import axios from 'axios';
import Geocode from 'react-geocode';
import './Styles/Contactpage.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to your email server using axios or another library
      const response = await axios.post('YOUR_EMAIL_API_URL', formData);
      console.log('Form submitted successfully!', response);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  // Set up Google Maps API key and initialize Geocode
  Geocode.setApiKey('YOUR_GOOGLE_MAPS_API_KEY');
  Geocode.enableDebug();

  // Define the location for Milton Margai Technical University
  const universityLocation = {
    lat: 8.4750, // Replace with the actual latitude of the university
    lng: -13.2466, // Replace with the actual longitude of the university
  };

  return (
    <div className="contact-us">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="google-map">
        <h2>Our Location</h2>
        <div className="map-container">
          {/* Add your Google Map component here */}
          {/* Example: <YourGoogleMapComponent location={universityLocation} /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
