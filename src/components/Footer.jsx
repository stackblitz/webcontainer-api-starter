import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#D64309', padding: '40px 20px', marginTop: 'auto', color: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '25px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>
        <Link to="/help" style={{ color: 'white', textDecoration: 'none' }}>Help & Contact Us</Link>
        <Link to="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms of Use</Link>
        <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About This Site</Link>
      </div>
      <div style={{ maxWidth: '1100px', margin: '25px auto 0', fontSize: '12px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px' }}>
        © New Zealand Government
      </div>
    </footer>
  );
}