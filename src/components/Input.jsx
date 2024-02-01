
import React from 'react';

const Input = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-fuchsia-400 mb-1">{label}</label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
