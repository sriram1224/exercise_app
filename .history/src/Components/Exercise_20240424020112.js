import React, { useEffect, useState } from 'react';
import ExerciseCard from './ExerciseCard';
import ExerciseSearch from './ExerciseSearch';

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [numCards, setNumCards] = useState(20);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://exercisedb.p.rapidapi.com/exercises', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '83b40fa41emsh0e56bc76144e66ep12e8aajsn4a7730558238', // Replace with your API key
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      });
      const data = await response.json();
      console.log('API Response:', data); // Log the API response
      setExercises(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);


  useEffect(() => {
    const filteredResults = exercises.filter((exercise) =>
      exercise.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [exercises, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const loadMoreCards = () => {
    setNumCards(numCards + 20); // Increase the number of cards to display
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Exercise List</h1>
      
      <ExerciseSearch onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.slice(0, numCards).map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>

      {numCards < searchResults.length && (
        <div className="mt-4">
          <button
            onClick={loadMoreCards}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Exercise;