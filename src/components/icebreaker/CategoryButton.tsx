import React from 'react';
import { CategoryButtonProps } from '../../types/icebreaker';

export const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isSelected, onClick }) => (
  <button 
    className={`
      w-full px-4 py-2 rounded-lg font-bold
      text-lg sm:text-xl md:text-2xl lg:text-3xl
      transition-all duration-300 ease-in-out
      ${isSelected
        ? 'bg-[#e8a179] text-[#120904]'
        : 'bg-[#f5f5dc] text-[#333]'}
      hover:bg-[#e8a179] hover:text-[#120904]
      shadow-lg focus:outline-none
    `}
    onClick={onClick}
    style={{ fontFamily: 'Fh Total' }}
  >
    {category}
  </button>
);