import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function InProgress({ title }) {
  const navigate = useNavigate();

  return (
    <div className="main-container" style={{ textAlign: 'center', padding: '100px 20px' }}>
      {/* 1. Animated Loader */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0.5
          }}
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#D64309'
          }}
        />
      </div>

      {/* 2. Text Content */}
      <h2 style={{ fontWeight: 300, fontSize: '32px', marginBottom: '10px' }}>
        {title} <span style={{ color: '#D64309', fontWeight: 700 }}>In Progress</span>
      </h2>
      <p style={{ color: '#666', fontSize: '16px', maxWidth: '500px', margin: '0 auto 30px' }}>
        We are currently updating our {title} portal to bring you a more secure and seamless experience. Please check back shortly.
      </p>

      {/* 3. Go Back Action */}
      <button 
        className="back-btn" 
        onClick={() => navigate('/')} 
        style={{ margin: '0 auto', border: '1px solid #CCC', padding: '10px 25px', borderRadius: '30px' }}
      >
        <span className="arrow">←</span> Return to Login
      </button>
    </div>
  );
}