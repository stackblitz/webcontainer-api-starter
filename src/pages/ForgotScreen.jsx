import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButtom';

export default function ForgotScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRecover = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
    } else {
      setError("");
      alert("Recovery instructions have been sent to your email.");
      navigate('/'); // Return to login after success
    }
  };

  return (
    <div className="main-container">
      {/* 1. Official Maintenance Banner */}
      <div className="maintenance-banner">
        We’re upgrading our RealMe verified identity service. Access might be limited 12am–8am.
      </div>

      {/* 2. Brand Circular Back Button */}
      <BackButton onClick={() => navigate('/')} />

      <div className="auth-card" style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}>
        <div className="auth-column" style={{ padding: '50px' }}>
          <h2 style={{ fontWeight: 300, fontSize: '28px', color: '#333' }}>
            Recover your <span style={{ color: '#D64309', fontWeight: 700 }}>RealMe</span> account
          </h2>
          
          <p style={{ fontSize: '15px', color: '#666', margin: '20px 0 30px', lineHeight: '1.6' }}>
            Please enter the email address associated with your RealMe account. We will send you a link to recover your username or reset your password.
          </p>

          <form onSubmit={handleRecover}>
            <label style={{ fontWeight: 700, fontSize: '14px', display: 'block', marginBottom: '10px' }}>
              Email Address <span style={{ color: '#D0021B' }}>*</span>
            </label>
            <input 
              type="email" 
              className={`realme-input ${error ? 'error' : ''}`}
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <div className="error-msg" style={{ margin: '5px 0 15px 0' }}>{error}</div>}
            
            <button className="realme-btn" style={{ marginTop: '20px' }}>
              Send Recovery Link
            </button>
          </form>
          
          <div style={{ marginTop: '30px', borderTop: '1px solid #EEE', paddingTop: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#666' }}>
              Need more help? <a href="#" style={{ color: '#D64309', fontWeight: 700, textDecoration: 'none' }}>Contact the help desk</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}