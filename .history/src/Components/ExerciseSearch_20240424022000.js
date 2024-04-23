import React, { useState } from 'react';

const ExerciseSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by target, body part, or exercise"
        className="border border-gray-600 rounded-lg py-2 px-4 w-full bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default ExerciseSearch;
