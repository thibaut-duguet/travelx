import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-600 h-24 flex items-center px-4">
      <div className="flex items-center">
      <Image src="/logo.png" alt="Logo" className="ml-[120px]" width={50} height={50} />
        <span className="ml-4 text-white text-2xl font-bold font-poppins">Travel X</span>
      </div>
    </header>
  );
};

export default Header;
