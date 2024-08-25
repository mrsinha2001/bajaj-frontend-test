import React from 'react';

function FilteredResponse({ data, filters }) {
  const filteredData = data.filter((item) => {
    if (filters.includes('numbers') && !isNaN(item)) return true;
    if (filters.includes('alphabets') && /^[A-Za-z]+$/.test(item)) return true;
    if (filters.includes('highestLowercase') && item === getHighestLowercase(data)) return true;
    return false;
  });

  const getHighestLowercase = (data) => {
    const lowerCaseLetters = data.filter((item) => /^[a-z]$/.test(item));
    return lowerCaseLetters.sort().pop();
  };

  return (
    <div>
      <h3>Filtered Response</h3>
      <p>{filteredData.join(', ')}</p>
    </div>
  );
}

export default FilteredResponse;
