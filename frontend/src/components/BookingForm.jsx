import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../styles/BookingForm.css';

// Set the API base URL based on environment
const API_URL = import.meta.env.MODE === 'development' 
  ? 'http://localhost:5000'
  : '';

const initialFormState = {
  pickupLocation: '',
  dropoffLocation: '',
  materialWeight: '',
  materialType: '',
  contactNumber: '',
  email: ''
};

const BookingForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (error) setError('');
  };

  const validateForm = () => {
    // Simple validation for required fields
    for (const key in formData) {
      if (!formData[key]) {
        setError(`Please fill in all fields`);
        return false;
      }
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    // Phone number validation (simple check for minimum length)
    if (formData.contactNumber.length < 10) {
      setError('Please enter a valid contact number');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError('');
    
    try {
      console.log('Submitting form data:', formData);
      
      // Submit to our backend which will email the data
      const response = await axios.post(`${API_URL}/api/bookings`, formData);
      console.log('Server response:', response.data);
      
      setSuccess(true);
      setFormData(initialFormState);
    } catch (err) {
      console.error('Error submitting form:', err);
      
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(`Server Error: ${err.response.data.error || 'Failed to submit. Please try again.'}`);
      } else if (err.request) {
        // The request was made but no response was received
        setError('No response from server. Please check your internet connection and try again.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Failed to submit your booking. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-form-container" id="booking">
      <div className="container">
        <motion.div 
          className="booking-form-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="booking-form-header">
            <h2>Book Your Transport</h2>
            <p>Fill in the details below to book your transportation service</p>
          </div>
          
          {success ? (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">✓</div>
              <h3>Booking Request Received!</h3>
              <p>Thank you for your booking request. We'll contact you shortly to confirm the details.</p>
              <button 
                className="btn btn-primary" 
                onClick={() => setSuccess(false)}
              >
                Book Another Transport
              </button>
            </motion.div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="pickupLocation">Pickup Location</label>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="Enter pickup address"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="dropoffLocation">Drop-off Location</label>
                <input
                  type="text"
                  id="dropoffLocation"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  placeholder="Enter destination address"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="materialWeight">Weight of Material (kg)</label>
                  <input
                    type="number"
                    id="materialWeight"
                    name="materialWeight"
                    value={formData.materialWeight}
                    onChange={handleChange}
                    placeholder="Approximate weight"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="materialType">Type of Material</label>
                  <select
                    id="materialType"
                    name="materialType"
                    value={formData.materialType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select material type</option>
                    <option value="Construction">Construction Materials</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Perishables">Perishable Goods</option>
                    <option value="Machinery">Machinery</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>
              
              {error && (
                <motion.div 
                  className="error-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="error-icon">⚠️</span> {error}
                </motion.div>
              )}
              
              <motion.button 
                type="submit" 
                className="btn btn-primary booking-submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.03 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <div className="loading-indicator">
                    <span className="loading-dot"></span>
                    <span className="loading-dot"></span>
                    <span className="loading-dot"></span>
                  </div>
                ) : 'Book Transport'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BookingForm; 