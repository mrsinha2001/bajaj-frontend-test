import React, { useState } from 'react';

function JSONInput({ onSubmit }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    try {
      // Normalize quotes by replacing smart quotes with standard quotes
      const normalizedInput = input.replace(/[“”‘’]/g, '"');
      const jsonData = JSON.parse(normalizedInput);
      onSubmit(jsonData);
      setError(null);
    } catch (e) {
      setError('Invalid JSON. Please ensure you are using standard double quotes.');
    }
  };

  return (
    <div classname="bg-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter JSON"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default JSONInput;
