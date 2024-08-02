import React, { useState } from 'react';
import './Dropdown.css';  

const Dropdown = ({ breeds, onSelectBreed }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedBreed = event.target.value;
    setSelectedOption(selectedBreed);
    onSelectBreed(selectedBreed);
  };

  return (
    
    <div className="dropdown-container">
      <label htmlFor="breed-select">Select a Breed:</label>
      <select id="breed-select" value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled>Select a breed...</option>
        {breeds.map((breed) => (
          <option key={breed.name} value={breed.name}>
            {breed.name}
          </option>
        ))}
      </select>
      {selectedOption && (
        <div className="breed-info">
          <h3>{selectedOption}</h3>
          <p>{breeds.find(breed => breed.name === selectedOption)?.description}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
