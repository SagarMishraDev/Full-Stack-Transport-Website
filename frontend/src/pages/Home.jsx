import Hero from '../components/Hero';
import Services from '../components/Services';
import BookingForm from '../components/BookingForm';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <BookingForm />
    </div>
  );
};

export default Home; 