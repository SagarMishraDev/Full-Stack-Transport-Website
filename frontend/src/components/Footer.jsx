import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-content">
          <motion.div 
            className="footer-logo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src="/truck-icon.svg" alt="Truck Logo" />
            <h3>Maharaj Mazda Transport</h3>
            <p>Reliable transportation services for your goods</p>
            <p>Established since 2023</p>
            <p className="slogan">Your Cargo, Our Responsibility</p>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/company">About Us</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#booking">Book Now</a></li>
              <li><a href="/#contact">Contact Us</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>Contact Us</h4>
            <p><strong>Owner:</strong> Girdhar Gopal Mishra</p>
            <p><strong>Email:</strong> appyraja786@gmail.com</p>
            <p><strong>Phone:</strong> +91 1234567890</p>
            <p><strong>Address:</strong> 123 Transport Street, City, Country</p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f">FB</i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram">IG</i>
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <i className="fab fa-whatsapp">WA</i>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Maharaj Mazda Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 