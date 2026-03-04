import React, { useState } from 'react';
import Login from './pages/Login';
import VisaVerification from './pages/VisaVerification';

export default function VisaRouter() {
  const [showVisaForm, setShowVisaForm] = useState(false);

  return (
    <>
      {!showVisaForm ? (
        <Login onAuth={() => setShowVisaForm(true)} />
      ) : (
        <VisaVerification onBack={() => setShowVisaForm(false)} />
      )}
    </>
  );
}