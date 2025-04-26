import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CompanyDetails from './pages/CompanyDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<CompanyDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 