import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import TruckScene from './TruckModel';
import '../styles/Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        {/* Background is set via CSS with the truck image */}
      </div>
      
      <div className="hero-content container">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Maharaj Mazda Transport
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Book transportation services for any type of material with our modern fleet of trucks
          </motion.p>
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a href="#booking" className="btn btn-primary">Book Now</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="hero-canvas-container">
        <Canvas shadows>
          <TruckScene scrollY={scrollY} />
        </Canvas>
      </div>
      
      <div className="animated-truck-container">
        <motion.div 
          className="truck-animation-wrapper"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 20,
            delay: 1 
          }}
        >
          <div className="truck-icon">
            {/* SVG truck with white fill for black and white theme */}
            <svg width="100%" height="100%" viewBox="0 0 640 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" fill="#003366"/>
            </svg>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero; 