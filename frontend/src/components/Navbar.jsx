import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Book Now', path: '/#booking' },
    { name: 'Company', path: '/company' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <h1>Maharaj Mazda <span>Transport</span></h1>
          </Link>
        </motion.div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
        </div>

        <motion.ul 
          className={`nav-links ${isOpen ? 'active' : ''}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              <div className="nav-link-underline"></div>
            </motion.li>
          ))}
          <motion.li
            className="nav-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Link to="/#booking" className="nav-button" onClick={() => setIsOpen(false)}>
              Get Quote
            </Link>
          </motion.li>
        </motion.ul>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="mobile-cta"
              >
                <Link to="/#booking" className="nav-button" onClick={() => setIsOpen(false)}>
                  Get Quote
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 