import React, { useState } from 'react';
import axios from 'axios';
import JSONInput from './JSONInput';
import MultiSelectDropdown from './MultiSelectDropdown';
import FilteredResponse from './FilteredResponse';

function App() {
  const [responseData, setResponseData] = useState(null);
  const [filterOptions, setFilterOptions] = useState([]);

  const handleJsonSubmit = async (jsonData) => {
    try {
      // Make a POST request to the Flask backend
      const response = await axios.post('https://diamond-marked-odometer.glitch.me/bfhl', jsonData);
      setResponseData(response.data);  // Assuming the API returns the data in a format that matches our needs
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  const handleFilterChange = (selectedOptions) => {
    setFilterOptions(selectedOptions);
  };

  return (
    <div className="App">
      <h1>Frontend Application</h1>
      <JSONInput onSubmit={handleJsonSubmit} />
      {responseData && (
        <>
          <MultiSelectDropdown onChange={handleFilterChange} />
          <FilteredResponse data={responseData.data} filters={filterOptions} />
        </>
      )}
    </div>
  );
}

export default App;
