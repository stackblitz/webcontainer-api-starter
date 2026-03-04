import { motion, AnimatePresence } from 'framer-motion';

export default function ConfirmationModal({ isOpen, onConfirm, onCancel }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', 
          justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{
              background: 'white', padding: '30px', borderRadius: '12px',
              maxWidth: '420px', width: '90%', textAlign: 'center',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}
          >
            <h3 style={{ color: '#0066cc', marginBottom: '15px', fontSize: '22px' }}>Confirm Submission</h3>
            <p style={{ fontSize: '15px', color: '#444', marginBottom: '25px', lineHeight: '1.5' }}>
              Are you sure you want to check the visa status? Please ensure all information matches the passport exactly.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <button 
                onClick={onCancel} 
                style={{ padding: '12px 24px', borderRadius: '30px', border: '1px solid #ccc', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Review Details
              </button>
              <button 
                onClick={onConfirm} 
                style={{ padding: '12px 24px', borderRadius: '30px', border: 'none', background: '#0066cc', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Confirm & Check
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}