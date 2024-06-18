import React from 'react'
import './styles.css'

function Input({ label, type, placeholder, state, setState }) {

  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <br />
      <input
        type={type}
        value={state}
        placeholder={placeholder}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}

export default Input