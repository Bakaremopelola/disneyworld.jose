import React, { useState } from 'react';

function Dropdown() {
  
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h2>Select your option:</h2>
      {}
      <select value={selectedValue} onChange={handleDropdownChange}>
        {}
        <option value="">Select an option</option>
        {}
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {}
      <p>You selected: {selectedValue}</p>
    </div>
  );
}

export default Dropdown
