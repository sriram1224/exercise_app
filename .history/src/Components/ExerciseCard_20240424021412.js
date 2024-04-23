import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-auto" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text-2xl font-bold">{exercise.name}</h2>
          <p className="text-lg">{exercise.type}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-2">Target: {exercise.target}</p>
        <p className="text-gray-600">Body Part: {exercise.bodyPart}</p>
      </div>
    </div>
  );
};

export default ExerciseCard;
