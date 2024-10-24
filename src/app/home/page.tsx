'use client';
// app/home/page.tsx
import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import ResultCard from '@/components/ResultCard';

const HomePage = () => {
  const mockResults = [
    {
      id: 1,
      destination: "Ecosse",
      tags: ["Voyage", "Train", "Vacances"],
      destinationPicture: "/ecosse.jpg"
    },
    {
      id: 2,
      destination: "Côte Amalfitaine",
      tags: ["Culture", "Gastronomie", "Plage"],
      destinationPicture: "/italie.jpg"
    },
    {
      id: 3,
      destination: "Barcelone",
      tags: ["Plage", "Voyage", "Vacances"],
      destinationPicture: "/espagne.jpg"
    },
    {
      id: 4,
      destination: "Ecosse",
      tags: ["Voyage", "Train", "Vacances"],
      destinationPicture: "/ecosse.jpg"
    },
    {
      id: 5,
      destination: "Côte Amalfitaine",
      tags: ["Culture", "Gastronomie", "Plage"],
      destinationPicture: "/italie.jpg"
    },
    {
      id: 6,
      destination: "Barcelone",
      tags: ["Plage", "Voyage", "Vacances"],
      destinationPicture: "/espagne.jpg"
    },
    {
      id: 7,
      destination: "Ecosse",
      tags: ["Voyage", "Train", "Vacances"],
      destinationPicture: "/ecosse.jpg"
    },
    {
      id: 8,
      destination: "Côte Amalfitaine",
      tags: ["Culture", "Gastronomie", "Plage"],
      destinationPicture: "/italie.jpg"
    },
    {
      id: 9,
      destination: "Barcelone",
      tags: ["Plage", "Voyage", "Vacances"],
      destinationPicture: "/espagne.jpg"
    }
  ]

  const [isSearchActive, setIsSearchActive] = useState(true);
  const [results, setResults] = useState<{ id: number; destination: string; tags: string[]; destinationPicture: string; }[]>([]);
  console.log("init")
  console.log(isSearchActive);
  console.log(results);
  const handleSearch = () => {
    setIsSearchActive(false);
    setResults(mockResults);
  };

  return (
    <div className="container mx-auto px-16">
      <div className="mt-12">
        <h1 className="text-4xl font-bold font-poppins pl-2">SORTEZ DES SENTIERS BATTUS 🚅</h1>
        <p className="font-poppins font-light text-lg mt-2 pl-2">Donnez nous vos envies d’ailleurs dans le monde entier, nous vous proposons des alternatives accessibles en train en Europe.</p>
      </div>
      
      <div className="mt-32">
        <h2 className="text-xl font-semibold font-poppins mb-4 pl-2">Partagez nous vos envies d’ailleurs 🌍</h2>
        <SearchBar onSearch={handleSearch} isSearchActive={isSearchActive} />
        {!isSearchActive && results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {results.map(result => (
            <ResultCard key={result.id} destination={result.destination} tags={result.tags} destinationPicture={result.destinationPicture} />
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default HomePage;
