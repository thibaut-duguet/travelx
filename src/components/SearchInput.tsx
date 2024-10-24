'use client';

import React, { useState } from 'react';

// Define the props interface
interface SearchInputProps {
  Icon: React.ElementType; // Accept any React component as an icon
  description: string; // Description text
  placeholder: string; // Placeholder text
}

const SearchInput: React.FC<SearchInputProps> = ({ Icon, description, placeholder }) => {
  // Liste des suggestions disponibles
  const suggestions = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg'];

  // État pour la saisie de l'utilisateur et la liste filtrée
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // State to track focus

  // Gestion de la saisie utilisateur
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Filtrer les suggestions
    if (value) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsSuggestionVisible(true);
    } else {
      setFilteredSuggestions([]);
      setIsSuggestionVisible(false);
    }
  };

  // Gestion de la sélection d'une suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setIsSuggestionVisible(false);
  };

  return (
      <div className="flex flex-col w-full h-full">
          <div className={`flex items-center bg-white space-x-2 border-2 border-blue-600 rounded-lg p-2 ${isFocused ? 'ring-2 ring-blue-500' : ''}`}>
            {/* Icone de lieu */}
            <Icon className="w-6 h-full text-blue-600" />
            {/* Input pour la saisie */}
            <div className="flex flex-col w-full">
              <span className="text-gray-600 text-sm font-poppins">{description}</span>
              <input
                type="text"
                value={inputValue}
                    onChange={handleInputChange}
                onFocus={() => setIsFocused(true)} // Set focus state to true
                onBlur={() => setIsFocused(false)}
                className="w-full placeholder-poppins focus:outline-none"
                placeholder={placeholder}
              />
              </div>
          </div>
                  

      {/* Liste des suggestions */}
      {isSuggestionVisible && filteredSuggestions.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 hover:bg-blue-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
