import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-auto" />
      <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
      <p className="text-gray-500 mb-1">Type: {exercise.type}</p>
      <p className="text-gray-500 mb-1">Target: {exercise.target}</p>
      <p className="text-gray-500">Body Part: {exercise.bodyPart}</p>
    </div>
  );
};

export default ExerciseCard;
