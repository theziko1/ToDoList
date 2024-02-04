
import React from 'react';

const Input = ({ label, placeholder, type, value, onChange , className  }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-400 mb-1">{label}</label>
      <input
        type={type}  className={`w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
