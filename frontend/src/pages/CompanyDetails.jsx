import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CompanyDetails.css';

const CompanyDetails = () => {
  const [bannerImageLoaded, setBannerImageLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if banner image exists
    const img = new Image();
    img.src = '/images/truck-banner.jpg';
    img.onload = () => setBannerImageLoaded(true);
    img.onerror = () => setBannerImageLoaded(false);
  }, []);

  return (
    <div className="company-details-page">
      <div 
        className={`company-banner ${bannerImageLoaded ? 'with-image' : ''}`}
        style={bannerImageLoaded ? {backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/truck-banner.jpg")'} : {}}
      >
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Our Company
          </motion.h1>
        </div>
      </div>

      <section className="company-info">
        <div className="container">
          <div className="company-grid">
            <motion.div 
              className="company-image"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="owner-image-container">
                <img 
                  src="/images/owner.jpg" 
                  alt="Girdhar Gopal Mishra - Owner of Maharaj Mazda Transport"
                  className="owner-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder-owner.png';
                  }}
                />
                <p className="owner-caption">Girdhar Gopal Mishra</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="company-text"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2>Maharaj Mazda Transport</h2>
              <p className="established">Established: Since 2023</p>
              
              <div className="owner-info">
                <h3>Owner Information</h3>
                <p><strong>Owner's Name:</strong> Girdhar Gopal Mishra</p>
                <p><strong>Contact:</strong> appyraja786@gmail.com</p>
              </div>
              
              <div className="company-description">
                <h3>Our Story</h3>
                <p>
                  Founded in 2023, Maharaj Mazda Transport has quickly established itself as a reliable 
                  and efficient transportation service provider. Under the leadership of Mr. Girdhar Gopal Mishra, 
                  our company has grown steadily, building a reputation for punctuality, safety, and customer satisfaction.
                </p>
                <p>
                  We specialize in transporting various types of materials across the country, offering 
                  competitive rates and professional service. Our modern fleet of trucks and experienced 
                  drivers ensure that your goods reach their destination safely and on time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="company-values">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          
          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>We prioritize the safety of your goods and our drivers above all else.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">⏱️</div>
              <h3>Reliability</h3>
              <p>We're committed to timely pickups and deliveries, every single time.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>Honest pricing and transparent communication with all our clients.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">📈</div>
              <h3>Excellence</h3>
              <p>Continuously improving our services to exceed customer expectations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="fleet-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Modern Fleet
          </motion.h2>
          
          <div className="fleet-images">
            <motion.div 
              className="fleet-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="truck-image-container">
                <img 
                  src="/images/truck1.jpg" 
                  alt="Mazda Truck - Model 2022" 
                  className="truck-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder-truck.png';
                  }}
                />
                <p>Mazda Truck - Model 2022</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="fleet-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="truck-image-container">
                <img 
                  src="/images/truck2.jpg" 
                  alt="Mazda Truck - Model 2023" 
                  className="truck-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder-truck.png';
                  }}
                />
                <p>Mazda Truck - Model 2023</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="fleet-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="truck-image-container">
                <img 
                  src="/images/hero-truck.jpg" 
                  alt="Mazda Truck - Model 2024" 
                  className="truck-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder-truck.png';
                  }}
                />
                <p>Mazda Truck - Model 2024</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetails; 