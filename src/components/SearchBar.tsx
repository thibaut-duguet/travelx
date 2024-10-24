'use client'; // Assurez-vous que ce composant est un composant client

import React, { useState } from 'react';
import SearchInput from './SearchInput'; // Importez votre composant SearchInput
import { MdPlace, MdCalendarMonth } from 'react-icons/md'; // Importez l'icône que vous souhaitez utiliser

interface SearchBarProps {
  onSearch: () => void; // Prop pour la fonction de recherche
  isSearchActive: boolean; // Ajout de la prop isSearchActive
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isSearchActive }) => {
  
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [duration, setDuration] = useState('');

  return (
    <div className={`flex items-center gap-4 transition-all duration-500 ${isSearchActive ? 'mb-4' : 'mb-6'}`}> {/* Animation de la marge */}
          <SearchInput
            Icon={MdPlace}
            description="VILLE DE DÉPART"
            placeholder="D'où partez-vous ?"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          />
          <SearchInput
            Icon={MdPlace}
            description="DESTINATION"
            placeholder="Où voulez-vous partir ?"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
          />
          <SearchInput
            Icon={MdCalendarMonth}
            description="DURÉE (EN JOURS)"
            placeholder="Combien de jours partez-vous ?"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <button
            onClick={onSearch}
            className="h-14 px-4 bg-blue-600 text-white font-poppins font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Rechercher
          </button>
    </div>
  );
};

export default SearchBar;
