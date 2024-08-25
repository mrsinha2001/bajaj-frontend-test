import React from 'react';

function MultiSelectDropdown({ onChange }) {
  const options = [
    { label: 'Alphabets', value: 'alphabets' },
    { label: 'Numbers', value: 'numbers' },
    { label: 'Highest Lowercase Alphabet', value: 'highestLowercase' },
  ];

  const handleChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    onChange(value);
  };

  return (
    <div>
      <select multiple onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MultiSelectDropdown;
