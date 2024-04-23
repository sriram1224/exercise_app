import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-auto" />
      <h2 className="text-xl font-semibold">{exercise.name}</h2>
      <p className="text-gray-500">{exercise.type}</p>
      <p className="text-gray-500">{exercise.target}</p>
      <p className="text-gray-500">{exercise.bodyPart}</p>
    </div>
  );
};

export default ExerciseCard;

// ExerciseSearch.js
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
        className="border border-gray-300 rounded-lg py-2 px-4 w-full"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default ExerciseSearch;
