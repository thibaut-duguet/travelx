import React from 'react';

interface ResultCardProps {
  destination: string;
  tags: string[];
  destinationPicture: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ destination, tags, destinationPicture }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={destinationPicture} alt={destination} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-xl font-semibold mt-2">{destination}</h2>
      <p className="text-gray-500 mt-1">{tags.join(', ')}</p>
    </div>
  );
};

export default ResultCard;