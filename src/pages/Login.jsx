import { useState } from 'react';

// Added onAuth prop to handle the screen transition
export default function Login({ onAuth }) {
  const [form, setForm] = useState({ user: '', pass: '' });
  const [errors, setErrors] = useState({});

  const validate = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!form.user) newErrors.user = "Please enter your Username";
    if (!form.pass) newErrors.pass = "Please enter your password";
    setErrors(newErrors);
    
    // If no errors exist, trigger the transition to the Visa Form
    if (Object.keys(newErrors).length === 0) {
      onAuth(); 
    }
  };

  return (
    <div className="main-container">
      {/* Maintenance Banner from official portal */}
      <div className="maintenance-banner" style={{ marginBottom: '30px' }}>
        We’re upgrading our RealMe verified identity service. You will be unable to apply for, manage or use your RealMe verified identity from 12am-8am, Sunday 8 March. The RealMe login service is not impacted and can be used as usual.
      </div>

      <div className="auth-card">
        <div className="auth-column border-right">
          <h2 style={{fontWeight: 300, fontSize: '28px'}}>
            Log in with <span style={{color: '#D64309', fontWeight: 700}}>RealMe</span>
          </h2>
          <form onSubmit={validate}>
            <input 
              type="text" placeholder="Username" 
              className={`realme-input ${errors.user ? 'error' : ''}`}
              onChange={(e) => setForm({...form, user: e.target.value})}
            />
            {errors.user && <div className="error-msg">{errors.user}</div>}
            
            <input 
              type="password" placeholder="Password" 
              className={`realme-input ${errors.pass ? 'error' : ''}`}
              onChange={(e) => setForm({...form, pass: e.target.value})}
              style={{marginTop: errors.user ? '0' : '15px'}}
            />
            {errors.pass && <div className="error-msg">{errors.pass}</div>}
            
            <button className="realme-btn" style={{marginTop: '10px'}}>Log in</button>
          </form>

          {/* Added the help links as seen in the clone */}
          <div style={{ marginTop: '25px', display: 'flex', gap: '10px', fontSize: '14px', fontWeight: 'bold' }}>
            <a href="#" style={{ color: '#D64309', textDecoration: 'none' }}>Forgot Username</a>
            <span style={{ color: '#CCC', fontWeight: 'normal' }}>or</span>
            <a href="#" style={{ color: '#D64309', textDecoration: 'none' }}>Forgot Password?</a>
          </div>
        </div>

        <div className="auth-column">
          <h2 style={{fontWeight: 300, fontSize: '28px'}}>
            Create a <span style={{color: '#D64309', fontWeight: 700}}>RealMe</span> login
          </h2>
          <p style={{lineHeight: '1.6', color: '#4C4C4C'}}>To access this service you need a RealMe login.</p>
          <button className="realme-btn">Create a RealMe login</button>
        </div>
      </div>
    </div>
  );
}