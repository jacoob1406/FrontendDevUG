import React from 'react';
import './Button.css';

export default ({ onClick, text, disabled }) => (
  <button onClick={onClick} className="buttonComponent" disabled={disabled}>
    {text}
  </button>
);
