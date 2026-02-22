import React from 'react';

const Input = ({ 
  label, 
  value, 
  onChange, 
  placeholder = 'Enter number',
  type = 'number',
  className = '',
  ...props 
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
