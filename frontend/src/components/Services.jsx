import { motion } from 'framer-motion';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Local Delivery',
      description: 'Same-day delivery services within the city with reliable tracking.',
      icon: '🚚',
      image: '/images/local-delivery.jpg'
    },
    {
      id: 2,
      title: 'Long-Distance Transport',
      description: 'Efficient long-distance transportation for all your goods across the country.',
      icon: '🛣️',
      image: '/images/long-distance.jpg'
    },
    {
      id: 3,
      title: 'Heavy Material Transport',
      description: 'Specialized transportation for heavy construction materials and machinery.',
      icon: '🏗️',
      image: '/images/heavy-material.jpg'
    },
    {
      id: 4,
      title: 'Express Delivery',
      description: 'Fast and secure delivery for time-sensitive shipments.',
      icon: '⚡',
      image: '/images/express-delivery.jpg'
    },
    {
      id: 5,
      title: 'Furniture Moving',
      description: 'Careful handling and transportation of your furniture and household items.',
      icon: '🪑',
      image: '/images/furniture-moving.jpg'
    },
    {
      id: 6,
      title: 'Commercial Goods',
      description: 'B2B transportation services for your business inventory and supplies.',
      icon: '📦',
      image: '/images/commercial-goods.jpg'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Transport Services</h2>
          <p>We offer a wide range of transportation services to meet your needs</p>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="service-card" 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 