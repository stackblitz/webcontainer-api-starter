import React from 'react';

export default function BackButton({ onClick }) {
  const buttonStyle = {
    background: 'none',
    border: 'none',
    color: '#666',
    fontSize: '14px',
    cursor: pointer,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '20px 0',
    padding: '0',
    fontFamily: 'Inter, sans-serif'
  };

  const circleStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    border: '1.5px solid #666',
    borderRadius: '50%',
    fontSize: '16px',
    lineHeight: '1'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <span style={circleStyle}>←</span> Go Back
    </button>
  );
}