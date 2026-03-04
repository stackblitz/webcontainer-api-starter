import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VisaRouter from './VisaRouter'; // Import the new router
import InProgress from './pages/InProgress'; // Import new screen
import './index.css';
import ForgotScreen from './pages/ForgotScreen'; // New Import

export default function App() {
    return (
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<VisaRouter />} />
              <Route path="/forgot" element={<ForgotScreen />} /> {/* Add recovery route */}
              <Route path="/help" element={<InProgress title="Help & Contact" />} />
              <Route path="/terms" element={<InProgress title="Terms of Use" />} />
              <Route path="/privacy" element={<InProgress title="Privacy Policy" />} />
              <Route path="/about" element={<InProgress title="About RealMe" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }