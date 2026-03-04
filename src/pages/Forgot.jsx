import { Link } from 'react-router-dom';

export default function Forgot() {
  return (
    <div className="main-container">
      <h2 style={{fontWeight: 300}}>Recover your <span>RealMe</span> account</h2>
      <div className="auth-card" style={{maxWidth: '500px', padding: '40px'}}>
        <p>Enter your email to receive recovery instructions.</p>
        <input type="email" placeholder="Email Address" className="realme-input" />
        <button className="realme-btn">Send Recovery Email</button>
        <Link to="/" className="link-btn" style={{display: 'block', marginTop: '20px'}}>Back to Login</Link>
      </div>
    </div>
  );
}