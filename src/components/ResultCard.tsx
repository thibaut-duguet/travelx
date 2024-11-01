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
      <div className="flex flex-wrap mt-1">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 rounded-lg px-2 py-1 text-sm mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
};

export default ResultCard;
